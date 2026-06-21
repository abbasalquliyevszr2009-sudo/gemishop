export type Product = {
  id: string
  title: string
  price: number
  image: string
  category?: string
}

export const initialProducts: Product[] = [
  {
    id: "p1",
    title: "Wireless Headphones",
    price: 199,
    image: "/products/headphones.png",
  },
  {
    id: "p2",
    title: "Minimalist Sneakers",
    price: 129,
    image: "/products/sneakers.png",
  },
  {
    id: "p3",
    title: "Canvas Backpack",
    price: 89,
    image: "/products/backpack.png",
  },
  {
    id: "p4",
    title: "Leather Strap Watch",
    price: 249,
    image: "/products/watch.png",
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
