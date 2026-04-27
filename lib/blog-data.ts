export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "designing-scalable-rest-apis",
    title: "Designing Scalable REST APIs",
    summary: "Best practices for building REST APIs that scale — covering versioning, pagination, error handling, and authentication patterns.",
    content: `
## Why API Design Matters

A well-designed API is the backbone of any modern application. Whether you're building a mobile app, a web platform, or integrating with third-party services, your API's design determines how maintainable and scalable your system will be.

### Versioning Your API

API versioning is crucial for backward compatibility. There are several strategies:

- **URL versioning**: \`/api/v1/users\` — Simple and explicit
- **Header versioning**: Using custom headers like \`Accept-Version: v1\`
- **Query parameter versioning**: \`/api/users?version=1\`

I prefer URL versioning for its simplicity and discoverability. It makes debugging easier and works seamlessly with API documentation tools.

## Pagination Patterns

Never return unbounded lists from your API. Here are the common approaches:

### Offset-based Pagination

The classic approach using \`limit\` and \`offset\` parameters. Simple to implement but has performance issues with large datasets since the database still needs to scan through all skipped rows.

### Cursor-based Pagination

A more performant approach using an opaque cursor (typically a base64-encoded ID). This is what GitHub, Twitter, and Slack use for their APIs.

## Error Handling

Consistent error responses are non-negotiable. Every error should include:

- A meaningful HTTP status code
- A machine-readable error code
- A human-readable message
- Optional details for debugging

### Rate Limiting

Protect your API with rate limiting. Use Redis to track request counts per API key with sliding window counters. Always return \`X-RateLimit-Remaining\` and \`X-RateLimit-Reset\` headers.

## Authentication Patterns

For most applications, JWT tokens with short expiry and refresh token rotation provide the best balance of security and developer experience. Always hash passwords with bcrypt and never store plaintext secrets.

### Conclusion

Good API design is an investment that pays dividends. Spend the time upfront to get your conventions right, and your future self (and your team) will thank you.
    `,
    publishedAt: "2026-01-15",
    readingTime: "6 min read",
    tags: ["Backend", "API Design", "REST", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    slug: "database-indexing-performance",
    title: "Database Indexing: The Key to Performance",
    summary: "A practical guide to PostgreSQL indexing strategies — when to index, what types to use, and how to diagnose slow queries.",
    content: `
## The Importance of Indexing

If your application is slow, the database is often the bottleneck. Before adding more servers or caching layers, look at your indexes. A single missing index can turn a 50ms query into a 5-second nightmare.

### How Indexes Work

Think of an index like a book's table of contents. Instead of scanning every page (full table scan), the database jumps directly to the relevant data. PostgreSQL uses B-tree indexes by default, which work well for equality and range queries.

## Types of PostgreSQL Indexes

### B-tree (Default)

The workhorse of indexing. Perfect for \`=\`, \`<\`, \`>\`, \`BETWEEN\`, and \`ORDER BY\` operations. This is what you get when you run a plain \`CREATE INDEX\`.

### GIN (Generalized Inverted Index)

Ideal for full-text search, JSONB columns, and array fields. If you're querying inside JSONB documents, GIN indexes are essential.

### GiST (Generalized Search Tree)

Used for geometric data, full-text search, and range types. PostGIS relies heavily on GiST indexes for spatial queries.

## Identifying Slow Queries

### Using EXPLAIN ANALYZE

Always profile your queries with \`EXPLAIN ANALYZE\`. Look for:

- **Seq Scan** on large tables — usually means a missing index
- **High cost estimates** — compare the estimated vs actual rows
- **Nested loops** with large datasets — consider join optimizations

### pg_stat_statements

Enable this extension to track query performance across your application. It shows execution count, total time, and mean time per query — invaluable for finding your worst offenders.

## Indexing Best Practices

- Don't over-index — each index slows down writes
- Use partial indexes for filtered queries
- Consider composite indexes for multi-column WHERE clauses
- Monitor index usage with \`pg_stat_user_indexes\`
- Regularly run \`VACUUM ANALYZE\` to keep statistics fresh

### Conclusion

Indexing is both an art and a science. Start with \`EXPLAIN ANALYZE\`, add indexes where needed, and monitor the impact. Your users will notice the difference.
    `,
    publishedAt: "2026-02-10",
    readingTime: "7 min read",
    tags: ["PostgreSQL", "Database", "Performance", "Backend"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    slug: "the-future-of-ai-in-coding",
    title: "The Future of AI in Coding",
    summary: "How AI tools like Copilot and ChatGPT are changing the landscape of software engineering, especially in backend development.",
    content: `
## AI as a Pair Programmer

Artificial Intelligence is transforming every industry, and software development is no exception. Tools like GitHub Copilot act as an intelligent pair programmer, suggesting code snippets and even entire functions.

### Productivity Boost

For boilerplate code and repetitive tasks, AI is a game-changer. It frees up developers to focus on complex architectural decisions and business logic rather than syntax. Writing CRUD endpoints, database migrations, and test boilerplate becomes dramatically faster.

### The Human Element

However, AI is not a replacement for human engineers. It lacks the context, creativity, and deep understanding of the problem domain that a human brings. Code generated by AI still needs to be reviewed, tested, and understood.

## Backend-Specific AI Applications

### Schema Generation

AI can help generate database schemas from natural language descriptions, suggest normalization strategies, and even recommend indexing approaches based on query patterns.

### API Documentation

Tools can now auto-generate OpenAPI specifications from code comments, making API documentation maintenance almost effortless.

## Ethical Considerations

There are also valid concerns about copyright, security, and the potential for AI to hallucinate incorrect code. As we integrate these tools, we must remain vigilant — especially when AI-generated code touches authentication, authorization, or data handling.

### Final Thoughts

AI is a powerful tool in our arsenal. By embracing it responsibly, we can become more efficient and effective developers. The key is knowing when to trust the suggestion and when to think critically.
    `,
    publishedAt: "2026-03-10",
    readingTime: "4 min read",
    tags: ["AI", "Technology", "Backend", "Future"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
