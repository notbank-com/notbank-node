export interface CancelOrder {
    OrderId: number;
    AccountId: number;
}
export type SendCancelListRequest = CancelOrder[];
