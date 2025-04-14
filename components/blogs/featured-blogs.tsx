import Image from "next/image"
import Link from "next/link"

const featuredPost = {
  id: 1,
  title: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem",
  slug: "featured-post",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
}

const sidebarPosts = [
  {
    id: 1,
    title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    slug: "sidebar-post-1",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    slug: "sidebar-post-2",
    image:
      "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    slug: "sidebar-post-3",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
]

export default function FeaturedBlogs() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Main Featured Post */}
        <div className="md:col-span-2">
          <Link href={`/blogs/${featuredPost.slug}`} className="block">
            <div className="relative h-[300px] w-full overflow-hidden rounded-md bg-gray-200 md:h-[400px]">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-3 text-xl font-semibold text-black md:text-2xl">{featuredPost.title}</h2>
          </Link>
        </div>

        {/* Sidebar Posts */}
        <div className="space-y-4">
          {sidebarPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="block">
              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-20 w-full overflow-hidden rounded-md bg-gray-200">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-black">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

