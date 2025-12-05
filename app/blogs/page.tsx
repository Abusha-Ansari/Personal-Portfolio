import { getAllPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | Abusha Ansari",
    description: "Read my latest thoughts on frontend development, React, and technology.",
};

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="flex flex-col items-center text-center mb-12 space-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Latest Articles
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Thoughts, tutorials, and insights on software development and modern web technologies.
                </p>
            </div>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg">No posts found yet. Check back soon!</p>
                </div>
            )}
        </div>
    );
}
