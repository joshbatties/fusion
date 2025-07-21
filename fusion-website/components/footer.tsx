import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/fusion-logo.png" 
                  alt="Fusion Logo" 
                  width={24} 
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-bold">Fusion</span>
              </div>
              <p className="text-zinc-400 max-w-md">
                The revolutionary platform that brings Figma-style graphic design to cursor-style web development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © 2024 Fusion. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
} 