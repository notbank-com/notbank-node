export interface AccountInstrumentStatistics {
    OMSId: number;
    AccountId: number;
    InstrumentId: number;
    InstrumentSymbol: string;
    QuantityBought: number;
    QuantitySold: number;
    NotionalBought: number;
    NotionalSold: number;
    MonthlyQuantityBought: number;
    MonthlyQuantitySold: number;
    MonthlyNotionalBought: number;
    MonthlyNotionalSold: number;
    TradeVolume: number;
    MonthlyTradeVolume: number;
    TotalDayBuys: number;
    TotalDaySells: number;
    TotalMonthBuys: number;
    TotalMonthSells: number;
    NotionalConversionRate: number;
    NotionalConversionSymbol: string;
    RollingMonthlyStartDate: number;
    LastTradeId: number;
    DailyNotionalTradeVolume: number;
    MonthlyNotionalTradeVolume: number;
    YearlyNotionalTradeVolume: number;
}
