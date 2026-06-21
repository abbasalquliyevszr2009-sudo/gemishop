"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

function formatTime(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, "0")
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export function LiveClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(formatTime(new Date()))
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm tabular-nums text-foreground">
      <Clock className="size-4 text-primary" aria-hidden="true" />
      <span className="font-medium" suppressHydrationWarning>
        {time ?? "--:--:--"}
      </span>
      <span className="sr-only">cari vaxt</span>
    </div>
  )
}
