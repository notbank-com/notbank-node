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
describe("fee service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    let credentials = undefined;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        credentials = TestHelper.getCredentials();
        yield client.authenticateUser(credentials);
    }));
    describe("getDepositFee", () => {
        it("success response", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getFeeService().getDepositFee({
                AccountId: credentials.AccountId,
                Amount: 100,
                ProductId: 5
            });
            console.log("response:", response);
        }));
    });
    describe("getWithdrawFee", () => {
        it.only("success response", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getFeeService().getWithdrawFee({
                AccountId: 12,
                Amount: 200,
                ProductId: 51
            });
            console.log("response:", response);
        }));
    });
});
