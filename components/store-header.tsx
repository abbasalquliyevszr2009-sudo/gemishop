import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { LiveClock } from "@/components/live-clock"

export function StoreHeader({ count }: { count: number }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/gemishop-logo.png"
              alt="GemiShop logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
              GemiShop
            </span>
          </div>
          <LiveClock />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#catalog">
            Kataloq
          </a>
          <a className="transition-colors hover:text-foreground" href="#manage">
            İdarə Paneli
          </a>
        </nav>

        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground">
          <ShoppingBag className="size-4 text-primary" aria-hidden="true" />
          <span className="font-medium">{count}</span>
          <span className="sr-only">kataloqdakı məhsullar</span>
        </div>
      </div>
    </header>
  )
}
