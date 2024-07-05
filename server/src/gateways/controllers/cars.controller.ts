import { Controller, Get, Inject, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { GetCarBrands } from 'src/usecases/get.car.brands'

@Controller('/cars')
export class CarsController {
  constructor(@Inject('GetCarBrands') private _getCarBrands: GetCarBrands) {}

  @Get('/brands')
  async getBrands(@Req() req: Request, @Res() res: Response) {
    const brands = await this._getCarBrands.execute()
    res.send(brands)
  }
}
