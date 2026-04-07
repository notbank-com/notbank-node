import { WalletTransactionSubType, WalletTransactionType } from "../enums"

export interface Transaction {
  id: string
  legacy_id: string
  reference_id: number
  account_id: number
  currency: string
  direction: number
  direction_display: string
  amount: number
  fee: string
  balance: number
  address: string
  hash: string
  type: WalletTransactionType
  type_display: number
  sub_type: WalletTransactionSubType
  sub_type_display: number
  status: number
  status_display: string
  created_at: string
  updated_at: string
}

export interface Transactions {
  total: number
  data: Transaction[]
}