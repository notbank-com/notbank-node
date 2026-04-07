var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Endpoint } from "../../constants/endpoints.js";
export class RestartingWebsocketConnection {
    constructor(params) {
        this.restarter = params.restarter;
    }
    nbFormDataRequest(endpoint, fields, files, message) {
        throw new Error("websocket client does not support nb form data methods.");
    }
    updateSessionToken(sessionToken) {
        throw new Error("websocket client does not support updating session token.");
    }
    apRequest(endpoint, requestType, message) {
        if (endpoint === Endpoint.LOGOUT) {
            this.restarter.getReauther().removeAuthentication();
        }
        return this.restarter
            .getConnection()
            .apRequest(endpoint, requestType, message);
    }
    nbRequest(endpoint, requestType, message, paged) {
        throw new Error("websocket client does not support nb methods.");
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.restarter.getConnection().authenticateUser(params);
            this.restarter
                .getReauther()
                .updateAuthentication(connection => connection.authenticateUser(params));
        });
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionHandlers) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.restarter
                .getConnection()
                .subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionHandlers);
            this.restarter.getResubscriber().saveSubscription({
                endpoint,
                firstIdentifier,
                secondIdentifier,
                message,
                subscriptionHandlers
            });
        });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.restarter
                .getConnection()
                .unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids);
            this.restarter.getResubscriber().removeSubscription(callback_ids);
        });
    }
    get readyState() {
        return this.restarter.getConnection().readyState;
    }
    connect() {
        return this.restarter.reconnect();
    }
    close() {
        return this.restarter.close();
    }
}
