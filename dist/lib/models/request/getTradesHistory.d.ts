export interface GetTradesHistoryRequest {
    AccountId?: number;
    InstrumentId?: number;
    TradeId?: number;
    OrderId?: number;
    UserId?: number;
    StartTimeStamp?: number;
    EndTimeStamp?: number;
    Depth?: number;
    StartIndex?: number;
    ExecutionId?: number;
}
