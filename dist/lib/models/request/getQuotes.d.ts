import { QuoteMode } from "../enums/index.js";
export interface GetQuotesRequest {
    mode: QuoteMode;
    user_id?: string;
}
