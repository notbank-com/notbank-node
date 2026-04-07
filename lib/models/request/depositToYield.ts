import { YieldProductType } from "../enums"

export interface DepositToYieldRequest {
  amount: number | string
  product_id: number
  currency: string
  type: YieldProductType
  user_id?: string
}