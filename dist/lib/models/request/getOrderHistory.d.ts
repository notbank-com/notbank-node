import { OrderState } from "../enums/orderState.js";
export interface GetOrdersHistoryRequest {
    AccountId: number;
    OrderState?: OrderState;
    OrderId?: number;
    ClientOrderId?: number;
    OriginalOrderId?: number;
    OriginalClientOrderId?: number;
    UserId?: number;
    InstrumentId?: number;
    StartTimestamp?: number;
    EndTimestamp?: number;
    Depth?: number;
    Limit?: number;
    StartIndex?: number;
}
