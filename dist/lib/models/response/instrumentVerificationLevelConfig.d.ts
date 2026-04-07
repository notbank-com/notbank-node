export interface InstrumentLimits {
    VerificationLevel: number;
    VerificationLevelName: string | null;
    OMSId: number;
    InstrumentId: number;
    InstrumentName: string;
    OrderBuyLimit: number;
    OrderSellLimit: number;
    DailyBuyLimit: number;
    DailySellLimit: number;
    MonthlyBuyLimit: number;
    MonthlySellLimit: number;
    NotionalProductId: number;
    OrderNotionalLimit: number;
    DailyNotionalLimit: number;
    MonthlyNotionalLimit: number;
    YearlyNotionalLimit: number;
}
