import { YieldProductType } from "../enums/index.js";
export interface WithdrawFromYieldRequest {
    amount: number;
    product_id: number;
    currency: string;
    type: YieldProductType;
    user_id?: string;
}
