import { YieldProductType } from "../enums"

export interface DepositToYieldRequest {
  account_id: number
  amount: number | string
  product_id: number
  currency: string
  type: YieldProductType
  user_id?: string
}