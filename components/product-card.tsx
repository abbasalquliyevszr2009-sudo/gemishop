"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Product, formatPrice } from "@/lib/products"

export function ProductCard({
  product,
  onRemove,
}: {
  product: Product
  onRemove: (id: string) => void
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.category ? (
          <Badge className="absolute left-3 top-3 bg-background/90 text-foreground hover:bg-background/90">
            {product.category}
          </Badge>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-pretty font-medium leading-snug text-foreground">
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive"
            onClick={() => onRemove(product.id)}
            aria-label={`${product.title} məhsulunu sil`}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
