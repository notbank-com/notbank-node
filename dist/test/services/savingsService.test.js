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
import { YieldProduct } from "../../lib/models/enums/index.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
describe("savings service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae");
    describe("depositToYield", () => {
        it("should deposit to yield", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getSavingsService().depositToYield({
                amount: 10,
                product_id: 5,
                currency: "USDT",
                type: YieldProduct.VARIABLE
            });
            console.log("transaction id:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
    describe("withdrawFromYield", () => {
        it("should withdraw from yield", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getSavingsService().withdrawFromYield({
                amount: 10,
                product_id: 5,
                currency: "USDT",
                type: YieldProduct.VARIABLE
            });
            console.log("transaction id:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
});
