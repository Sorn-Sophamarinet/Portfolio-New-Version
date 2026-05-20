"use client"

import { Download } from "lucide-react"

import { cn } from "@/lib/utils"

const CV_URL = "/sorn-sophamarinet-cv.pdf"
const CV_FILENAME = "Sorn-Sophamarinet-CV.pdf"

type DownloadCvButtonProps = {
  className?: string
  variant?: "primary" | "glass" | "compact"
}

export function DownloadCvButton({ className, variant = "primary" }: DownloadCvButtonProps) {
  return (
    <a
      href={CV_URL}
      download={CV_FILENAME}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-medium transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary" &&
          "rounded-xl bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/35 magnetic-btn",
        variant === "glass" &&
          "rounded-xl glass-premium px-8 py-4 text-foreground hover:border-primary/50 hover:text-primary magnetic-btn spotlight",
        variant === "compact" &&
          "rounded-lg border border-primary/50 px-5 py-2.5 text-sm text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 magnetic-btn",
        className
      )}
      aria-label="Download CV"
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-shift" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        Download CV
      </span>
    </a>
  )
}
