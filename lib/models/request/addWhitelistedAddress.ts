export interface AddWhitelistedAddressRequest {
  account_id: number
  currency: string
  network: string
  address: string
  label: string
  memo_or_tag?: string
  otp: string
  user_id?: string
}