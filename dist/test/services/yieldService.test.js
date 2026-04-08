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
import { YieldProductType } from "../../lib/models/enums/index.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { TestHelper } from "./TestHelper.js";
describe.only("yield service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.authenticateUser(TestHelper.getCredentials());
    }));
    client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae");
    describe("getYieldProducts", () => {
        it("should get yield products", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getYieldService().getYieldProducts();
            console.log("transaction id:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
    describe("depositToYield", () => {
        it("should deposit to yield", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getYieldService().depositToYield({
                account_id: 235,
                amount: 10,
                product_id: 5,
                currency: "USDT",
                type: YieldProductType.VARIABLE
            });
            console.log("transaction id:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
    describe("withdrawFromYield", () => {
        it("should withdraw from yield", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getYieldService().withdrawFromYield({
                account_id: 235,
                amount: 10,
                product_id: 5,
                currency: "USDT",
                type: YieldProductType.VARIABLE
            });
            console.log("transaction id:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
});
