import { YieldProductType } from "../enums/index.js";
export interface WithdrawFromYieldRequest {
    account_id: number;
    amount: number;
    product_id: number;
    currency: string;
    type: YieldProductType;
    user_id?: string;
}
