import { YieldProduct } from "../enums"

export interface WithdrawFromYieldRequest {
  amount: number
  product_id: number
  currency: string
  type: YieldProduct
  user_id?: string
}