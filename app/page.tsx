"use client"

import { useState } from "react"
import { StoreHeader } from "@/components/store-header"
import { ProductGrid } from "@/components/product-grid"
import { ProductManager } from "@/components/product-manager"
import { initialProducts, type Product } from "@/lib/products"

export default function Page() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  function handleAdd(product: Omit<Product, "id">) {
    setProducts((prev) => [{ ...product, id: crypto.randomUUID() }, ...prev])
  }

  function handleRemove(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <StoreHeader count={products.length} />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            GemiShop-a Xoş Gəlmisiniz
          </p>
          <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Keyfiyyətli məhsullar, diqqətlə seçilmiş.
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Gündəlik məhsullar kataloqumuza baxın və ya mağazaya yeni məhsullar
            əlavə etmək üçün İdarə Paneli bölməsinə keçin.
          </p>
        </section>

        <section id="catalog" aria-labelledby="catalog-heading" className="mb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2
              id="catalog-heading"
              className="font-heading text-2xl font-semibold text-foreground"
            >
              Kataloq
            </h2>
            <p className="text-sm text-muted-foreground">
              {products.length} {products.length === 1 ? "məhsul" : "məhsul"}
            </p>
          </div>
          <ProductGrid products={products} onRemove={handleRemove} />
        </section>

        <section
          id="manage"
          aria-labelledby="manage-heading"
          className="scroll-mt-20"
        >
          <h2
            id="manage-heading"
            className="mb-6 font-heading text-2xl font-semibold text-foreground"
          >
            İdarə Paneli
          </h2>
          <ProductManager onAdd={handleAdd} />
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          &copy; {new Date().getFullYear()} GemiShop. Bütün hüquqlar qorunur.
        </div>
      </footer>
    </div>
  )
}
