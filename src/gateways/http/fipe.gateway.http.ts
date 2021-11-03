import { HttpService, Injectable } from '@nestjs/common'
import { Brands } from 'src/domains/brands'
import { FipeGateway } from '../fipe.gateway'
@Injectable()
export class FipeGatewayHttp implements FipeGateway {
  private readonly _API_HOST = 'https://parallelum.com.br/fipe/api/v1/'
  private readonly _BRANDS_PATH = 'carros/marcas'

  constructor(private _httpService: HttpService) {}

  async getBrands(): Promise<Brands> {
    try {
      const { data } = await this._httpService.get(`${this._API_HOST}${this._BRANDS_PATH}`).toPromise()

      const brands: Brands = {
        items: data,
      }

      return brands
    } catch (error) {
      throw error
    }
  }
}
