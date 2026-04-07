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
import { RequestType } from "../serviceClient.js";
export class Pinger {
    constructor(pingIntervalMillis = 10000, pingTimeoutMillis = 5000) {
        this.pingIntervalMillis = pingIntervalMillis;
        this.pingTimeoutMillis = pingTimeoutMillis;
    }
    startPing(connection, restarter) {
        this.stop();
        this.interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Promise.race([
                    connection.apRequest(Endpoint.PING, RequestType.NONE),
                    new Promise((resolve, reject) => setTimeout(reject, this.pingTimeoutMillis))
                ]);
            }
            catch (e) {
                yield restarter.reconnect();
                return;
            }
        }), this.pingIntervalMillis);
        if (typeof this.interval.unref === 'function') {
            this.interval.unref();
        }
    }
    stop() {
        if (!this.interval) {
            return;
        }
        clearTimeout(this.interval);
    }
}
