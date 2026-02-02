import { getPost } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"

// 1. Change to an async function
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params promise to get the actual slug
  const { slug } = await params;

  // 3. Now slug will be a valid string, and getPost will work
  const { content, data } = getPost(slug)

  return (
    <article className="max-w-3xl mx-auto py-24 px-6 prose dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  )
}