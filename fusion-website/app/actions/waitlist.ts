"use server"

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const name = formData.get("name") as string

  if (!email || !name) {
    throw new Error("Email and name are required")
  }

  // Here you would typically save to a database
  // For now, we'll just simulate the process
  console.log("New waitlist signup:", { email, name })

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Return success - in a real app you'd handle this differently
  return { success: true, message: "Successfully joined the waitlist!" }
} 