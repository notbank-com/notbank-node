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
describe("http user service", () => {
    const client = NotbankClient.Factory.createRestClient();
    const service = client.getProductService();
    describe("get products", () => {
        it("fetches all products successfully", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield service.getProducts({});
                assert.ok(response, "esponse should be defined");
            });
        });
    });
    describe("get product", () => {
        it("fetches product details successfully", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield service.getProduct({
                    ProductId: 1,
                });
                console.log(typeof response.TickSize);
                assert.ok(response, "Response should not be null or undefined");
                assert.strictEqual(response.Product, "USD", "Product should be USD");
            });
        });
        it("fails or returns error for invalid ProductId (e.g. -1)", function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield service.getProduct({
                        ProductId: -1,
                    });
                    assert.fail("The call should have thrown an error for invalid ProductId");
                }
                catch (error) {
                    assert.ok(error, "Should throw an error for invalid ProductId");
                }
            });
        });
    });
});
