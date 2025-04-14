export default function AboutHero() {
  return (
    <section className="relative w-full py-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-bg.jpg')",
            filter: "brightness(0.3)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">About Saavik</h1>
          <p className="text-base text-gray-300 md:text-lg">
            Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
            globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
            help businesses scale and innovate.
          </p>
        </div>
      </div>
    </section>
  )
}

