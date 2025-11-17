import prisma from "../../prisma/prisma.client"
import { Product, Variation } from "../../types"

export const addProductService = async (productData: Product, variationsData: Variation[]) => {
    const {
        name,
        price,
        category,
    } = productData

    try {
        const createdProduct = await prisma.product.create({
            data: {
                name,
                price,
                category
            }
        })

        const productId = createdProduct.id

        const createdVariations = await Promise.all(
            variationsData.map(async (variation) => {
                const {
                    name,
                    in_stock,
                    image_url
                } = variation

                const createdVariation = await prisma.variation.create({
                    data: {
                        name,
                        in_stock,
                        image_url,
                        product_id: productId,
                    }
                })

                return createdVariation
            })
        )

        return { createdProduct, createdVariations }
    }
    catch (e) {
        throw new Error(`Couldn\'t create product: ${e}`)
    }
}

export const getAllProductsService = async (category: string | null) => {

}
export const getProductService = async () => {

}