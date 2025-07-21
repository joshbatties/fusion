"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
}

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 600,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 40px, 0)"
      case "down":
        return "translate3d(0, -40px, 0)"
      case "left":
        return "translate3d(-40px, 0, 0)"
      case "right":
        return "translate3d(40px, 0, 0)"
      case "fade":
        return "translate3d(0, 0, 0)"
      default:
        return "translate3d(0, 40px, 0)"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        transform: isVisible ? "translate3d(0, 0, 0)" : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      {children}
    </div>
  )
} 