export interface GetDepositAddressesRequest {
    account_id: number;
    currency: string;
    network: string;
    user_id?: string;
}
