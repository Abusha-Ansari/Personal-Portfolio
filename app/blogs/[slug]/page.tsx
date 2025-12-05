import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { BlogAudioPlayer } from "@/components/blog/BlogAudioPlayer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Abusha Ansari`,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
            publishedTime: post.publishedAt,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Simple Markdown-like rendering helper
    const renderContent = (content: string) => {
        return content.split("\n").map((line, index) => {
            if (line.startsWith("## ")) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("### ")) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.replace("### ", "")}</h3>;
            }
            if (line.startsWith("```")) {
                // Very basic code block handling - just hiding the backticks for now or rendering as pre
                if (line.length > 3) return null; // Skip start/end lines of code blocks for simplicity in this basic parser
                return null;
            }
            // Handle code blocks content (this is a very naive parser, but sufficient for the mock data)
            // A better approach for a real app would be a library, but we are avoiding deps.

            if (line.trim() === "") {
                return <br key={index} />;
            }

            return <p key={index} className="leading-7 mb-4 text-muted-foreground">{line}</p>;
        });
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                <Link href="/blogs" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blogs
                </Link>
            </Button>

            <article>
                <header className="mb-8 space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>
                </header>

                {post.coverImage && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 border border-border/50 shadow-sm">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <BlogAudioPlayer slug={post.slug} />

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* 
            In a real app, use a proper markdown parser like react-markdown.
            For this task without adding deps, we render the text with basic handling.
          */}
                    <div className="whitespace-pre-wrap font-sans text-foreground/90">
                        {/* We are using whitespace-pre-wrap to preserve formatting from the mock data string */}
                        {post.content}
                    </div>
                </div>
            </article>
        </div>
    );
}
