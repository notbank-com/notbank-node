import { OrderTypeStr } from "../enums/orderType.js";
export interface AccountFee {
    FeeId: number;
    OMSId: number;
    FeeTier: number;
    AccountId: number;
    FeeAmt: number;
    FeeCalcType: FeeCalcType;
    FeeType: FeeType;
    LadderThreshold: number;
    LadderSeconds: number;
    IsActive: boolean;
    InstrumentId: number;
    OrderType: OrderTypeStr;
    PeggedProductId: number;
}
export declare enum FeeCalcType {
    Flat = "Flat",
    Percentage = "Percentage"
}
export declare enum FeeType {
    Flat = "Flat",
    MakerFee = "MakerFee",
    TakerFee = "TakerFee",
    PeggedProductFee = "PeggedProductFee",
    AffiliateFee = "AffiliateFee"
}
