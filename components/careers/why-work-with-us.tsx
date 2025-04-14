export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
          Why Work With <span className="text-red-600">Us?</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
          {/* Innovation Driven */}
          <div className="flex h-[180px] w-[220px] flex-col items-center justify-center rounded-lg bg-red-500 p-4 text-white sm:h-[200px] sm:w-[240px] md:h-[220px] md:w-[280px]">
            <h3 className="mb-4 text-center text-xl font-bold">
              Innovation
              <br />
              Driven
            </h3>
            <p className="text-center text-xs leading-relaxed md:text-sm">
              Work on cutting-edge projects
              <br />
              that challenge and inspire you.
            </p>
          </div>

          {/* Collaborative Culture */}
          <div className="flex h-[180px] w-[220px] flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-red-500 sm:h-[200px] sm:mt-8 sm:w-[240px] md:h-[220px] md:w-[280px]">
            <h3 className="mb-4 text-center text-xl font-bold">
              Collaborative
              <br />
              Culture
            </h3>
            <p className="text-center text-xs leading-relaxed md:text-sm">
              Join a team that values ideas,
              <br />
              creativity, and teamwork.
            </p>
          </div>

          {/* Impactful Work */}
          <div className="flex h-[180px] w-[220px] flex-col items-center justify-center rounded-lg bg-red-500 p-4 text-white sm:h-[200px] sm:w-[240px] md:h-[220px] md:w-[280px]">
            <h3 className="mb-4 text-center text-xl font-bold">
              Impactful
              <br />
              Work
            </h3>
            <p className="text-center text-xs leading-relaxed md:text-sm">
              Your contributions matter,
              <br />
              shaping the success of
              <br />
              businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

