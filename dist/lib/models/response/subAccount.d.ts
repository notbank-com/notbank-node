export interface SubAccount {
    id: number;
    alias: string;
    created_at: string;
}
export interface SubAccounts {
    data: SubAccount[];
    total: number;
}
