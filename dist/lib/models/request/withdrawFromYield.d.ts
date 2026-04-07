import { YieldProduct } from "../enums/index.js";
export interface WithdrawFromYieldRequest {
    amount: number;
    product_id: number;
    currency: string;
    type: YieldProduct;
    user_id?: string;
}
