"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/fusion-logo.png" 
            alt="Fusion Logo" 
            width={32} 
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-bold">Fusion</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-[#ef3a19] transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-[#ef3a19] transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-[#ef3a19] transition-colors">
            Testimonials
          </Link>
          <Link href="#waitlist" className="text-sm font-medium hover:text-[#ef3a19] transition-colors">
            Join Waitlist
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:inline-flex bg-[#ef3a19] hover:bg-[#ef3a19]/90 text-white"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-[#ef3a19]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="#features"
              className="text-sm font-medium p-2 hover:bg-zinc-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium p-2 hover:bg-zinc-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium p-2 hover:bg-zinc-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#waitlist"
              className="text-sm font-medium p-2 hover:bg-zinc-800 rounded-md"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
} 