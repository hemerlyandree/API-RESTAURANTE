import { Request, Response, NextFunction } from "express"

class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}

export { TablesSessionsController }