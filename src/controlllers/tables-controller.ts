// src/controllers/tables-controller.ts
import { Request, Response, NextFunction } from "express"

import { knex } from "@/database/knex"
import type { TableRepository } from "@/database/types/table-repository"

class TablesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>("tables")
        .select()
        .orderBy("table_number")

      return response.json(tables)
    } catch (error) {
      next(error)
    }
  }
}

export { TablesController }