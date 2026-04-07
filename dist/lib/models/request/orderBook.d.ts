export interface OrderBookRequest {
    Market_Pair: string;
    Depth?: number;
    Level?: 1 | 2;
}
