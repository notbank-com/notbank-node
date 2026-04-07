var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebSocketEndpoint } from "../constants/endpoints.js";
import { SubscriptionIdentifier } from "../core/websocket/SubscriptionIdentifier.js";
import { completeParams } from "../utils/completeParams.js";
import { parseTradeSummary } from "../utils/parseIndexTrade.js";
import { newHandler, newMaybeHandler } from "../utils/subscriptionCallbacksHandler.js";
export class SubscriptionService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#subscribelevel1
     */
    subscribeLevel1(request, snapshotHandler, updateHandler) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.subscribe(WebSocketEndpoint.SUBSCRIBE_LEVEL1, request.InstrumentId || null, null, requestWithOMSId, [
            newHandler(WebSocketEndpoint.SUBSCRIBE_LEVEL1, snapshotHandler),
            newHandler(WebSocketEndpoint.UPDATE_LEVEL1, updateHandler)
        ]);
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel1
     */
    unsubscribeLevel1(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield this.connection.unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_LEVEL1, request.InstrumentId || null, null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_LEVEL1, WebSocketEndpoint.UNSUBSCRIBE_LEVEL1]);
        });
    }
    /**
     * https://apidoc.notbank.exchange/#subscribelevel2
     */
    subscribeLevel2(request, snapshotHandler, updateHandler) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.subscribe(WebSocketEndpoint.SUBSCRIBE_LEVEL2, request.InstrumentId, null, requestWithOMSId, [
            newHandler(WebSocketEndpoint.SUBSCRIBE_LEVEL2, snapshotHandler),
            newHandler(WebSocketEndpoint.UPDATE_LEVEL2, updateHandler)
        ]);
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel2
     */
    unsubscribeLevel2(request) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_LEVEL2, request.InstrumentId || null, null, requestWithOMSId, [
            SubscriptionIdentifier.get(WebSocketEndpoint.SUBSCRIBE_LEVEL2, request.InstrumentId)
        ]);
    }
    /**
     * https://apidoc.notbank.exchange/#subscribetrades
     */
    subscribeTrades(request, subcriptionHandler) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.subscribe(WebSocketEndpoint.SUBSCRIBE_TRADES, request.InstrumentId, null, requestWithOMSId, [
            newHandler(WebSocketEndpoint.SUBSCRIBE_TRADES, mapTrade => subcriptionHandler(parseTradeSummary(mapTrade)))
        ]);
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribetrades
     */
    unsubscribeTrades(request) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_TRADES, request.InstrumentId, null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_TRADES]);
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeticker
     */
    subscribeTicker(request, snapshotHandler, updateHandler) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.subscribe(WebSocketEndpoint.SUBSCRIBE_TICKER, request.InstrumentId || null, null, requestWithOMSId, [
            newHandler(WebSocketEndpoint.SUBSCRIBE_TICKER, snapshotHandler),
            newHandler(WebSocketEndpoint.UPDATE_TICKER + "_" + request.InstrumentId, updateHandler)
        ]);
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeticker
     */
    unsubscribeTicker(request) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_TICKER, request.InstrumentId || null, null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_TICKER]);
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeaccountevents
     */
    subscribeAccountEvents(request, eventHandlers) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.subscribe(WebSocketEndpoint.SUBSCRIBE_ACCOUNT_EVENTS, request.AccountId, null, requestWithOMSId, [
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE, eventHandlers.withdrawTicketUpdateEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE, eventHandlers.orderTradeEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE, eventHandlers.orderStateEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE, eventHandlers.depositTicketUpdateEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION, eventHandlers.accountPositionEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE, eventHandlers.accountInfoUpdateEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT, eventHandlers.cancelOrderRejectEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT, eventHandlers.depositEventHandler || null),
            newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION, eventHandlers.transactionEventHandler || null)
        ].filter(handler => handler != null));
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeaccountevents
     */
    unsubscribeAccountEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return this.connection.unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_ACCOUNT_EVENTS, request.AccountId, null, requestWithOMSId, [
                WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE,
                WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE,
                WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE,
                WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE,
                WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION,
                WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE,
                WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT,
                WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT,
                WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION
            ]);
        });
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeorderstateevents
     */
    subscribeOrderStateEvents(request, subscriptionHandler) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.subscribe(WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS, request.AccountId, request.InstrumentId || null, requestWithOMSId, [
            newHandler(WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE, subscriptionHandler)
        ]);
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeorderstateevents
     */
    unsubscribeOrderStateEvents(request) {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_ORDER_STATE_EVENTS, request.AccountId, request.InstrumentId || null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS]);
    }
}
