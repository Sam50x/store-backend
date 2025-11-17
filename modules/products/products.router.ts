import { Router } from "express";
import productsController from "./products.controller";

const productsRouter = Router()

productsRouter.route('/')
    .post(productsController.addProduct)
    .get(productsController.getAllProducts)

productsRouter.route('/:id')
    .get(productsController.getProduct)

export default productsRouter