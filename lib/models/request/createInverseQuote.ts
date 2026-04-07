export interface CreateInverseQuoteRequest {
  account_id: number
  from_currency: string
  to_currency: string
  to_amount: string | number
  user_id?: string
}
