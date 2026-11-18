// src/routes/tables-routes.ts
import { Router } from "express"

import { TablesController } from "@/controlllers/tables-controller"

const tablesRoutes = Router()
const tablesController = new TablesController()

tablesRoutes.get("/", tablesController.index)

export { tablesRoutes }
export { TablesController }