"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Plus, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Product } from "@/lib/products"

type Errors = {
  title?: string
  price?: string
  image?: string
}

export function ProductManager({
  onAdd,
}: {
  onAdd: (product: Omit<Product, "id">) => void
}) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [errors, setErrors] = useState<Errors>({})

  function validate(): Errors {
    const next: Errors = {}
    if (!title.trim()) next.title = "Başlıq tələb olunur."
    const priceNum = Number(price)
    if (!price.trim() || Number.isNaN(priceNum) || priceNum <= 0)
      next.price = "0-dan böyük düzgün qiymət daxil edin."
    if (!image.trim()) next.image = "Şəkil URL-i tələb olunur."
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    onAdd({
      title: title.trim(),
      price: Number(price),
      image: image.trim(),
    })

    setTitle("")
    setPrice("")
    setImage("")
    setErrors({})
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-heading">Məhsul Əlavə Et</CardTitle>
        <CardDescription>
          Kataloqa yeni məhsul əlavə etmək üçün aşağıdakı məlumatları doldurun.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Məhsulun adı</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="məs. Simsiz Qulaqlıq"
              aria-invalid={!!errors.title}
            />
            {errors.title ? (
              <p className="text-sm text-destructive">{errors.title}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="price">Qiymət (USD)</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="1"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 199"
              aria-invalid={!!errors.price}
            />
            {errors.price ? (
              <p className="text-sm text-destructive">{errors.price}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">Şəkil URL-i</Label>
            <Input
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
              aria-invalid={!!errors.image}
            />
            {errors.image ? (
              <p className="text-sm text-destructive">{errors.image}</p>
            ) : null}
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex size-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
                {image.trim() ? (
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Önizləmə"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <ImageIcon
                    className="size-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="text-sm text-muted-foreground">Şəkil önizləməsi</p>
            </div>
            <Button type="submit" className="gap-2">
              <Plus className="size-4" />
              Məhsul Əlavə Et
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
