export interface ProductLimits {
    ProductId: number;
    ProductName: string;
    AutoWithdrawThreshold: number;
    DailyDepositLimit: number;
    DailyDepositNotionalLimit: number;
    MonthlyDepositLimit: number;
    MonthlyDepositNotionalLimit: number;
    YearlyDepositLimit: number;
    YearlyDepositNotionalLimit: number;
    DailyWithdrawLimit: number;
    DailyWithdrawNotionalLimit: number;
    MonthlyWithdrawLimit: number;
    MonthlyWithdrawNotionalLimit: number;
    YearlyWithdrawLimit: number;
    YearlyWithdrawNotionalLimit: number;
    NotionalProductId: number;
    OverLimitRejected: boolean;
    WithdrawProcessingDelaySec: number;
    DepositTicketWorkflow: string;
    WithdrawTicketWorkflow: string;
    RequireWhitelistedAddress: boolean;
    AutoAcceptWhitelistedAddress: boolean;
}
