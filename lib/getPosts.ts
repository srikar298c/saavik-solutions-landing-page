import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')

  const filenames = fs.readdirSync(postsDirectory)

  return filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        ...data,
      }
    })
}