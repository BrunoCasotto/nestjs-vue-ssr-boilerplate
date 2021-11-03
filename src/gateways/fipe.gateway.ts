import { Brands } from 'src/domains/brands'

export interface FipeGateway {
  getBrands(): Promise<Brands>
}
