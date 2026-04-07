export interface GetLastTradeResponse {
    TradeId: number;
    InstrumentId: number;
    Quantity: number;
    Price: number;
    Order1: number;
    Order2: number;
    TradeTime: number;
    Direction: number;
    TakerSide: number;
    BlockTrade: boolean;
    ClientOrderId: number;
}
