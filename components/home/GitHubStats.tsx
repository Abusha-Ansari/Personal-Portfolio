"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Star, Users, BookOpen, Code2, Activity } from "lucide-react";
import Link from "next/link";

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topRepos: {
    name: string;
    description: string;
    stars: number;
    language: string;
    url: string;
  }[];
  loading: boolean;
  error: string | null;
}

const GITHUB_USERNAME = "Abusha-Ansari";

// Language color mapping
const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-blue-400",
  Java: "bg-orange-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  HTML: "bg-red-400",
  CSS: "bg-purple-400",
  Shell: "bg-green-400",
};

export function GitHubStats() {
  const [data, setData] = useState<GitHubData>({
    publicRepos: 0,
    followers: 0,
    following: 0,
    totalStars: 0,
    topRepos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        // Fetch user profile
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error("Failed to fetch GitHub user data");
        const userData = await userRes.json();

        // Fetch repos (sorted by stars)
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100&direction=desc`
        );
        if (!reposRes.ok) throw new Error("Failed to fetch GitHub repos");
        const reposData = await reposRes.json();

        // Calculate total stars
        const totalStars = reposData.reduce(
          (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
          0
        );

        // Get top 4 repos
        const topRepos = reposData
          .filter((repo: any) => !repo.fork)
          .slice(0, 4)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description",
            stars: repo.stargazers_count,
            language: repo.language || "Unknown",
            url: repo.html_url,
          }));

        if (isMounted) {
          setData({
            publicRepos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            totalStars,
            topRepos,
            loading: false,
            error: null,
          });
        }
      } catch (err: any) {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            loading: false,
            error: err.message,
          }));
        }
      }
    }

    fetchGitHubData();
    return () => { isMounted = false; };
  }, []);

  const stats = [
    { label: "Repositories", value: data.publicRepos, icon: <BookOpen className="h-5 w-5" /> },
    { label: "Total Stars", value: data.totalStars, icon: <Star className="h-5 w-5" /> },
    { label: "Followers", value: data.followers, icon: <Users className="h-5 w-5" /> },
    { label: "Following", value: data.following, icon: <Activity className="h-5 w-5" /> },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open source contributions and public projects. All data fetched live from the GitHub API.
          </p>
        </motion.div>

        {data.error ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>Unable to load GitHub data. Please try again later.</p>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:border-primary/30 transition-colors">
                    <CardContent className="pt-6 pb-4">
                      <div className="flex justify-center mb-2 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold font-mono">
                        {data.loading ? (
                          <span className="inline-block w-8 h-6 bg-muted animate-pulse rounded" />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Top Repos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-5">
                        <div className="h-4 bg-muted rounded w-1/3 mb-3" />
                        <div className="h-3 bg-muted rounded w-2/3 mb-4" />
                        <div className="h-3 bg-muted rounded w-1/4" />
                      </CardContent>
                    </Card>
                  ))
                : data.topRepos.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="h-full hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                          <CardContent className="p-5">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <GitBranch className="h-4 w-4 text-primary" />
                                <h4 className="font-semibold font-mono text-sm">
                                  {repo.name}
                                </h4>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Star className="h-3 w-3" />
                                {repo.stars}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                              {repo.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${
                                  languageColors[repo.language] || "bg-gray-400"
                                }`}
                              />
                              <span className="text-xs text-muted-foreground">
                                {repo.language}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
