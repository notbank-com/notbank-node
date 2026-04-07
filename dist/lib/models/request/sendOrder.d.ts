import { OrderSide } from "../enums/orderSide.js";
import { OrderTypeInt } from "../enums/orderType.js";
import { PegPriceType } from "../enums/pegPriceType.js";
import { TimeInForce } from "../enums/timeInForce.js";
export interface SendOrderRequest {
    InstrumentId: number;
    AccountId: number;
    TimeInForce: TimeInForce;
    ClientOrderId?: number;
    OrderIdOCO?: number;
    UseDisplayQuantity?: boolean;
    Side: OrderSide;
    Quantity?: number;
    OrderType: OrderTypeInt;
    PegPriceType?: PegPriceType;
    LimitPrice?: number;
    StopPrice?: number;
    TrailingAmount?: number;
    LimitOffset?: number;
    DisplayQuantity?: number;
    Value?: number;
    PostOnly?: boolean;
}
