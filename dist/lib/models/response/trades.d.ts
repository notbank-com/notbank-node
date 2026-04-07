import { TradeType } from "../enums/tradeType.js";
export interface Trade {
    trade_id: number;
    price: number;
    base_volume: number;
    quote_volume: number;
    timestamp: string;
    type: TradeType;
}
