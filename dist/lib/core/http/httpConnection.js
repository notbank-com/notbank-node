var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HttpConnection_host, _HttpConnection_sessionToken;
import { Endpoint } from "../../constants/endpoints.js";
import { RequestType } from "../serviceClient.js";
import { ApResponseHandler } from "./apResponseHandler.js";
import { FormDataBuilder } from "./formDataBuilder.js";
import { FormDataRequester } from "./formDataRequester.js";
import { JsonRequester } from "./jsonRequester.js";
import { NbResponseHandler } from "./nbResponseHandler.js";
export class HttpConnection {
    constructor(domain) {
        _HttpConnection_host.set(this, void 0);
        _HttpConnection_sessionToken.set(this, void 0);
        __classPrivateFieldSet(this, _HttpConnection_host, "https://" + domain, "f");
    }
    nbRequest(endpoint_1, requestType_1, message_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, requestType, message, paged = false) {
            const url = this.getNbUrl(endpoint);
            const headers = this.getHeaders();
            var response = yield JsonRequester.request({ url, requestType, params: message, extraHeaders: headers });
            return yield NbResponseHandler.handle(response, paged);
        });
    }
    nbFormDataRequest(endpoint, fields, files, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.getNbUrl(endpoint);
            const formData = FormDataBuilder.build({ fields, files, message: message || {} });
            const headers = this.getHeaders();
            const response = yield FormDataRequester.post({ url, formData, extraHeaders: headers });
            return yield NbResponseHandler.handle(response, false);
        });
    }
    apRequest(endpoint, requestType, message, extraHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.getApUrl(endpoint);
            const headers = Object.assign(Object.assign({}, extraHeaders), this.getHeaders());
            const response = yield JsonRequester.request({
                url,
                requestType,
                params: message,
                extraHeaders: headers
            });
            return yield ApResponseHandler.handle(response);
        });
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield this.apRequest(Endpoint.AUTHENTICATE_USER, RequestType.GET, null, params);
            __classPrivateFieldSet(this, _HttpConnection_sessionToken, response.SessionToken, "f");
        });
    }
    updateSessionToken(aptoken) {
        __classPrivateFieldSet(this, _HttpConnection_sessionToken, aptoken, "f");
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
        throw new Error("Method not implemented.");
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
        throw new Error("Method not implemented.");
    }
    setResponseHandler(responseHandler) {
        throw new Error("Method not implemented.");
    }
    setResponseHandlers(responseHandlers) {
        throw new Error("Method not implemented.");
    }
    getApUrl(endpoint) {
        return __classPrivateFieldGet(this, _HttpConnection_host, "f") + "/ap/" + endpoint;
    }
    getNbUrl(endpoint) {
        return __classPrivateFieldGet(this, _HttpConnection_host, "f") + "/api/nb/" + endpoint;
    }
    connect() {
        return Promise.resolve();
    }
    close() {
        return Promise.resolve();
    }
    getHeaders() {
        if (__classPrivateFieldGet(this, _HttpConnection_sessionToken, "f")) {
            return { aptoken: __classPrivateFieldGet(this, _HttpConnection_sessionToken, "f") };
        }
        return {};
    }
}
_HttpConnection_host = new WeakMap(), _HttpConnection_sessionToken = new WeakMap();
