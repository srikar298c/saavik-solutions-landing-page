import Image from "next/image"
import Link from "next/link"

const trendingPosts = [
  {
    id: 1,
    title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    slug: "trending-post-1",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology",
  },
  {
    id: 2,
    title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    slug: "trending-post-2",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Business",
  },
  {
    id: 3,
    title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    slug: "trending-post-3",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Development",
  },
]

export default function TrendingNews() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-black">
        Trending <span className="text-red-600">News</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {trendingPosts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 text-black transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <div className="mb-2 text-sm font-medium uppercase tracking-wide">{post.category}</div>
                <h3 className="text-sm font-semibold md:text-base">{post.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

