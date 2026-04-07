export interface GetTickerHistoryRequest {
    InstrumentId: number;
    Interval: number;
    FromDate: string;
    ToDate: string;
}
