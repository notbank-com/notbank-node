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
describe("auth service", () => {
    const client = NotbankClient.Factory.createWebsocketClient({ domain: "stgapi.notbank.exchange" });
    describe("auth user", () => {
        it("should authenticate the user", () => __awaiter(void 0, void 0, void 0, function* () {
            yield client.connect();
            const response = yield client.getAuthService().webAuthenticateUser({
                JWTToken: "abc123"
            });
            console.log("authentication response:", response);
            assert.ok(response.Authenticated);
            yield client.close();
        }));
    });
});
