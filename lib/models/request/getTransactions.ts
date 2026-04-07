import { WalletTransactionSubType, WalletTransactionType } from "../enums"

export interface GetTransactionsRequest {
  from_date?: string
  to_date?: string
  sort?: string
  currency?: string
  page?: number
  page_size?: number
  user_id?: string
  account_id?: string
  type?: WalletTransactionType
  sub_type?: WalletTransactionSubType
}