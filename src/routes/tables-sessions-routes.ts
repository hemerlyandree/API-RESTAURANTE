import { Router } from "express"

import { TablesSessionsController } from "@/controlllers/tables-sessions-controller"

const TablesSessionsRouter = Router()

const tablesSessionsController = new TablesSessionsController()

TablesSessionsRouter.post("/",tablesSessionsController.create)
TablesSessionsRouter.get("/",tablesSessionsController.index)

export { TablesSessionsRouter }