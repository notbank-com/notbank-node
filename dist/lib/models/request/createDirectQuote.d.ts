export interface CreateDirectQuoteRequest {
    account_id: number;
    from_currency: string;
    from_amount: string | number;
    to_currency: string;
    operation: string;
    user_id?: string;
}
