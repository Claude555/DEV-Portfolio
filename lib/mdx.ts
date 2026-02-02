import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_PATH = path.join(process.cwd(), "content/blog")

// 1. Define the Post structure
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
}

export function getAllPosts(): Post[] { // 2. Explicitly type the return
  return fs.readdirSync(BLOG_PATH).map(file => {
    const source = fs.readFileSync(path.join(BLOG_PATH, file), "utf-8")
    const { data } = matter(source)

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled", // Fallback to prevent errors
      excerpt: data.excerpt || "",
      ...data,
    } as Post
  })
}

export function getPost(slug: string) {
  if (!slug) {
    throw new Error("Post slug is undefined")
  }

  const filePath = path.join(BLOG_PATH, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`)
  }

  const source = fs.readFileSync(filePath, "utf-8")
  return matter(source)
}