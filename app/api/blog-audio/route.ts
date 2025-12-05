import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/blog-data";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { slug, mode } = await req.json();

    if (!slug || !mode) {
      return NextResponse.json(
        { error: "Missing slug or mode" },
        { status: 400 }
      );
    }

    // Check cache first
    const audioDir = path.join(process.cwd(), "public", "audio");
    const fileName = `${slug}-${mode}.wav`;
    const filePath = path.join(audioDir, fileName);

    if (fs.existsSync(filePath)) {
      console.log(`Serving cached audio for ${slug} (${mode})`);
      const fileBuffer = fs.readFileSync(filePath);
      return new NextResponse(new Uint8Array(fileBuffer), {
        headers: {
          "Content-Type": "audio/wav",
          "Content-Length": fileBuffer.length.toString(),
        },
      });
    }

    const post = getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    // Determine text to synthesize
    let textToSynthesize = "";
    if (mode === "summary") {
      textToSynthesize = post.summary;
    } else {
      textToSynthesize = post.content
        .replace(/#{1,6}\s/g, "") // Headers
        .replace(/(\*\*|__)(.*?)\1/g, "$2") // Bold
        .replace(/(\*|_)(.*?)\1/g, "$2") // Italic
        .replace(/`{3}[\s\S]*?`{3}/g, "Code block skipped.") // Skip code blocks
        .replace(/`(.+?)`/g, "$1") // Inline code
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Links
        .replace(/\n/g, " "); // Newlines to spaces
    }

    // Check for API Key
    const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || process.env.GOOGLE_CLOUD_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration error: Missing Google AI Studio API Key" },
        { status: 500 }
      );
    }

    // Initialize GoogleGenAI
    const ai = new GoogleGenAI({ apiKey });

    // Call Gemini TTS Model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: textToSynthesize }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Kore" },
          },
        },
      },
    });

    const audioContent = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!audioContent) {
      return NextResponse.json(
        { error: "No audio content received from Gemini" },
        { status: 500 }
      );
    }

    // Convert base64 to buffer (PCM Data)
    const pcmBuffer = Buffer.from(audioContent, "base64");

    // Create WAV Header
    // Specs from user snippet: 24kHz, 1 channel, 16-bit (2 bytes)
    const sampleRate = 24000;
    const numChannels = 1;
    const bitsPerSample = 16;
    const wavHeader = createWavHeader(pcmBuffer.length, sampleRate, numChannels, bitsPerSample);

    // Combine header and PCM data
    const wavBuffer = Buffer.concat([wavHeader, pcmBuffer]);

    // Save to cache (as .wav)
    // Update fileName extension to .wav
    const wavFileName = `${slug}-${mode}.wav`;
    const wavFilePath = path.join(audioDir, wavFileName);

    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }
    fs.writeFileSync(wavFilePath, new Uint8Array(wavBuffer.buffer, wavBuffer.byteOffset, wavBuffer.byteLength));
    console.log(`Cached audio for ${slug} (${mode})`);

    // Return audio stream
    return new NextResponse(new Uint8Array(wavBuffer.buffer, wavBuffer.byteOffset, wavBuffer.byteLength), {
      headers: {
        "Content-Type": "audio/wav",
        "Content-Length": wavBuffer.length.toString(),
      },
    });

  } catch (error: any) {
    console.error("Error in blog-audio route:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

function createWavHeader(dataLength: number, sampleRate: number, numChannels: number, bitsPerSample: number): Buffer {
  const header = Buffer.alloc(44);

  // RIFF chunk descriptor
  header.write("RIFF", 0); // ChunkID
  header.writeUInt32LE(36 + dataLength, 4); // ChunkSize
  header.write("WAVE", 8); // Format

  // fmt sub-chunk
  header.write("fmt ", 12); // Subchunk1ID
  header.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  header.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
  header.writeUInt16LE(numChannels, 22); // NumChannels
  header.writeUInt32LE(sampleRate, 24); // SampleRate
  header.writeUInt32LE(sampleRate * numChannels * (bitsPerSample / 8), 28); // ByteRate
  header.writeUInt16LE(numChannels * (bitsPerSample / 8), 32); // BlockAlign
  header.writeUInt16LE(bitsPerSample, 34); // BitsPerSample

  // data sub-chunk
  header.write("data", 36); // Subchunk2ID
  header.writeUInt32LE(dataLength, 40); // Subchunk2Size

  return header;
}
