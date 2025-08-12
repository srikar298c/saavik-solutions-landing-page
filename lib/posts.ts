import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// // import { serialize } from 'next-mdx-remote/serialize'
// // import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  title: string
  date: string
  tags: string[]
  author: string
  excerpt: string
  slug: string
  category: string
}
export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta
  content: string
}> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    meta: {
      ...(data as Omit<PostMeta, 'slug'>),
      slug,
    },
    content,
  }
}