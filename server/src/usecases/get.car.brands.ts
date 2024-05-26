import { Inject, Injectable } from '@nestjs/common'
import { Brands } from 'src/domains/brands'
import { FipeGateway } from 'src/gateways/fipe.gateway'

@Injectable()
export class GetCarBrands {
  constructor(@Inject('FipeGateway') private _fipeGateway:FipeGateway ) {}

  async execute(): Promise<Brands> {
    const brands = await this._fipeGateway.getBrands()
    return brands
  }
}
