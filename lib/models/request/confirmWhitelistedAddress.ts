export interface ConfirmWhitelistedAddressRequest {
  whitelistedAddressId: string
  account_id: number
  sms_code: string
  user_id?: string
}
