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
var _Restarter_instances, _Restarter_connect, _Restarter_newConnection;
import { NotbankError } from "../../models/index.js";
import { Pinger } from "./pinger.js";
import { Reauther } from "./reauther.js";
import { Resubscriber } from "./resubscriber.js";
import { WebsocketConnection } from "./websocketConnection.js";
export class Restarter {
    constructor(params) {
        _Restarter_instances.add(this);
        this.closeRequested = false;
        this.reconnecting = false;
        this.connectionConfiguration = params.connectionConfiguration;
        this.pinger = new Pinger();
        this.resubscriber = new Resubscriber();
        this.reauther = new Reauther();
        this.connection = null;
    }
    getResubscriber() {
        return this.resubscriber;
    }
    getReauther() {
        return this.reauther;
    }
    getConnection() {
        if (this.reconnecting) {
            throw new NotbankError("unable to make notbank request. websocket reconnecting", -1);
        }
        return this.connection;
    }
    reconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.reconnecting || this.closeRequested) {
                return;
            }
            this.reconnecting = true;
            this.closeCurrentConnection();
            this.connection = __classPrivateFieldGet(this, _Restarter_instances, "m", _Restarter_newConnection).call(this);
            yield __classPrivateFieldGet(this, _Restarter_instances, "m", _Restarter_connect).call(this);
            this.reauther.makeAuthentication(this.connection);
            this.resubscriber.makeSubscriptions(this.connection);
            this.pinger.startPing(this.connection, this);
            this.reconnecting = false;
        });
    }
    closeCurrentConnection() {
        var _a;
        this.pinger.stop();
        var closed = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.close();
        return closed;
    }
    close() {
        this.closeRequested = true;
        var closed = this.closeCurrentConnection();
        return closed;
    }
}
_Restarter_instances = new WeakSet(), _Restarter_connect = function _Restarter_connect() {
    return __awaiter(this, void 0, void 0, function* () {
        while (!this.closeRequested) {
            try {
                yield Promise.race([
                    this.connection.connect(),
                    new Promise((resolve, reject) => setTimeout(reject, 10000))
                ]);
                return;
            }
            catch (e) {
                // try again
            }
        }
    });
}, _Restarter_newConnection = function _Restarter_newConnection() {
    var _a, _b;
    return new WebsocketConnection({
        domain: this.connectionConfiguration.domain,
        peekMessageIn: this.connectionConfiguration.peekMessageIn,
        peekMessageOut: this.connectionConfiguration.peekMessageOut,
        websocketHooks: {
            onMessage: (_a = this.connectionConfiguration.websocketHooks) === null || _a === void 0 ? void 0 : _a.onMessage,
            onOpen: (_b = this.connectionConfiguration.websocketHooks) === null || _b === void 0 ? void 0 : _b.onOpen,
            onError: (event) => {
                var _a, _b;
                if (this.reconnecting) {
                    return;
                }
                (_b = (_a = this.connectionConfiguration.websocketHooks) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            },
            onClose: (event) => {
                var _a, _b;
                if (this.reconnecting || !this.closeRequested) {
                    return;
                }
                (_b = (_a = this.connectionConfiguration.websocketHooks) === null || _a === void 0 ? void 0 : _a.onClose) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            },
        }
    });
};
