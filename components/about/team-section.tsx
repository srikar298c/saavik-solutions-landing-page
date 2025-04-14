import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO & Founder",
    image: "/images/team/team-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    image: "/images/team/team-2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Design Director",
    image: "/images/team/team-3.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Lead Developer",
    image: "/images/team/team-4.jpg",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    position: "Marketing Head",
    image: "/images/team/team-5.jpg",
  },
  {
    id: 6,
    name: "Robert Taylor",
    position: "Project Manager",
    image: "/images/team/team-6.jpg",
  },
  {
    id: 7,
    name: "Lisa Wang",
    position: "UX Specialist",
    image: "/images/team/team-7.jpg",
  },
  {
    id: 8,
    name: "James Brown",
    position: "Backend Engineer",
    image: "/images/team/team-8.jpg",
  },
  {
    id: 9,
    name: "Sophia Martinez",
    position: "Content Strategist",
    image: "/images/team/team-9.jpg",
  },
]

export default function TeamSection() {
  return (
    <section className="relative w-full bg-black py-16">
      {/* Crown with semi-circle cutout */}
      <div className="absolute left-0 right-0 top-0 h-16 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Black background with semi-circle cutout */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute left-1/2 top-0 h-16 w-32 -translate-x-1/2 rounded-b-full bg-white"></div>
          </div>

          {/* Crown emblem */}
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
            <Image src="/images/crown-3d.png" alt="Crown Emblem" width={60} height={60} className="h-auto w-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mb-10 mt-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Our <span className="text-yellow-500">Mastermind</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="overflow-hidden">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-2 text-center">
                    <h3 className="text-xs font-bold text-white sm:text-sm">{member.name}</h3>
                    <p className="text-xs text-gray-300">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

