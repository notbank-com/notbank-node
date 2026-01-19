import { ServiceConnection } from "../core/serviceClient.js";
import { TradeSummary } from "../models/response/tradeSummary.js";
import { CancelAllOrdersRequest } from "../models/request/cancelAllOrders.js";
import { CancelOrderRequest } from "../models/request/cancelOrder.js";
import { CancelReplaceOrderRequest } from "../models/request/cancelReplaceOrder.js";
import { GetAccountTradesRequest } from "../models/request/getAccountTrades.js";
import { GetL2SnapshotRequest } from "../models/request/getL2Snapshot.js";
import { GetLastTradesRequest } from "../models/request/getLastTrades.js";
import { GetLevel1Request } from "../models/request/getLevel1.js";
import { GetLevel1SummaryRequest } from "../models/request/getLevel1Summary.js";
import { GetLevel1SummaryMinRequest } from "../models/request/getLevel1SummaryMin.js";
import { GetOpenOrdersRequest } from "../models/request/getOpenOrders.js";
import { GetOpenTradeReportsRequest } from "../models/request/getOpenTradeReports.js";
import { GetOrdersHistoryRequest } from "../models/request/getOrderHistory.js";
import { GetOrderHistoryByOrderIdRequest } from "../models/request/getOrderHistoryByOrderId.js";
import { GetOrdersRequest } from "../models/request/getOrders.js";
import { GetOrderStatusRequest } from "../models/request/getOrderStatus.js";
import { GetTickerHistoryRequest } from "../models/request/getTickerHistory.js";
import { GetTradesHistoryRequest } from "../models/request/getTradesHistory.js";
import { ModifyOrderRequest } from "../models/request/modifyOrder.js";
import { OrderBookRequest } from "../models/request/orderBook.js";
import { SendCancelListRequest } from "../models/request/sendCancelList.js";
import { SendCancelReplaceListRequest } from "../models/request/sendCancelReplaceList.js";
import { SendOrderRequest } from "../models/request/sendOrder.js";
import { SendOrderListRequest } from "../models/request/sendOrderList.js";
import { TradesRequest } from "../models/request/trades.js";
import { CancelReplaceOrderResponse } from "../models/response/cancelReplaceOrder.js";
import { AccountTrade } from "../models/response/getAccountTrades.js";
import { EnumsResponse } from "../models/response/getEnums.js";
import { L2Snapshot } from "../models/response/getL2Snapshot.js";
import { Level1 } from "../models/response/getLevel1.js";
import { Level1Summary } from "../models/response/getLevel1Summary.js";
import { Level1SummaryMin } from "../models/response/getLevel1SummaryMin.js";
import { OpenOrder } from "../models/response/getOpenOrders.js";
import { OpenTradeReport } from "../models/response/getOpenTradeReports.js";
import { OrderSummary } from "../models/response/getOrderHistoryByOrderId.js";
import { OrderStatus } from "../models/response/getOrderStatus.js";
import { TickerSummary } from "../models/response/getTickerHistory.js";
import { Order } from "../models/response/order.js";
import { OrderBook, OrderBookRaw } from "../models/response/orderBook.js";
import { OrderTrade } from "../models/response/orderTrade.js";
import { SendOrderResponse } from "../models/response/sendOrder.js";
import { InstrumentSummary } from "../models/response/summary.js";
import { Tickers } from "../models/response/ticker.js";
import { Trade } from "../models/response/trades.js";
export declare class TradingService {
    connection: ServiceConnection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#sendorderlist
     */
    sendOrderList(params: SendOrderListRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#sendcancellist
     */
    sendCancelList(params: SendCancelListRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#sendcancelreplacelist
     */
    sendCancelReplaceList(params: SendCancelReplaceListRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#modifyorder
     */
    modifyOrder(request: ModifyOrderRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#cancelallorders
     */
    cancelAllOrders(params: CancelAllOrdersRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#getorderstatus
     */
    getOrderStatus(params: GetOrderStatusRequest): Promise<OrderStatus>;
    /**
     * https://apidoc.notbank.exchange/#getordershistory
     */
    getOrdersHistory(params: GetOrdersHistoryRequest): Promise<Order[]>;
    /**
     * https://apidoc.notbank.exchange/#gettradeshistory
     */
    getTradesHistory(params: GetTradesHistoryRequest): Promise<OrderTrade[]>;
    /**
     * https://apidoc.notbank.exchange/#getorderhistorybyorderid
     */
    getOrderHistoryByOrderId(params: GetOrderHistoryByOrderIdRequest): Promise<OrderSummary[]>;
    /**
     * https://apidoc.notbank.exchange/#gettickerhistory
     */
    getTickerHistory(params: GetTickerHistoryRequest): Promise<TickerSummary[]>;
    /**
     * https://apidoc.notbank.exchange/#getlasttrades
     */
    getLastTrades(request: GetLastTradesRequest): Promise<TradeSummary[]>;
    /**
     * https://apidoc.notbank.exchange/#getlevel1summary
     */
    getLevel1Summary(request?: GetLevel1SummaryRequest): Promise<Level1Summary[]>;
    /**
     * https://apidoc.notbank.exchange/#getlevel1summarymin
     */
    getLevel1SummaryMin(request: GetLevel1SummaryMinRequest): Promise<Level1SummaryMin[]>;
    /**
     * https://apidoc.notbank.exchange/#getopentradereports
     */
    getOpenTradeReports(request: GetOpenTradeReportsRequest): Promise<OpenTradeReport[]>;
    /**
     * https://apidoc.notbank.exchange/#getorders
     */
    getOrders(request: GetOrdersRequest): Promise<Order[]>;
    /**
     * https://apidoc.notbank.exchange/#getorderhistory
     */
    getOrderHistory(request: GetOrdersHistoryRequest): Promise<Order[]>;
    /**
     * https://apidoc.notbank.exchange/#sendorder
     */
    sendOrder(request: SendOrderRequest): Promise<SendOrderResponse>;
    /**
     * https://apidoc.notbank.exchange/#cancelreplaceorder
     */
    cancelReplaceOrder(params: CancelReplaceOrderRequest): Promise<CancelReplaceOrderResponse>;
    /**
     * https://apidoc.notbank.exchange/#cancelorder
     */
    cancelOrder(params: CancelOrderRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#getopenorders
     */
    getOpenOrders(params: GetOpenOrdersRequest): Promise<OpenOrder[]>;
    /**
     * https://apidoc.notbank.exchange/#getaccounttrades
     */
    getAccountTrades(request: GetAccountTradesRequest): Promise<AccountTrade[]>;
    /**
     * https://apidoc.notbank.exchange/#summary
     */
    getSummary(): Promise<InstrumentSummary[]>;
    /**
     * https://apidoc.notbank.exchange/#ticker
     */
    getTicker(): Promise<Tickers>;
    /**
     * https://apidoc.notbank.exchange/#orderbook
     */
    getOrderBook(request: OrderBookRequest): Promise<OrderBook>;
    getOrderBookRaw(request: OrderBookRequest): Promise<OrderBookRaw>;
    /**
     * https://apidoc.notbank.exchange/#trades
     */
    getTrades(params: TradesRequest): Promise<Trade[]>;
    /**
     * https://apidoc.notbank.exchange/#getl2snapshot
     */
    getL2Snapshot(request: GetL2SnapshotRequest): Promise<L2Snapshot[]>;
    /**
     * https://apidoc.notbank.exchange/#getlevel1
     */
    getLevel1(request: GetLevel1Request): Promise<Level1>;
    /**
     * https://apidoc.notbank.exchange/#getenums
     */
    getEnums(): Promise<EnumsResponse>;
}
