import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
            {post.coverImage && (
                <div className="relative w-full h-48 overflow-hidden">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}
            <CardHeader className="space-y-2 pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
                    <Link href={`/blogs/${post.slug}`} className="hover:underline decoration-primary/50 underline-offset-4">
                        {post.title}
                    </Link>
                </h3>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.summary}
                </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4 pt-0">
                <div className="flex items-center gap-4 text-xs text-muted-foreground w-full">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</span>

                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime}</span>
                    </div>
                </div>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent group">
                    <Link href={`/blogs/${post.slug}`} className="flex items-center gap-1">
                        Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
