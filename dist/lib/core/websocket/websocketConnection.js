var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WebsocketConnection_instances, _WebsocketConnection_getSubscriptionCallbackId, _WebsocketConnection_handleMessage, _WebsocketConnection_request, _WebsocketConnection_handleRequestResponse, _WebsocketConnection_requestToCallback;
import WebSocket from "universal-websocket-client";
import { Endpoint } from "../../constants/endpoints.js";
import { MessageType } from "./messageFrame.js";
import { RequestType } from "../serviceClient.js";
import { NotbankError } from "../../models/index.js";
import { CallbackManager } from "./callbackManager.js";
import ErrorCode from "../../constants/errorCode.js";
import { SubscriptionIdentifier } from "./SubscriptionIdentifier.js";
const emptyFn = (o) => { };
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class WebsocketConnection {
    constructor(configuration) {
        _WebsocketConnection_instances.add(this);
        this.domain = (configuration === null || configuration === void 0 ? void 0 : configuration.domain) || DEFAULT_DOMAIN;
        this.callbackManager = new CallbackManager();
        this.hooks = (configuration === null || configuration === void 0 ? void 0 : configuration.websocketHooks) || {};
        this.peekMessageIn = (configuration === null || configuration === void 0 ? void 0 : configuration.peekMessageIn) || (_ => { });
        this.peekMessageOut = (configuration === null || configuration === void 0 ? void 0 : configuration.peekMessageOut) || (_ => { });
    }
    nbFormDataRequest(endpoint, fields, files, message) {
        throw new Error("websocket client does not support nb form data methods.");
    }
    updateSessionToken(sessionToken) {
        throw new Error("websocket client does not updating session token.");
    }
    nbRequest(endpoint, requestType, message) {
        throw new Error("websocket client does not support nb methods.");
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.websocket = new WebSocket("wss://" + this.domain + "/wsgateway");
            this.websocket.onopen = event => { var _a, _b; return (_b = (_a = this.hooks).onOpen) === null || _b === void 0 ? void 0 : _b.call(_a, event); };
            this.websocket.onclose = event => { var _a, _b; return (_b = (_a = this.hooks).onClose) === null || _b === void 0 ? void 0 : _b.call(_a, event); };
            this.websocket.onerror = event => { var _a, _b; return (_b = (_a = this.hooks).onError) === null || _b === void 0 ? void 0 : _b.call(_a, event); };
            this.websocket.addEventListener("message", event => {
                const messageFrame = JSON.parse(event.data);
                __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_handleMessage).call(this, messageFrame);
            });
            this.websocket.addEventListener("message", event => { var _a, _b; return (_b = (_a = this.hooks).onMessage) === null || _b === void 0 ? void 0 : _b.call(_a, event); });
            return new Promise((resolve, _) => this.websocket.addEventListener("open", _ => resolve()));
        });
    }
    close() {
        return this.websocket.close();
    }
    get readyState() {
        return this.websocket.readyState;
    }
    apRequest(endpoint, requestType, message) {
        return __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_request).call(this, endpoint, message, MessageType.REQUEST);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            subscriptionCallbacks.map(handler => this.callbackManager.addSubscriptionCallback(SubscriptionIdentifier.get(handler.eventName, firstIdentifier, secondIdentifier), handler.eventHandler));
            return __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_request).call(this, endpoint, message, MessageType.REQUEST);
        });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callbackIds) {
        return __awaiter(this, void 0, void 0, function* () {
            this.callbackManager.removeSubscriptionCallback(callbackIds.map(callbackId => SubscriptionIdentifier.get(callbackId, firstIdentifier, secondIdentifier)));
            return yield __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_request).call(this, endpoint, message, MessageType.REQUEST);
        });
    }
    closeConnection() {
        this.websocket.socket.close();
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apRequest(Endpoint.AUTHENTICATE_USER, RequestType.NONE, params);
        });
    }
}
_WebsocketConnection_instances = new WeakSet(), _WebsocketConnection_getSubscriptionCallbackId = function _WebsocketConnection_getSubscriptionCallbackId(message) {
    return SubscriptionIdentifier.getFromMessageFrame(message);
}, _WebsocketConnection_handleMessage = function _WebsocketConnection_handleMessage(message) {
    this.peekMessageIn(message);
    const callback = this.callbackManager.popCallback(message.i);
    if (callback != null) {
        callback(message);
        if (isErrorMessage(message)) {
            return;
        }
    }
    const callbackId = __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_getSubscriptionCallbackId).call(this, message);
    const subscriptionCallback = this.callbackManager.getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
        subscriptionCallback(message);
        return;
    }
    var lastSuffixStart = callbackId.lastIndexOf("_");
    if (lastSuffixStart == -1) {
        return;
    }
    const broaderCallbackId = callbackId.substring(0, lastSuffixStart);
    const broaderSubscriptionCallback = this.callbackManager.getSubscriptionCallback(callbackId);
    if (broaderSubscriptionCallback != null) {
        broaderSubscriptionCallback(message);
        return;
    }
}, _WebsocketConnection_request = function _WebsocketConnection_request(endpoint, message, messageType = MessageType.REQUEST) {
    return new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_requestToCallback).call(this, endpoint, JSON.stringify(message) || "{}", messageType, __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_handleRequestResponse).call(this, reject, resolve));
    });
}, _WebsocketConnection_handleRequestResponse = function _WebsocketConnection_handleRequestResponse(reject, resolve) {
    return (response) => {
        try {
            var payload = JSON.parse(response.o);
        }
        catch (e) {
            reject(newStandardErrorFromString(response.o));
            return;
        }
        if (response.m === MessageType.ERROR) {
            reject(NotbankError.Factory.createFromApResponse(payload));
            return;
        }
        var standardResponse = payload;
        if ((standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.result) === false &&
            (standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.errormsg) != null) {
            reject(NotbankError.Factory.createFromApResponse(payload));
            return;
        }
        resolve(payload);
    };
}, _WebsocketConnection_requestToCallback = function _WebsocketConnection_requestToCallback(endpoint, message, messageType, callback = emptyFn) {
    const sequenceNumber = this.callbackManager.putCallback(callback);
    const frame = {
        m: messageType,
        i: sequenceNumber,
        n: endpoint,
        o: message
    };
    this.peekMessageOut(frame);
    this.websocket.send(JSON.stringify(frame));
};
function newStandardErrorFromString(errorStr) {
    return NotbankError.Factory.createFromApResponse({
        result: false,
        errormsg: errorStr,
        errorcode: ErrorCode.UNDEFINED,
        statusCode: -1,
        detail: ""
    });
}
function isErrorMessage(message) {
    let isErrorType = message.m === MessageType.ERROR;
    if (isErrorType) {
        return true;
    }
    try {
        let standardError = message.o;
        return standardError.result == false;
    }
    catch (e) {
        return false;
    }
}
