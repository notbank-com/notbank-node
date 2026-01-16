import { QuoteMode } from "../enums"

export interface GetQuotesRequest {
  mode: QuoteMode
  user_id?: string
}