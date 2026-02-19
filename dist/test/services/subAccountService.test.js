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
import { NotbankClient } from "../../lib/services/notbankClient.js";
describe("subAccount service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae");
    describe("createSubAccount", () => {
        it("should create a subaccount", () => __awaiter(void 0, void 0, void 0, function* () {
            yield client.getSubAccountService().createSubAccount({
                alias: "test_sub",
            });
        }));
    });
    describe("getSubAccounts", () => {
        it("should get subaccounts", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getSubAccountService().getSubAccounts({
                page: 1,
                page_size: 10,
            });
            console.log("subaccounts:", response);
            assert.ok(response, "Response should not be null");
            assert.ok(Array.isArray(response.data), "Data should be an array");
            assert.ok(typeof response.total === "number", "Total should be a number");
        }));
    });
});
