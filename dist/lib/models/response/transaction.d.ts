export interface Transaction {
    id: string;
    legacy_id: string;
    currency: string;
    direction: number;
    amount: number;
    fee: string;
    balance: number;
    address: string;
    hash: string;
    type: number;
    sub_type: number;
    status: number;
    created_at: string;
    updated_at: string;
}
export interface Transactions {
    total: number;
    data: Transaction[];
}
