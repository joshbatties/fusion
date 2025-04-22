"use server"

import { z } from "zod"

// Define schema for validation
const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
})

type WaitlistInput = z.infer<typeof waitlistSchema>

export async function joinWaitlist(data: WaitlistInput) {
  try {
    // Validate the input data
    const validatedData = waitlistSchema.parse(data)

    // In a real implementation, you would:
    // 1. Store the user data in a database
    // 2. Send a verification email
    // 3. Handle any errors or duplicate entries

    // For demo purposes, we'll simulate a successful operation
    // with a slight delay to mimic network latency
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate sending a verification email
    console.log(`Verification email sent to ${validatedData.email}`)

    // Return success response
    return {
      success: true,
      message: "You've been added to our waitlist! Check your email for confirmation.",
    }

    // In a real implementation, you would connect to a database:
    // Example with a hypothetical database client:
    // await db.waitlist.create({
    //   data: {
    //     name: validatedData.name,
    //     email: validatedData.email,
    //     verificationToken: generateToken(),
    //     verified: false,
    //     createdAt: new Date(),
    //   }
    // })

    // Then send verification email with the token
    // await sendVerificationEmail(validatedData.email, token)
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    // Handle other errors
    console.error("Waitlist join error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}

// In a real implementation, you would have these functions:
// function generateToken(): string {
//   return crypto.randomBytes(32).toString('hex')
// }

// async function sendVerificationEmail(email: string, token: string) {
//   // Connect to your email service provider and send email
// }
