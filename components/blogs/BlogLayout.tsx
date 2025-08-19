import React from 'react'
import Image from 'next/image'

export default function BlogLayout({
  children,
  frontMatter,
}: {
  children: React.ReactNode
  frontMatter: any
}) {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-center text-4xl font-bold mb-5">{frontMatter.title}</h1>
      <p className="text-sm text-gray-500 text-end">By {frontMatter.author} on {frontMatter.date}</p>
      <hr className="my-4" />
       {/* Blog Cover Image */}
      {frontMatter.image && (
        <div className="my-6 flex justify-center">
          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            width={400}
            height={200}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      )}
      <article className="prose dark:prose-invert max-w-none leading-relaxed justify-center">
        {children}
      </article>
    </main>
  )
}