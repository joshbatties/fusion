"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Code, LayoutGrid, Zap } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal direction="fade" delay={200}>
            <div className="mb-8 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#ef3a19] animate-pulse" />
              Now in private beta
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400}>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Where Design Meets{" "}
              <span className="bg-gradient-to-r from-[#ef3a19] to-[#faa911] bg-clip-text text-transparent">
                Code
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={600}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
              The revolutionary platform that brings Figma-style graphic design to cursor-style web development. 
              Design visually, deploy instantly.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={800}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-[#ef3a19] hover:bg-[#ef3a19]/90 text-white px-8 py-3 text-lg"
                onClick={scrollToWaitlist}
              >
                Join Waitlist
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700 px-8 py-3 text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={1000}>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-4">
                  <LayoutGrid className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Visual Design</h3>
                <p className="text-zinc-400">Drag-and-drop interface like Figma</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Live Code</h3>
                <p className="text-zinc-400">See your design become code instantly</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-[#ef3a19] to-[#faa911] p-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Instant Deploy</h3>
                <p className="text-zinc-400">One-click deployment to the web</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
} 