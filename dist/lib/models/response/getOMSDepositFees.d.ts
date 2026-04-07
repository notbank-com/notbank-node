export interface OMSDepositFee {
    OMSId: number;
    AccountId: number;
    AccountProviderId: number;
    FeeId: number;
    FeeAmt: number;
    FeeCalcType: "Percentage" | "Flat";
    IsActive: boolean;
    ProductId: number;
    MinimalFeeAmt: number;
    MinimalFeeCalcType: "Percentage" | "Flat";
}
