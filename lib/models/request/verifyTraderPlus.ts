export interface VerifyTraderPlusRequest {
  user_id?: string
  country: string
  declaration_template_id: number
  declaration_id: number
  fields: [string, number | boolean | string][]
  files: [string, File][]
}