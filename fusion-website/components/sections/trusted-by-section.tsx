import ScrollReveal from "@/components/scroll-reveal"

const testimonials = [
  {
    id: 1,
    quote: "Fusion allowed us to scale our design-to-development workflow without sacrificing quality. It's been a crucial multiplier for our team.",
    name: "Sarah Chen",
    title: "Senior Design Systems Lead at TechCorp",
    company: "TechCorp",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    quote: "With Fusion, we reduced our prototype-to-production time by 70%. It's like unlocking a new level of productivity we never thought was possible.",
    name: "Development Team",
    title: "Innovate Labs",
    company: "Innovate Labs", 
    bgColor: "bg-[#fde7dc]",
  },
  {
    id: 3,
    quote: "Fusion bridges the gap between design and code perfectly. Our designers can now contribute directly to the development process.",
    name: "Product Team",
    title: "DesignFlow",
    company: "DesignFlow",
    bgColor: "bg-[#e9e9e9]",
  }
]

const stats = [
  {
    id: 1,
    value: "70%",
    description: "faster development time",
    company: "TechCorp",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    value: "Webflow",
    description: "",
    company: "Webflow",
    bgColor: "bg-white",
  },
  {
    id: 3,
    value: "Vercel",
    description: "",
    company: "Vercel", 
    bgColor: "bg-white",
  }
]

export default function TrustedBySection() {
  return (
    <section className="py-8 bg-white" id="testimonials">
      <div className="container mx-auto max-w-6xl px-6 md:px-8 py-6 md:py-10">
        <ScrollReveal direction="up">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Trusted by industry leaders</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-12 gap-4">
          {/* Stats box */}
          <ScrollReveal direction="up" delay={100}>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden">
              <div className={`h-full ${stats[0].bgColor} p-8 flex flex-col`}>
                <div className="mt-auto">
                  <div className="text-5xl font-bold mb-2">{stats[0].value}</div>
                  <div className="text-gray-600">{stats[0].description}</div>
                </div>
                <div className="mt-auto pt-6">
                  <div className="font-bold text-lg">
                    TechCorp
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Webflow box */}
          <ScrollReveal direction="up" delay={200}>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100">
              <div className="h-full flex items-center justify-center p-6">
                <div className="font-black text-2xl italic">Webflow</div>
              </div>
            </div>
          </ScrollReveal>

          {/* First testimonial */}
          <ScrollReveal direction="up" delay={300}>
            <div className="col-span-12 md:col-span-8 lg:col-span-6 rounded-xl overflow-hidden">
              <div className={`h-full ${testimonials[0].bgColor} p-8 flex flex-col`}>
                <div className="text-2xl font-medium mb-8">
                  "{testimonials[0].quote}"
                </div>
                <div className="mt-auto">
                  <div className="font-medium">{testimonials[0].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[0].title}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Second testimonial */}
          <ScrollReveal direction="up" delay={400}>
            <div className="col-span-12 md:col-span-7 lg:col-span-6 rounded-xl overflow-hidden">
              <div className={`h-full ${testimonials[1].bgColor} p-8 flex flex-col`}>
                <div className="text-2xl font-medium mb-8">
                  "{testimonials[1].quote}"
                </div>
                <div className="mt-auto">
                  <div className="font-bold text-lg">{testimonials[1].company}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Vercel box */}
          <ScrollReveal direction="up" delay={500}>
            <div className="col-span-12 md:col-span-5 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100">
              <div className="h-full flex items-center justify-center p-6">
                <div className="font-black text-xl">
                  <span className="inline-block bg-black text-white px-1 py-0.5 rounded">▲</span> Vercel
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Third testimonial */}
          <ScrollReveal direction="up" delay={600}>
            <div className="col-span-12 md:col-span-12 lg:col-span-3 rounded-xl overflow-hidden">
              <div className={`h-full ${testimonials[2].bgColor} p-8 flex flex-col`}>
                <div className="text-2xl font-medium mb-8">
                  "{testimonials[2].quote}"
                </div>
                <div className="mt-auto">
                  <div className="font-bold flex items-center">
                    <span className="inline-block mr-1">⊙</span> {testimonials[2].company}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
} 