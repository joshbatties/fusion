import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"
import ScrollReveal from "@/components/scroll-reveal"

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Be among the first to experience Fusion
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Join our private beta and help shape the future of web development
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-16 text-center">
            <p className="text-zinc-400 mb-6">Follow us for updates</p>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-zinc-400 hover:text-[#ef3a19] transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-[#ef3a19] transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-[#ef3a19] transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-[#ef3a19] transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-[#ef3a19] transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 