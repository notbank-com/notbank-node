var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _SubscriptionIdentifier_mapping, _SubscriptionIdentifier_getIdPart, _SubscriptionIdentifier_getTickerName, _SubscriptionIdentifier_getLevel1TickerName, _SubscriptionIdentifier_getLevel2TickerName, _SubscriptionIdentifier_getSocketTradeName, _SubscriptionIdentifier_getAccountEventName, _SubscriptionIdentifier_getOrderEventName, _SubscriptionIdentifier_getValueFromList, _SubscriptionIdentifier_getInstrumentedId, _SubscriptionIdentifier_getAccountId, _SubscriptionIdentifier_getAccountIdFromAccount;
import { WebSocketEndpoint } from "../../constants/endpoints.js";
export class SubscriptionIdentifier {
    static get(eventName, firstIdentifier = null, secondIdentifier = null) {
        return (eventName +
            __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getIdPart).call(_a, firstIdentifier) +
            __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getIdPart).call(_a, secondIdentifier));
    }
    static getFromMessageFrame(message) {
        var _b, _c, _d;
        return (_d = (_c = (_b = __classPrivateFieldGet(this, _a, "f", _SubscriptionIdentifier_mapping))[message.n]) === null || _c === void 0 ? void 0 : _c.call(_b, message.n, message.o)) !== null && _d !== void 0 ? _d : message.n;
    }
}
_a = SubscriptionIdentifier, _SubscriptionIdentifier_getIdPart = function _SubscriptionIdentifier_getIdPart(firstIdentifier) {
    return firstIdentifier != null ? "_" + firstIdentifier : "";
}, _SubscriptionIdentifier_getTickerName = function _SubscriptionIdentifier_getTickerName(eventName, payloadStr) {
    const instrumentId = __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getValueFromList).call(_a, payloadStr, 8);
    if (instrumentId == null) {
        return eventName;
    }
    return eventName + "_" + instrumentId;
}, _SubscriptionIdentifier_getLevel1TickerName = function _SubscriptionIdentifier_getLevel1TickerName(eventName, payloadStr) {
    return (eventName + "_" + __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getInstrumentedId).call(_a, payloadStr));
}, _SubscriptionIdentifier_getLevel2TickerName = function _SubscriptionIdentifier_getLevel2TickerName(eventName, payloadStr) {
    let instrumentId = __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getValueFromList).call(_a, payloadStr, 7);
    if (instrumentId == null) {
        return eventName;
    }
    return eventName + "_" + instrumentId;
}, _SubscriptionIdentifier_getSocketTradeName = function _SubscriptionIdentifier_getSocketTradeName(eventName, payloadStr) {
    const instrumentId = __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getValueFromList).call(_a, payloadStr, 1);
    if (instrumentId == null) {
        return eventName;
    }
    return eventName + "_" + instrumentId;
}, _SubscriptionIdentifier_getAccountEventName = function _SubscriptionIdentifier_getAccountEventName(eventName, payloadStr) {
    let accountId = __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountId).call(_a, payloadStr);
    if (accountId != null) {
        return eventName + "_" + accountId;
    }
    accountId = __classPrivateFieldGet(this, _a, "m", _SubscriptionIdentifier_getAccountIdFromAccount).call(this, payloadStr);
    if (accountId != null) {
        return eventName + "_" + accountId;
    }
    return eventName;
}, _SubscriptionIdentifier_getOrderEventName = function _SubscriptionIdentifier_getOrderEventName(eventName, payloadStr) {
    const data = JSON.parse(payloadStr);
    let identifier = eventName + "_" + data.AccountId;
    if (data.Instrument) {
        identifier = identifier + "_" + data.Instrument;
    }
    return identifier;
}, _SubscriptionIdentifier_getValueFromList = function _SubscriptionIdentifier_getValueFromList(payloadStr, index) {
    const data = JSON.parse(payloadStr);
    if (data.length == 0) {
        return null;
    }
    if (data[0].length <= index) {
        return null;
    }
    return data[0][index];
}, _SubscriptionIdentifier_getInstrumentedId = function _SubscriptionIdentifier_getInstrumentedId(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.InstrumentId;
}, _SubscriptionIdentifier_getAccountId = function _SubscriptionIdentifier_getAccountId(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.AccountId;
}, _SubscriptionIdentifier_getAccountIdFromAccount = function _SubscriptionIdentifier_getAccountIdFromAccount(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.Account;
};
_SubscriptionIdentifier_mapping = { value: {
        [WebSocketEndpoint.SUBSCRIBE_LEVEL1]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getLevel1TickerName),
        [WebSocketEndpoint.UPDATE_LEVEL1]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getLevel1TickerName),
        [WebSocketEndpoint.SUBSCRIBE_LEVEL2]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getLevel2TickerName),
        [WebSocketEndpoint.UPDATE_LEVEL2]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getLevel2TickerName),
        [WebSocketEndpoint.SUBSCRIBE_TICKER]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getTickerName),
        [WebSocketEndpoint.UPDATE_TICKER]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getTickerName),
        [WebSocketEndpoint.SUBSCRIBE_TRADES]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getSocketTradeName),
        [WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getOrderEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
        [WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT]: __classPrivateFieldGet(_a, _a, "m", _SubscriptionIdentifier_getAccountEventName),
    } };
