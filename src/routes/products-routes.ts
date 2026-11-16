import { Router } from "express"

import { ProductControllers } from "@/controlllers/products-controller"

const productsRoutes = Router()
const productsController = new ProductControllers()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.update)


export { productsRoutes }