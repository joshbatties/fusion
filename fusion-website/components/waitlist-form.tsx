"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { joinWaitlist } from "@/app/actions/waitlist"
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
      const formData = new FormData()
      formData.append("email", email)
      formData.append("name", name)
      
      const result = await joinWaitlist(formData)

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
          <h3 className="text-lg font-semibold">You're on the waitlist!</h3>
          <p className="text-zinc-400">{message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-8 text-white shadow-sm">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Join the Waitlist</h3>
          <p className="text-sm text-zinc-400">Be among the first to experience Fusion</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
              disabled={status === "loading"}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
              disabled={status === "loading"}
              required
            />
          </div>
          {status === "error" && (
            <div className="flex items-center space-x-2 text-red-400">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">{message}</p>
            </div>
          )}
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
              "Join Waitlist"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
} 