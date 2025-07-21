import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Github, ImageIcon, LayoutGrid, Upload, Zap } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need to build amazing websites
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Fusion combines the best of visual design tools with the power of modern web development
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-3">
                  <LayoutGrid className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Visual Builder</CardTitle>
                <CardDescription className="text-zinc-400">
                  Design with a familiar interface inspired by Figma and modern design tools
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Clean Code</CardTitle>
                <CardDescription className="text-zinc-400">
                  Generate production-ready React, Vue, or vanilla HTML/CSS code
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-3">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Asset Management</CardTitle>
                <CardDescription className="text-zinc-400">
                  Upload, organize, and optimize images and assets automatically
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Instant Preview</CardTitle>
                <CardDescription className="text-zinc-400">
                  See your changes live as you design with real-time preview
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-3">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <CardTitle>One-Click Deploy</CardTitle>
                <CardDescription className="text-zinc-400">
                  Deploy your websites instantly to CDN with custom domain support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-700 bg-zinc-800 text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-3">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Version Control</CardTitle>
                <CardDescription className="text-zinc-400">
                  Integrated Git workflow with branch management and collaboration
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 