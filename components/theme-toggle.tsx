"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "theme-toggle group relative inline-flex h-10 w-[72px] items-center rounded-full p-1",
        "border border-primary/20 bg-card/70 text-foreground shadow-sm backdrop-blur-xl",
        "transition-all duration-500 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-95"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      aria-pressed={isDark}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300/20 via-primary/10 to-sky-400/20 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <span
        className={cn(
          "relative z-10 flex size-8 items-center justify-center rounded-full",
          "bg-background text-primary shadow-md ring-1 ring-primary/15",
          "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          isDark ? "translate-x-8 rotate-[360deg]" : "translate-x-0 rotate-0"
        )}
      >
        <Sun
          className={cn(
            "absolute size-4 text-amber-500 transition-all duration-500",
            isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute size-4 text-primary transition-all duration-500",
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
          )}
        />
      </span>
      <span className="pointer-events-none absolute left-3 top-1/2 size-1 -translate-y-1/2 rounded-full bg-amber-400/60 transition-all duration-500 dark:scale-0 dark:opacity-0" />
      <span className="pointer-events-none absolute right-3 top-1/2 size-1 -translate-y-1/2 scale-0 rounded-full bg-primary/70 opacity-0 transition-all duration-500 dark:scale-100 dark:opacity-100" />
    </button>
  )
}
