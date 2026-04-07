export interface RegisterNotbankUserRequest {
  first_name: string
  last_name: string
  email: string
  phone_number?: string
  language?: "en" | "es" | "pt"
  firebase_token?: string
}
