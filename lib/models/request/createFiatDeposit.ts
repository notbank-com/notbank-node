import { FiatDepositPaymentMethod } from "../enums"

export interface CreateFiatDepositRequest {
  account_id: number
  payment_method: FiatDepositPaymentMethod
  currency: string
  amount: string
  bank_account_id?: string
  voucher?: string
  user_id?: string
}