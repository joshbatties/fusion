"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { joinWaitlist } from "../../actions/waitlist"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !name) {
      setStatus("error")
      setMessage("Please fill in all fields")
      return
    }

    try {
      setStatus("loading")
      const result = await joinWaitlist({ email, name })

      if (result.success) {
        setStatus("success")
        setMessage("You've been added to our waitlist! Check your email for confirmation.")
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-8 text-white shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <CheckCircle2 className="h-10 w-10 text-[#faa911]" />
          <h3 className="text-xl font-semibold">You're on the list!</h3>
          <p className="text-zinc-300">{message}</p>
          <Button
            variant="outline"
            className="mt-4 border-zinc-700 text-white hover:bg-zinc-700"
            onClick={() => setStatus("idle")}
          >
            Join with another email
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-900/30 border border-red-900/50 p-3 text-red-300">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">{message}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Full Name
        </Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
          required
          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-[#ef3a19]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          required
          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-[#ef3a19]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#ef3a19] hover:bg-[#ef3a19]/90 text-white"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>

      <p className="text-xs text-center text-zinc-400">
        By joining, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}
