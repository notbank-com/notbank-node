export function orderbookFromRaw(raw) {
    return {
        timestamp: raw.timestamp,
        bids: raw.bids.map(level => { return { quantity: level[0], price: level[1] }; }),
        asks: raw.asks.map(level => { return { quantity: level[0], price: level[1] }; })
    };
}
