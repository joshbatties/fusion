"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ChevronRight,
  Code,
  Combine,
  Facebook,
  Github,
  ImageIcon,
  Instagram,
  LayoutGrid,
  Linkedin,
  Twitter,
  Upload,
  Zap,
  Menu,
} from "lucide-react"
import WaitlistForm from "./components/waitlist-form"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Combine className="h-6 w-6 text-[#ef3a19]" />
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
              <Button className="w-full bg-[#ef3a19] hover:bg-[#ef3a19]/90 text-white mt-2" onClick={scrollToWaitlist}>
                Join Waitlist
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-[#faa911] mb-4 w-fit">
                  Coming Soon
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Where Design Meets Code in Perfect <span className="text-[#ef3a19]">Fusion</span>
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    The revolutionary platform that brings Figma-style graphic design to cursor-style web development.
                    Join our waitlist for <span className="font-bold text-[#faa911]">free early beta access</span> and{" "}
                    <span className="font-bold text-[#faa911]">exclusive discounts</span> upon release.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#ef3a19] hover:bg-[#ef3a19]/90 text-white"
                    onClick={scrollToWaitlist}
                  >
                    Join the Waitlist
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    Watch Preview
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[550px] rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  fill
                  alt="Fusion Interface Preview"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-[#faa911]">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Design and Develop Simultaneously</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl">
                  Fusion bridges the gap between design and development, giving you the best of both worlds in one
                  powerful platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <LayoutGrid className="h-10 w-10 text-[#ef3a19]" />
                  <CardTitle className="mt-4 text-white">Drag & Drop Interface</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>
                    Intuitively design your website with a Figma-style interface that updates the underlying code in
                    real-time.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <Code className="h-10 w-10 text-[#ef3a19]" />
                  <CardTitle className="mt-4 text-white">Live Code Editing</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>See and edit your code directly while designing, with instant visual feedback on your changes.</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <Zap className="h-10 w-10 text-[#ef3a19]" />
                  <CardTitle className="mt-4 text-white">AI-Powered Assistance</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>Let AI help you write and optimize code with natural language prompts, similar to Cursor.</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <Upload className="h-10 w-10 text-[#ef3a19]" />
                  <CardTitle className="mt-4 text-white">One-Click Deploy</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>
                    Deploy your projects instantly with a single click, similar to Vercel's seamless deployment process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-[#faa911]">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simplifying Web Development</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl">
                  Fusion transforms the way you build websites, making development accessible to designers and design
                  intuitive for developers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700">
                    <ImageIcon className="h-6 w-6 text-[#faa911]" />
                  </div>
                  <CardTitle className="mt-4 text-white">Design Visually</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-zinc-400">
                    Create your layout visually using our intuitive drag and drop interface. Arrange components, style
                    elements, and see your design come to life.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700">
                    <Code className="h-6 w-6 text-[#faa911]" />
                  </div>
                  <CardTitle className="mt-4 text-white">Edit Code Directly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-zinc-400">
                    Switch between visual and code views seamlessly. Make precise adjustments to your code and see the
                    changes reflected instantly in the design.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700">
                    <Upload className="h-6 w-6 text-[#faa911]" />
                  </div>
                  <CardTitle className="mt-4 text-white">Deploy Instantly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-zinc-400">
                    When you're ready, deploy your project with a single click. Get a shareable URL instantly and
                    iterate on your design as needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-[#faa911]">
                  Early Feedback
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Beta Testers Are Saying</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl">
                  See what our early testers are saying about how Fusion is transforming their workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 overflow-hidden">
                      <Image src="/placeholder.svg?height=40&width=40" width={40} height={40} alt="Avatar" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Alex Chen</CardTitle>
                      <CardDescription className="text-zinc-400">UI/UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    "As a designer who's always struggled with code, the Fusion prototype is a game-changer. I can't
                    wait for the full release!"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 overflow-hidden">
                      <Image src="/placeholder.svg?height=40&width=40" width={40} height={40} alt="Avatar" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Samantha Rodriguez</CardTitle>
                      <CardDescription className="text-zinc-400">Frontend Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    "The AI code assistance in the Fusion beta has already cut my development time in half. The full
                    version is going to be revolutionary."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 overflow-hidden">
                      <Image src="/placeholder.svg?height=40&width=40" width={40} height={40} alt="Avatar" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Marcus Johnson</CardTitle>
                      <CardDescription className="text-zinc-400">Startup Founder</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    "I've seen the early demos of Fusion and immediately signed up for the waitlist. This is exactly
                    what our team has been looking for."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-[#faa911]">Early Access</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join the Waitlist</h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Be among the first to experience Fusion. Sign up now to get free early beta access and exclusive
                  discounts when we launch.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md space-y-4 py-8">
              <WaitlistForm />
            </div>
            <div className="mx-auto max-w-md mt-8">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#ef3a19]" />
                  <span className="text-sm text-zinc-300">Free early beta access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#ef3a19]" />
                  <span className="text-sm text-zinc-300">Exclusive launch discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#ef3a19]" />
                  <span className="text-sm text-zinc-300">Development updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#ef3a19]" />
                  <span className="text-sm text-zinc-300">Priority support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-[#faa911]">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl">Everything you need to know about Fusion.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">When will Fusion be released?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    We're currently in development and plan to launch our beta in Q3 2025. Join the waitlist to be among
                    the first to get access.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How does the waitlist work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    Sign up with your email, and we'll notify you when beta access is available. Waitlist members will
                    get priority access and special discounts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Will there be a free plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    Yes, we plan to offer a free tier with limited features. Waitlist members will get extended trial
                    periods for premium features.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">What makes Fusion different?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    Fusion uniquely combines visual design tools with code editing, bridging the gap between designers
                    and developers with AI assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Be Part of the Future of Web Development
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Don't miss your chance to be among the first to experience Fusion.
                </p>
              </div>
              <Button size="lg" className="bg-[#ef3a19] hover:bg-[#ef3a19]/90 text-white" onClick={scrollToWaitlist}>
                Join the Waitlist Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Combine className="h-6 w-6 text-[#ef3a19]" />
                <span className="text-xl font-bold">Fusion</span>
              </div>
              <p className="text-sm text-zinc-400">Where design meets code in perfect harmony.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  About
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Press
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Roadmap
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Community
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Status
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Fusion. All rights reserved.</p>
            <p className="text-xs text-zinc-400">Currently in development. Join the waitlist for early access.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
