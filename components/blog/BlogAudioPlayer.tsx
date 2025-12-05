"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2, Volume2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Slider } from "@/components/ui/slider";

interface BlogAudioPlayerProps {
    slug: string;
}

export function BlogAudioPlayer({ slug }: BlogAudioPlayerProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [activeMode, setActiveMode] = useState<"full" | "summary" | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Cleanup audio URL on unmount
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, [audioUrl]);

    const handlePlay = async (mode: "full" | "summary") => {
        // If we are already playing this mode, just toggle play/pause
        if (activeMode === mode && audioUrl) {
            if (isPlaying) {
                audioRef.current?.pause();
            } else {
                audioRef.current?.play();
            }
            setIsPlaying(!isPlaying);
            return;
        }

        // If switching modes or starting fresh
        setIsLoading(true);
        setError(null);
        setActiveMode(mode);

        // Stop current audio if any
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }

        try {
            const response = await fetch("/api/blog-audio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug, mode }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to generate audio");
            }

            // Get audio blob
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            setAudioUrl(url);

            // Wait for audio element to update with new src
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play();
                    setIsPlaying(true);
                }
            }, 100);

        } catch (err: any) {
            setError(err.message);
            setActiveMode(null);
        } finally {
            setIsLoading(false);
        }
    };

    const onTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const onLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const onEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleSeek = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value[0];
            setCurrentTime(value[0]);
        }
    };

    return (
        <div className="w-full bg-secondary/30 rounded-lg p-6 border border-border/50 my-8">
            <div className="flex items-center gap-2 mb-4">
                <Volume2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Listen to this article</h3>
            </div>

            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                    onClick={() => handlePlay("summary")}
                    disabled={isLoading && activeMode === "full"}
                    variant={activeMode === "summary" ? "default" : "outline"}
                    className="flex-1"
                >
                    {isLoading && activeMode === "summary" ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : activeMode === "summary" && isPlaying ? (
                        <Pause className="mr-2 h-4 w-4" />
                    ) : (
                        <Play className="mr-2 h-4 w-4" />
                    )}
                    {activeMode === "summary" && isPlaying ? "Pause Summary" : "Listen to Summary"}
                </Button>

                <Button
                    onClick={() => handlePlay("full")}
                    disabled={isLoading && activeMode === "summary"}
                    variant={activeMode === "full" ? "default" : "outline"}
                    className="flex-1"
                >
                    {isLoading && activeMode === "full" ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : activeMode === "full" && isPlaying ? (
                        <Pause className="mr-2 h-4 w-4" />
                    ) : (
                        <Play className="mr-2 h-4 w-4" />
                    )}
                    {activeMode === "full" && isPlaying ? "Pause Full Article" : "Listen to Full Article"}
                </Button>
            </div>

            {/* Audio Player Controls */}
            {audioUrl && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    <Slider
                        value={[currentTime]}
                        max={duration || 100}
                        step={1}
                        onValueChange={handleSeek}
                        className="cursor-pointer"
                    />
                </div>
            )}

            <audio
                ref={audioRef}
                src={audioUrl || ""}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
                className="hidden"
            />
        </div>
    );
}
