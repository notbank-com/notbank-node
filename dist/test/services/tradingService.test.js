var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from "assert";
import "mocha";
import { OrderSide } from "../../lib/models/enums/orderSide.js";
import { OrderTypeInt } from "../../lib/models/enums/orderType.js";
import { TimeInForce } from "../../lib/models/enums/timeInForce.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { TestHelper } from "./TestHelper.js";
describe("http trading service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        // Autenticación previa a todas las pruebas en este bloque, http only
        yield client.authenticateUser(TestHelper.getCredentials());
    }));
    const tradingService = client.getTradingService();
    describe("sendOrder", () => {
        it("should send a valid order successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockOrderRequest = {
                InstrumentId: 1,
                AccountId: 99,
                TimeInForce: TimeInForce.GTC, // Usamos enum en lugar de string
                Side: OrderSide.Buy, // Usamos enum en lugar de número
                OrderType: OrderTypeInt.Limit, // Usamos enum en lugar de string
                Quantity: 10,
                LimitPrice: 80,
            };
            const response = yield tradingService.sendOrder(mockOrderRequest);
            console.log(response);
            assert.ok(response.OrderId, "Response should include an OrderId");
            assert.strictEqual(response.Status, "SUCCESS", "Response status should be 'SUCCESS'");
        }));
        it("should throw an error for missing required parameters", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const invalidOrderRequest = {
                    Quantity: 10,
                    Side: OrderSide.Buy, // Enum requerido
                    TimeInForce: TimeInForce.GTC, // Enum requerido
                    OrderType: OrderTypeInt.Market, // Enum requerido
                };
                // @ts-expect-error – Omitimos instrumentId y accountId
                yield tradingService.sendOrder(invalidOrderRequest);
                assert.fail("The call should throw an error due to missing parameters");
            }
            catch (error) {
                assert.ok(error, "Error should be thrown");
                assert.match(error.message, /InstrumentId and AccountId are required/, "Error message should indicate missing fields");
            }
        }));
    });
    describe("getOrderBook", () => {
        it("should throw an error for missing required parameters", () => __awaiter(void 0, void 0, void 0, function* () {
            var orderbook = yield tradingService.getOrderBook({ Market_Pair: "BTCUSDT", Depth: 5, Level: 2 });
            assert.ok(orderbook);
            assert.equal(orderbook.asks.length, 5);
            assert.equal(orderbook.bids.length, 5);
        }));
    });
    describe("GetLevel1Summary", () => {
        it("should throw an error for missing required parameters", () => __awaiter(void 0, void 0, void 0, function* () {
            var response = yield tradingService.getLevel1Summary();
            assert.ok(response);
            console.log(response);
        }));
    });
});
