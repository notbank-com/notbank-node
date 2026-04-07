export interface Bank {
    id: string;
    name: string;
    country: string;
}
export interface Banks {
    total: number;
    data: Bank[];
}
