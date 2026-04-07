export interface Level1Summary {
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
    Rolling24HrNumTrades: number;
    Rolling24HrPxChange: number;
    TimeStamp: string;
    BidQty: number;
    AskQty: number;
    BidOrderCt: number;
    AskOrderCt: number;
    Rolling24HrPxChangePercent: number;
}
