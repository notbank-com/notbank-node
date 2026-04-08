import { FiatWithdrawPaymentMethod } from "../enums"

export interface CreateFiatWithdrawRequest {
  account_id: number
  payment_method: FiatWithdrawPaymentMethod
  currency: string
  amount: string
  bank_account_id?: string
  cbu?: string
  person_type?: string
  cuit?: string
  name?: string
  user_id?: string
}