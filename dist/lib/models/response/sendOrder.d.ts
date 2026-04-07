export interface SendOrderResponse {
    OrderId: number;
    InstrumentId: number;
    OMSId: number;
    AccountId: number;
    Status: string;
    Message?: string;
}
