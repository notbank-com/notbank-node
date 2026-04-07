export interface OrderBookRaw {
    timestamp: number;
    bids: number[][];
    asks: number[][];
}
export interface Level {
    quantity: number;
    price: number;
}
export interface OrderBook {
    timestamp: number;
    bids: Level[];
    asks: Level[];
}
export declare function orderbookFromRaw(raw: OrderBookRaw): OrderBook;
