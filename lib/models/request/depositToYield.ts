export interface DepositToYieldRequest {
  account_id: number
  amount: number
  product_id: number
  currency: string
  type: number
  user_id?: string
}