import ScrollReveal from "@/components/scroll-reveal"

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How it works</h2>
            <p className="mt-4 text-lg text-zinc-400">
              From design to deployment in minutes, not hours
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold">Design Visually</h3>
              <p className="mt-3 text-zinc-400">
                Use our intuitive visual builder to create stunning layouts without writing code
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold">Generate Code</h3>
              <p className="mt-3 text-zinc-400">
                Watch as your design automatically becomes clean, production-ready code
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold">Deploy Instantly</h3>
              <p className="mt-3 text-zinc-400">
                Hit deploy and your website goes live on our global CDN in seconds
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 