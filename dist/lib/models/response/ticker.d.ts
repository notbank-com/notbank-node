export interface Ticker {
    base_id: number;
    quote_id: number;
    last_price: number;
    base_volume: number;
    quote_volume: number;
}
export interface Tickers {
    [pairName: string]: Ticker;
}
