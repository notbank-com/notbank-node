import { IntTransactionSubType, IntTransactionType } from "../enums/index.js";
export interface GetTransactionsRequest {
    from_date?: string;
    to_date?: string;
    sort?: string;
    currency?: string;
    page?: number;
    page_size?: number;
    user_id?: string;
    account_id?: string;
    type?: IntTransactionType;
    sub_type?: IntTransactionSubType;
}
