"use client"

import { PackageOpen } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products"

export function ProductGrid({
  products,
  onRemove,
}: {
  products: Product[]
  onRemove: (id: string) => void
}) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-20 text-center">
        <PackageOpen className="size-8 text-muted-foreground" aria-hidden="true" />
        <p className="font-medium text-foreground">Hələ məhsul yoxdur</p>
        <p className="max-w-xs text-sm text-muted-foreground">
          Aşağıdakı İdarə Paneli bölməsindən ilk məhsulunuzu əlavə edin.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  )
}
