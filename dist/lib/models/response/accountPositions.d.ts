export interface AccountPosition {
    OMSId: number;
    AccountId: number;
    ProductSymbol: string;
    ProductId: number;
    Amount: number;
    Hold: number;
    PendingDeposits: number;
    PendingWithdraws: number;
    TotalDayDeposits: number;
    TotalMonthDeposits: number;
    TotalYearDeposits: number;
    TotalDayDepositNotional: number;
    TotalMonthDepositNotional: number;
    TotalYearDepositNotional: number;
    TotalDayWithdraws: number;
    TotalMonthWithdraws: number;
    TotalYearWithdraws: number;
    TotalDayWithdrawNotional: number;
    TotalMonthWithdrawNotional: number;
    TotalYearWithdrawNotional: number;
    NotionalProductId: number;
    NotionalProductSymbol: string;
    NotionalValue: number;
    NotionalHoldAmount: number;
    NotionalRate: number;
    TotalDayTransferNotional: number;
}
