import { YieldProduct } from "../enums/index.js";
export interface DepositToYieldRequest {
    amount: number | string;
    product_id: number;
    currency: string;
    type: YieldProduct;
    user_id?: string;
}
