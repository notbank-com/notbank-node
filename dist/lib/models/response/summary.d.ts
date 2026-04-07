export interface InstrumentSummary {
    trading_pairs: string;
    last_price: number;
    lowest_ask: number;
    highest_bid: number;
    base_volume: number;
    quote_volume: number;
    price_change_percent_24h: number;
    highest_price_24h: number;
    lowest_price_24h: number;
}
