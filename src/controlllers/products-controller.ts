import { AppError } from "@/utils/AppError"
import { error } from "console"
import { NextFunction, Request, Response } from "express"

class ProductControllers {
  async index(request: Request, response: Response, next: NextFunction){
    try {
      throw new AppError("Erro de teste")

      return response.json({ message: "Ok" })
    } catch (error) {
      next(error) 
    }
  }
}

export { ProductControllers }