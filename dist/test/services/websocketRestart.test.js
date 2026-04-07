var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { TestHelper } from "./TestHelper.js";
describe("websocket restarter", () => {
    let client;
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        client = NotbankClient.Factory.createWebsocketClient({
            domain: "stgapi.notbank.exchange",
            peekMessageIn: message => { },
            peekMessageOut: message => { },
            websocketHooks: {
                onOpen: o => console.log("open"),
            },
            withReconnect: true
        });
        yield client.connect();
        yield client.authenticateUser(TestHelper.getCredentials());
        subscriptionService = client.getSubscriptionService();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.close();
    }));
    describe("subscribeLevel1", () => {
        it("debería reconectarse después de desconexión", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(0);
                yield subscriptionService.subscribeOrderStateEvents({
                    InstrumentId: 66,
                    AccountId: 235
                }, o => { console.log(o); });
                yield sleepSeconds(300000);
            });
        });
    });
    function sleepSeconds(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
});
