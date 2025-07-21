"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlurIn from "@/components/magicui/blur-in";
import { FadeIn } from "@/components/magicui/fade-in";
import Marquee from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/scroll-reveal";

const trustedCompanies = [
  {
    name: "TechCorp",
    logo: "TC",
    description: "Enterprise solutions",
    bgColor: "from-blue-500 to-blue-600",
  },
  {
    name: "Webflow",
    logo: "W",
    description: "Design platform",
    bgColor: "from-purple-500 to-purple-600",
  },
  {
    name: "Vercel",
    logo: "▲",
    description: "Frontend cloud",
    bgColor: "from-gray-800 to-black",
  },
  {
    name: "DesignFlow",
    logo: "DF",
    description: "Creative tools",
    bgColor: "from-green-500 to-green-600",
  },
  {
    name: "Innovate Labs",
    logo: "IL",
    description: "Research & Dev",
    bgColor: "from-orange-500 to-orange-600",
  },
];

const features = [
  {
    Icon: "",
    name: "Trusted by Industry Leaders",
    description: "Join thousands of teams who have revolutionized their design-to-development workflow",
    href: "",
    cta: "",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-6xl font-bold text-primary/20"
          >
            FUSION
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "70%",
    description: "faster development time with Fusion's integrated workflow",
    className: "col-span-3 md:col-span-1",
    href: "",
    cta: "",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
        <div className="absolute top-4 right-4">
          <div className="text-4xl">📈</div>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Company Showcase",
    description: "Trusted by leading companies worldwide",
    className: "col-span-3 md:col-span-2",
    href: "",
    cta: "",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Marquee
          className="absolute h-2/3 top-10 [--duration:30s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
          pauseOnHover
        >
          {trustedCompanies.map((company, idx) => (
            <div
              key={idx}
              className={cn(
                "relative w-32 h-20 cursor-pointer overflow-hidden rounded-xl border p-4 hover:-translate-y-1",
                "border-gray-950/[.1] bg-white hover:bg-gray-50",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu transition-all duration-300 ease-out"
              )}
            >
              <div className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${company.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
                  {company.logo}
                </div>
                <div className="text-xs font-semibold text-center">
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>
    ),
  },
  {
    Icon: "",
    name: "Seamless Integration",
    description: "From Figma to production in minutes, not hours",
    className: "col-span-3 md:col-span-1",
    href: "",
    cta: "",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-3xl"
          >
            ⚡
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Design Systems",
    description: "Maintain consistency across your entire product suite",
    className: "col-span-3 md:col-span-3",
    href: "",
    cta: "",
    background: (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 p-6 opacity-30">
          {Array.from({ length: 24 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="bg-primary/40 rounded"
            />
          ))}
        </div>
        <div className="absolute bottom-6 left-6">
          <div className="text-2xl font-semibold text-primary">
            Unified Design Language
          </div>
        </div>
      </div>
    ),
  },
];

export default function TrustedByBento() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-900" id="trusted-by">
      <div className="container mx-auto max-w-6xl px-6 md:px-8 py-6 md:py-10">
        <ScrollReveal direction="up">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of teams who have revolutionized their design-to-development workflow with Fusion
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center overflow-hidden max-w-5xl">
              <div className="w-full py-2 px-2 lg:py-4 lg:px-4">
                <BentoGrid>
                  {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                  ))}
                </BentoGrid>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 