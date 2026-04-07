export interface Quote {
    id: string;
    is_inverse: boolean;
    type: number;
    state: number;
    currency_in: string;
    currency_out: string;
    amount_in: string;
    amount_out: string;
    amount_usdt_out: string;
    fee_amount: string;
    fee_detail: string;
}
