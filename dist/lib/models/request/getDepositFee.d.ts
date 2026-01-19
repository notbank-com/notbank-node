export interface GetDepositFeeRequest {
    AccountId: number;
    ProductId: number;
    Amount: number;
    AccountProviderId?: number;
}
