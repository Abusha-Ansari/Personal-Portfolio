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

    // Enhanced Markdown-like rendering helper
    const renderInline = (text: string) => {
        // Very basic inline parsing for bold and inline code
        const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={i} className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm border border-border/50">{part.slice(1, -1)}</code>;
            }
            return part;
        });
    };

    const renderContent = (content: string) => {
        const lines = content.trim().split("\n");
        const renderedElements: React.ReactNode[] = [];
        let currentCodeBlock: string[] = [];
        let inCodeBlock = false;

        lines.forEach((line, index) => {
            // Handle code blocks
            if (line.trim().startsWith("```")) {
                if (inCodeBlock) {
                    renderedElements.push(
                        <pre key={`code-${index}`} className="bg-muted/50 p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm border border-border/50">
                            <code>{currentCodeBlock.join("\n")}</code>
                        </pre>
                    );
                    currentCodeBlock = [];
                    inCodeBlock = false;
                } else {
                    inCodeBlock = true;
                }
                return;
            }

            if (inCodeBlock) {
                currentCodeBlock.push(line);
                return;
            }

            // Headings
            if (line.startsWith("## ")) {
                renderedElements.push(<h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">{line.replace("## ", "")}</h2>);
                return;
            }
            if (line.startsWith("### ")) {
                renderedElements.push(<h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-foreground">{line.replace("### ", "")}</h3>);
                return;
            }

            // Lists
            if (line.trim().startsWith("- ")) {
                renderedElements.push(
                    <li key={index} className="ml-6 mb-2 list-disc text-muted-foreground">
                        {renderInline(line.trim().replace("- ", ""))}
                    </li>
                );
                return;
            }

            // Empty lines / Paragraphs
            if (line.trim() === "") {
                renderedElements.push(<div key={index} className="h-4" />);
                return;
            }

            renderedElements.push(<p key={index} className="leading-7 mb-4 text-muted-foreground/90">{renderInline(line)}</p>);
        });

        return renderedElements;
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

                <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
                    {renderContent(post.content)}
                </div>
            </article>
        </div>
    );
}
