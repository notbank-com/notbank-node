export interface AddClientBankAccountRequest {
  country: string
  bank: string
  number: string
  kind: string
  pix_type?: string
  agency?: string
  dv?: string
  province?: string
  user_id?: string
}
