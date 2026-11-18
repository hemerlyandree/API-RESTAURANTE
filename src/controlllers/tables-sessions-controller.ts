import { Request, Response, NextFunction } from "express"
import { number, z } from "zod"
import { knex } from "@/database/knex"
import { TablesSessionsRepository } from "@/database/types/tables-sessions-repository"


class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const BodySchema = z.object({
        table_id: z.number(),
      })

      const { table_id } = BodySchema.parse(request.body)

      await knex<TablesSessionsRepository>("tables_sessions").insert({
        table_id,
        opened_at: knex.fn.now(),
      })

      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }
}

export { TablesSessionsController }