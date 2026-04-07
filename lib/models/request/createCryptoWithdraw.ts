export interface CreateCryptoWithdrawRequest {
  account_id: number
  currency: string
  network: string
  address: string
  amount: string
  memo_or_tag?: string
  otp?: string
  user_id?: string
}