export interface GetOrdersRequest {
    AccountId: number;
    OrderState?: string;
    OrderId?: number;
    ClientOrderId?: number;
    OriginalOrderId?: number;
    OriginalClientOrderId?: number;
    UserId?: number;
    InstrumentId?: number;
    StartTimestamp?: number;
    EndTimestamp?: number;
    Depth?: number;
    Limit?: number;
    StartIndex?: number;
}
