var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { orderbookFromRaw } from "../models/response/orderBook.js";
import { completeParams } from "../utils/completeParams.js";
import { completeParamsArray } from "../utils/completeParamsArray.js";
import { parseTradeSummary } from "../utils/parseIndexTrade.js";
export class TradingService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#sendorderlist
     */
    sendOrderList(params) {
        const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SEND_ORDER_LIST, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#sendcancellist
     */
    sendCancelList(params) {
        const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SEND_CANCEL_LIST, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#sendcancelreplacelist
     */
    sendCancelReplaceList(params) {
        const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SEND_CANCEL_REPLACE_LIST, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#modifyorder
     */
    modifyOrder(request) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.MODIFY_ORDER, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#cancelallorders
     */
    cancelAllOrders(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.CANCEL_ALL_ORDERS, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getorderstatus
     */
    getOrderStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return this.connection.apRequest(Endpoint.GET_ORDER_STATUS, RequestType.POST, paramsWithOMSId);
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getordershistory
     */
    getOrdersHistory(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_ORDERS_HISTORY, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#gettradeshistory
     */
    getTradesHistory(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_TRADES_HISTORY, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getorderhistorybyorderid
     */
    getOrderHistoryByOrderId(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_ORDER_HISTORY_BY_ORDER_ID, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#gettickerhistory
     */
    getTickerHistory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            const response = (yield this.connection.apRequest(Endpoint.GET_TICKER_HISTORY, RequestType.POST, paramsWithOMSId));
            return response.map((item) => ({
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
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getlasttrades
     */
    getLastTrades(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            const response = (yield this.connection.apRequest(Endpoint.GET_LAST_TRADES, RequestType.POST, paramsWithOMSId));
            return response.map((item) => parseTradeSummary(item));
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1summary
     */
    getLevel1Summary() {
        return __awaiter(this, arguments, void 0, function* (request = {}) {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            const response = yield this.connection.apRequest(Endpoint.GET_LEVEL1_SUMMARY, RequestType.POST, paramsWithOMSId);
            return response.map(summary => JSON.parse(summary));
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1summarymin
     */
    getLevel1SummaryMin(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield this.connection.apRequest(Endpoint.GET_LEVEL1_SUMMARY_MIN, RequestType.POST, paramsWithOMSId));
            return response.map((data) => ({
                InstrumentId: data[0],
                InstrumentSymbol: data[1].toString(),
                LastTradedPx: data[2],
                Rolling24HrPxChange: data[3],
                Rolling24HrPxChangePercent: data[4],
                Rolling24HrVolume: data[5],
            }));
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getopentradereports
     */
    getOpenTradeReports(request) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_OPEN_TRADE_REPORTS, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getorders
     */
    getOrders(request) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_ORDERS, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getorderhistory
     */
    getOrderHistory(request) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_ORDER_HISTORY, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#sendorder
     */
    sendOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            return this.connection.apRequest(Endpoint.SEND_ORDER, RequestType.POST, paramsWithOMSId);
        });
    }
    /**
     * https://apidoc.notbank.exchange/#cancelreplaceorder
     */
    cancelReplaceOrder(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.CANCEL_REPLACE_ORDER, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#cancelorder
     */
    cancelOrder(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.CANCEL_ORDER, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getopenorders
     */
    getOpenOrders(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_OPEN_ORDERS, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getaccounttrades
     */
    getAccountTrades(request) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_ACCOUNT_TRADES, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#summary
     */
    getSummary() {
        return this.connection.apRequest(Endpoint.SUMMARY, RequestType.POST);
    }
    /**
     * https://apidoc.notbank.exchange/#ticker
     */
    getTicker() {
        return this.connection.apRequest(Endpoint.TICKER, RequestType.POST);
    }
    /**
     * https://apidoc.notbank.exchange/#orderbook
     */
    getOrderBook(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderbookRaw = yield this.connection.apRequest(Endpoint.ORDER_BOOK, RequestType.POST, request);
            return orderbookFromRaw(orderbookRaw);
        });
    }
    getOrderBookRaw(request) {
        return this.connection.apRequest(Endpoint.ORDER_BOOK, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#trades
     */
    getTrades(params) {
        return this.connection.apRequest(Endpoint.TRADES, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#getl2snapshot
     */
    getL2Snapshot(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            const response = (yield this.connection.apRequest(Endpoint.GET_L2_SNAPSHOT, RequestType.POST, paramsWithOMSId));
            return response.map((snapshot) => ({
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
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1
     */
    getLevel1(request) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_LEVEL1, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getenums
     */
    getEnums() {
        return this.connection.apRequest(Endpoint.GET_ENUMS, RequestType.POST);
    }
}
