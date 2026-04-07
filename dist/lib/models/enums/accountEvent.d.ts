export interface CancelOrderRejectEvent {
    OMSId: number;
    AccountId: number;
    OrderId: number;
    OrderRevision: number;
    OrderType: string;
    InstrumentId: number;
    Status: string;
    RejectReason: string;
}
export interface DepositEvent {
    OMSId: number;
    AccountId: number;
    ProductId: number;
    Quantity: number;
    SubAccountId: number;
}
