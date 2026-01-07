import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { TradeSummary } from "../models/response/tradeSummary";
import { CancelAllOrdersRequest } from "../models/request/cancelAllOrders";
import { CancelOrderRequest } from "../models/request/cancelOrder";
import { CancelReplaceOrderRequest } from "../models/request/cancelReplaceOrder";
import { GetAccountTradesRequest } from "../models/request/getAccountTrades";
import { GetL2SnapshotRequest } from "../models/request/getL2Snapshot";
import { GetLastTradesRequest } from "../models/request/getLastTrades";
import { GetLevel1Request } from "../models/request/getLevel1";
import { GetLevel1SummaryRequest } from "../models/request/getLevel1Summary";
import { GetLevel1SummaryMinRequest } from "../models/request/getLevel1SummaryMin";
import { GetOpenOrdersRequest } from "../models/request/getOpenOrders";
import { GetOpenTradeReportsRequest } from "../models/request/getOpenTradeReports";
import { GetOrdersHistoryRequest } from "../models/request/getOrderHistory";
import { GetOrderHistoryByOrderIdRequest } from "../models/request/getOrderHistoryByOrderId";
import { GetOrdersRequest } from "../models/request/getOrders";
import { GetOrderStatusRequest } from "../models/request/getOrderStatus";
import { GetTickerHistoryRequest } from "../models/request/getTickerHistory";
import { GetTradesHistoryRequest } from "../models/request/getTradesHistory";
import { ModifyOrderRequest } from "../models/request/modifyOrder";
import { OrderBookRequest } from "../models/request/orderBook";
import { SendCancelListRequest } from "../models/request/sendCancelList";
import { SendCancelReplaceListRequest } from "../models/request/sendCancelReplaceList";
import { SendOrderRequest } from "../models/request/sendOrder";
import { SendOrderListRequest } from "../models/request/sendOrderList";
import { TradesRequest } from "../models/request/trades";
import { CancelReplaceOrderResponse } from "../models/response/cancelReplaceOrder";
import { AccountTrade } from "../models/response/getAccountTrades";
import { EnumsResponse } from "../models/response/getEnums";
import { L2Snapshot } from "../models/response/getL2Snapshot";
import { Level1 } from "../models/response/getLevel1";
import { Level1Summary } from "../models/response/getLevel1Summary";
import { Level1SummaryMin } from "../models/response/getLevel1SummaryMin";
import { OpenOrder } from "../models/response/getOpenOrders";
import { OpenTradeReport } from "../models/response/getOpenTradeReports";
import { OrderSummary } from "../models/response/getOrderHistoryByOrderId";
import { OrderStatus } from "../models/response/getOrderStatus";
import { TickerSummary } from "../models/response/getTickerHistory";
import { Order } from "../models/response/order";
import { OrderBook, orderbookFromRaw, OrderBookRaw } from "../models/response/orderBook";
import { OrderTrade } from "../models/response/orderTrade";
import { SendOrderResponse } from "../models/response/sendOrder";
import { InstrumentSummary } from "../models/response/summary";
import { Tickers } from "../models/response/ticker";
import { Trade } from "../models/response/trades";
import { completeParams } from "../utils/completeParams";
import { completeParamsArray } from "../utils/completeParamsArray";
import { parseTradeSummary } from "../utils/parseIndexTrade";

export class TradingService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#sendorderlist
   */
  sendOrderList(params: SendOrderListRequest): Promise<void> {
    const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SEND_ORDER_LIST,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#sendcancellist
   */
  sendCancelList(params: SendCancelListRequest): Promise<void> {
    const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SEND_CANCEL_LIST,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#sendcancelreplacelist
   */
  sendCancelReplaceList(
    params: SendCancelReplaceListRequest,
  ): Promise<void> {
    const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SEND_CANCEL_REPLACE_LIST,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#modifyorder
   */
  modifyOrder(request: ModifyOrderRequest): Promise<void> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.MODIFY_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#cancelallorders
   */
  cancelAllOrders(params: CancelAllOrdersRequest): Promise<void> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.CANCEL_ALL_ORDERS,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getorderstatus
   */
  async getOrderStatus(
    params: GetOrderStatusRequest,
  ): Promise<OrderStatus> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ORDER_STATUS,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getordershistory
   */
  getOrdersHistory(params: GetOrdersHistoryRequest): Promise<Order[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ORDERS_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#gettradeshistory
   */
  getTradesHistory(
    params: GetTradesHistoryRequest,
  ): Promise<OrderTrade[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_TRADES_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getorderhistorybyorderid
   */
  getOrderHistoryByOrderId(
    params: GetOrderHistoryByOrderIdRequest,
  ): Promise<OrderSummary[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ORDER_HISTORY_BY_ORDER_ID,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#gettickerhistory
   */
  async getTickerHistory(
    params: GetTickerHistoryRequest,
  ): Promise<TickerSummary[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    const response = (await this.connection.apRequest(
      Endpoint.GET_TICKER_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((item): TickerSummary => ({
      EndDateTime: item[0], // Fecha/hora de cierre en POSIX
      High: item[1], // Precio máximo
      Low: item[2], // Precio mínimo
      Open: item[3], // Precio de apertura
      Close: item[4], // Precio de cierre
      Volume: item[5], // Volumen total
      Bid: item[6], // Mejor precio de compra
      Ask: item[7], // Mejor precio de venta
      InstrumentId: item[8], // ID del instrumento
      BeginDateTime: item[9], // Fecha/hora de inicio en POSIX
    }));
  }

  /**
   * https://apidoc.notbank.exchange/#getlasttrades
   */
  async getLastTrades(
    request: GetLastTradesRequest,
  ): Promise<TradeSummary[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    const response = (await this.connection.apRequest(
      Endpoint.GET_LAST_TRADES,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((item) => parseTradeSummary(item));
  }

  /**
   * https://apidoc.notbank.exchange/#getlevel1summary
   */
  async getLevel1Summary(
    request: GetLevel1SummaryRequest = {},
  ): Promise<Level1Summary[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    const response = (await this.connection.apRequest(
      Endpoint.GET_LEVEL1_SUMMARY,
      RequestType.POST,
      paramsWithOMSId,
    ) as string[])
    return response.map(summary => JSON.parse(summary) as Level1Summary)
  }

  /**
   * https://apidoc.notbank.exchange/#getlevel1summarymin
   */
  async getLevel1SummaryMin(
    request: GetLevel1SummaryMinRequest,
  ): Promise<Level1SummaryMin[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    // Make the HTTP request
    const response = (await this.connection.apRequest(
      Endpoint.GET_LEVEL1_SUMMARY_MIN,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((data): Level1SummaryMin => ({
      InstrumentId: data[0],
      InstrumentSymbol: data[1].toString(),
      LastTradedPx: data[2],
      Rolling24HrPxChange: data[3],
      Rolling24HrPxChangePercent: data[4],
      Rolling24HrVolume: data[5],
    }));
  }

  /**
   * https://apidoc.notbank.exchange/#getopentradereports
   */
  getOpenTradeReports(
    request: GetOpenTradeReportsRequest,
  ): Promise<OpenTradeReport[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_OPEN_TRADE_REPORTS,
      RequestType.POST,
      paramsWithOMSId,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getorders
   */
  getOrders(request: GetOrdersRequest): Promise<Order[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ORDERS,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getorderhistory
   */
  getOrderHistory(
    request: GetOrdersHistoryRequest,
  ): Promise<Order[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ORDER_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#sendorder
   */
  async sendOrder(request: SendOrderRequest): Promise<SendOrderResponse> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SEND_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#cancelreplaceorder
   */
  cancelReplaceOrder(
    params: CancelReplaceOrderRequest,
  ): Promise<CancelReplaceOrderResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.CANCEL_REPLACE_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#cancelorder
   */
  cancelOrder(params: CancelOrderRequest): Promise<void> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.CANCEL_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getopenorders
   */
  getOpenOrders(
    params: GetOpenOrdersRequest,
  ): Promise<OpenOrder[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_OPEN_ORDERS,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getaccounttrades
   */
  getAccountTrades(
    request: GetAccountTradesRequest,
  ): Promise<AccountTrade[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ACCOUNT_TRADES,
      RequestType.POST,
      paramsWithOMSId,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#summary
   */
  getSummary(): Promise<InstrumentSummary[]> {
    return this.connection.apRequest(
      Endpoint.SUMMARY,
      RequestType.POST,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#ticker
   */
  getTicker(): Promise<Tickers> {
    return this.connection.apRequest(
      Endpoint.TICKER,
      RequestType.POST,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#orderbook
   */
  async getOrderBook(
    request: OrderBookRequest,
  ): Promise<OrderBook> {
    const orderbookRaw = await this.connection.apRequest<OrderBookRequest, OrderBookRaw>(
      Endpoint.ORDER_BOOK,
      RequestType.POST,
      request,
    );
    return orderbookFromRaw(orderbookRaw)
  }

  getOrderBookRaw(
    request: OrderBookRequest,
  ): Promise<OrderBookRaw> {
    return this.connection.apRequest(
      Endpoint.ORDER_BOOK,
      RequestType.POST,
      request,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#trades
   */
  getTrades(params: TradesRequest): Promise<Trade[]> {
    return this.connection.apRequest(
      Endpoint.TRADES,
      RequestType.POST,
      params,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getl2snapshot
   */
  async getL2Snapshot(request: GetL2SnapshotRequest): Promise<L2Snapshot[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    const response: number[][] = (await this.connection.apRequest(
      Endpoint.GET_L2_SNAPSHOT,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((snapshot): L2Snapshot => ({
      MDUpdateID: snapshot[0],
      NumberOfUniqueAccounts: snapshot[1],
      ActionDateTime: snapshot[2],
      ActionType: snapshot[3],
      LastTradePrice: snapshot[4],
      NumberOfOrders: snapshot[5],
      Price: snapshot[6],
      ProductPairCode: snapshot[7],
      Quantity: snapshot[8],
      Side: snapshot[9],
    }));
  }

  /**
   * https://apidoc.notbank.exchange/#getlevel1
   */
  getLevel1(request: GetLevel1Request): Promise<Level1> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_LEVEL1,
      RequestType.POST,
      paramsWithOMSId,
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getenums
   */
  getEnums(): Promise<EnumsResponse> {
    return this.connection.apRequest(
      Endpoint.GET_ENUMS,
      RequestType.POST,
    )
  }
}
