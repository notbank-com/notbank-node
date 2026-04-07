import { YieldProductType } from "../enums/index.js";
export interface DepositToYieldRequest {
    amount: number | string;
    product_id: number;
    currency: string;
    type: YieldProductType;
    user_id?: string;
}
