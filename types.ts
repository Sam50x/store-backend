export type Product = {
    id?: string
    name: string
    price: number
    category: string
}

export type Variation = {
    id?: string
    product_id?: string
    image_url: string
    name: string
    in_stock: number
}