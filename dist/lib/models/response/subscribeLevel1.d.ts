export interface Level1Feed {
    OMSId: number;
    InstrumentId: number;
    BestBid: number;
    BestOffer: number;
    LastTradedPx: number;
    LastTradedQty: number;
    LastTradeTime: number;
    SessionOpen: number;
    SessionHigh: number;
    SessionLow: number;
    SessionClose: number;
    Volume: number;
    CurrentDayVolume: number;
    CurrentDayNumTrades: number;
    CurrentDayPxChange: number;
    CurrentNotional: number;
    Rolling24HrNotional: number;
    Rolling24HrVolume: number;
    Rolling24NumTrades: number;
    Rolling24HrPxChange: number;
    TimeStamp: string;
}
