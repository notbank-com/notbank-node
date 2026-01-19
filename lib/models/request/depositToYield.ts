import { YieldProduct } from "../enums"

export interface DepositToYieldRequest {
  amount: number | string
  product_id: number
  currency: string
  type: YieldProduct
  user_id?: string
}