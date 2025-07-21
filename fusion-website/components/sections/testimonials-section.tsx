import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Trusted by designers and developers
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              See what early users are saying about Fusion
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 text-[#faa911] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">
                  "Finally, a tool that speaks both designer and developer language. Fusion has revolutionized our workflow."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-zinc-400 text-sm">Product Designer, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 text-[#faa911] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">
                  "The code quality is impressive. It's exactly what I would write myself, but generated instantly."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Mike Rodriguez</p>
                    <p className="text-zinc-400 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 text-[#faa911] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">
                  "We've cut our development time by 70%. This is the future of web development."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Alex Kim</p>
                    <p className="text-zinc-400 text-sm">CTO, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 