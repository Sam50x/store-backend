import { Request, Response } from "express"
import { addProductService } from "./products.services"

const productsController = {
    addProduct: async (req: Request, res: Response) => {
        const { productData, variationsData } = req.body

        const { createdProduct, createdVariations } = await addProductService(productData, variationsData)

        return res.status(201).json({ msg: "Product created Successfully", createdProduct, createdVariations })
    },

    getAllProducts: async (req: Request, res: Response) => {

    },

    getProduct: async (req: Request, res: Response) => {

    },
}

export default productsController