import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold">Blog</h1>

      <div className="mt-12 space-y-8">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block glass p-6 rounded-xl"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
