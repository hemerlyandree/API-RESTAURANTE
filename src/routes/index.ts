// src/routes/index.ts
import { Router } from "express"

import { TablesSessionsRouter } from "./tables-sessions-routes"
import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"

const routes = Router()

routes.use("/tables-sessions", TablesSessionsRouter)
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)

export { routes }