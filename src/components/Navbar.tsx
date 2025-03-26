"use client"

import { cn } from "@/lib/utils"
import { SunMoon } from "lucide-react"

import { Briefcase, FolderGit2, HomeIcon, Mail, User } from "lucide-react"

import { Dock, DockIcon, DockItem } from "@/components/animation/DockAnimation"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const data = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Über mich",
      icon: <User className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Skillset",
      icon: <Briefcase className="h-full w-full" />,
      href: "/skills",
    },
    {
      title: "Projekte",
      icon: <FolderGit2 className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "Kontakt",
      icon: <Mail className="h-full w-full" />,
      href: "/contact",
    },
    {
      title: "darkmode",
      icon: <SunMoon className="h-full w-full" />,
      action: "toggleTheme",
    },
  ]

  const [scrolling, setScrolling] = useState(false)
  const pathname = usePathname()
  const [hoverEnabled, setHoverEnabled] = useState(false)
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)

    // Apply theme
    const root = window.document.documentElement
    if (savedTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    const root = window.document.documentElement
    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", newTheme)
  }

  return (
    <div onMouseEnter={() => setHoverEnabled(true)}>
      <div
        className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto border- w-full sm:w-fit h-fit z-[+9999999] ${scrolling ? "hidden" : "block"}`}
      >
        <div className="width-full" onMouseLeave={() => setHoverEnabled(false)}>
          <Dock
            enableHover={hoverEnabled}
            className="items-end pb-3 rounded-full border border-gray-200 dark:border-neutral-600 bg-gray-100"
          >
            {data.map((item, idx) =>
              item.href ? (
                <Link href={item.href} key={idx}>
                  <DockItem
                    className={cn(
                      "aspect-square rounded-full bg-gray-300 dark:bg-neutral-700",
                      pathname === item.href && "bg-gray-100 border nav-border",
                    )}
                  >
                    <DockIcon className={cn(pathname === item.href && "text-cyan-500 dark:text-pink-500")}>
                      {item.icon}
                    </DockIcon>
                  </DockItem>
                </Link>
              ) : (
                <div onClick={item.action === "toggleTheme" ? toggleTheme : undefined} key={idx}>
                  <DockItem className="aspect-square rounded-full bg-gray-300 dark:bg-neutral-700">
                    <DockIcon
                      className={
                        item.action === "toggleTheme" ? (theme === "dark" ? "text-[#f2f2f2]" : "text-[#404040]") : ""
                      }
                    >
                      {item.icon}
                    </DockIcon>
                  </DockItem>
                </div>
              ),
            )}
          </Dock>
        </div>
      </div>
    </div>
  )
}

export default Navbar