"use client"

import React, { useEffect } from "react"
import { SunMoon } from "lucide-react"

const DarkModeButton = ({ className }) => {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState("dark") // Set dark as default

  // Only run on client side
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "dark" // Use dark as default
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme, mounted])

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <div onClick={toggleTheme} className={className}>
     <div className="flex items-center justify-center w-full h-full">
     <SunMoon className="scale-[1.0]" style={{ minWidth: "24px", minHeight: "24px" }} />
      </div>
    </div>
  )
}

export default DarkModeButton
