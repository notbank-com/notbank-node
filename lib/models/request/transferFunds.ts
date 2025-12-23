export interface TransferFundsRequest {
  sender_account_id: number
  receiver_account_id: number
  currency_name: string
  amount: string
  notes?: string
  otp?: string
  user_id?: string
}
