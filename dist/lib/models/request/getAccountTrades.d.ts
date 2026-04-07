export interface GetAccountTradesRequest {
    AccountId?: number;
    StartIndex?: number;
    Depth?: number;
    InstrumentId?: number;
    TradeId?: number;
    OrderId?: number;
    StartTimestamp?: number;
    EndTimestamp?: number;
    ExecutionId?: number;
}
