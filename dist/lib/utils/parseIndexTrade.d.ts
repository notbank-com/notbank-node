import { TradeSummary } from "../models/response/tradeSummary.js";
export declare function parseTradeSummary(jsonTrade: number[] | {
    [key: number]: number;
}): TradeSummary;
