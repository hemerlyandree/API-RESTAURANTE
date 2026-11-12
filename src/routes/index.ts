import { Router } from "express"

import { productsRoutes } from "./products-routes"
import { ProductControllers } from "@/controlllers/products-controller"

const routes = Router()
routes.use("/products", productsRoutes)

export { routes }