export interface CreateFiatWithdrawRequest {
  account_id: number
  payment_method: number
  currency: string
  amount: string
  bank_account_id?: string
  cbu?: string
  person_type?: string
  cuit?: string
  name?: string
  user_id?: string
}