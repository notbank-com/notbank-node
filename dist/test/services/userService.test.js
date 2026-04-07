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
import { HttpServiceFactory } from "../../lib/services/httpServiceFactory.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { WebsocketServiceFactory } from "../../lib/services/websocketServiceFactory.js";
import { TestHelper } from "./TestHelper.js";
describe("http user service 1", () => {
    const client = NotbankClient.Factory.createRestClient();
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        // Autenticación previa a todas las pruebas en este bloque, http only
        yield client.authenticateUser(TestHelper.getCredentials());
    }));
    it("should complete authentication setup", () => {
        assert.notEqual(client, null);
        assert.ok(client instanceof HttpServiceFactory);
    });
});
describe("http user service 2", () => {
    const serviceFactory = new HttpServiceFactory("stgapi.notbank.exchange");
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        // Autenticación previa a todas las pruebas en este bloque
        yield serviceFactory.authenticateUser(TestHelper.getCredentials());
    }));
    const userService = serviceFactory.newUserService();
    describe("getUserAccounts", () => {
        it("should obtain the user accounts for a valid UserId", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    UserId: 9,
                };
                const response = yield userService.getUserAccounts(params);
                console.log("Response for GetUserAccounts:", response);
                assert.equal(Array.isArray(response), true, "The response should be an array");
                if (response.length > 0) {
                    assert.strictEqual(typeof response[0], "number", "Account ID should be a number");
                }
            });
        });
        it("should obtain the user accounts for a valid OMSId only (now as const on getUserAccounts", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {};
                const response = yield userService.getUserAccounts(params);
                console.log("Response for GetUserAccounts:", response);
                assert.equal(Array.isArray(response), true, "The response should be an array");
                if (response.length > 0) {
                    assert.strictEqual(typeof response[0], "number", "Account ID should be a number");
                }
            });
        });
        it("should handle invalid UserId values", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const invalidParams = [
                    { UserId: "invalid" }, // Invalid UserId
                ];
                for (const params of invalidParams) {
                    try {
                        yield userService.getUserAccounts(params);
                        assert.fail("Should throw an error");
                    }
                    catch (error) {
                        console.log("Caught error (expected):", error.message);
                        assert.match(error.message, /must be a number/, "Error message should mention the invalid type");
                    }
                }
            });
        });
    });
    describe("getUserDevices", () => {
        it("should obtain the user devices for a valid UserId", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    UserId: 6,
                };
                const response = yield userService.getUserDevices(params);
                console.log("Response for GetUserDevices:", response);
                assert.equal(Array.isArray(response), true, "The response should be an array");
                if (response.length > 0) {
                    const device = response[0];
                    assert.strictEqual(typeof device.HashCode, "number", "HashCode should be a number");
                    assert.strictEqual(typeof device.DeviceName, "string", "DeviceName should be a string");
                    assert.strictEqual(typeof device.IpAddress, "string", "IpAddress should be a string");
                    assert.strictEqual(typeof device.UserId, "number", "UserId should be a number");
                    assert.strictEqual(typeof device.IsTrusted, "boolean", "IsTrusted should be a boolean");
                    assert.strictEqual(typeof device.ExpirationTime, "number", "ExpirationTime should be a number");
                }
            });
        });
        it("should handle missing parameters", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield userService.getUserDevices({});
                console.log("Response for GetUserDevices without params:", response);
                assert.equal(Array.isArray(response), true, "The response should be an array");
                if (response.length > 0) {
                    const device = response[0];
                    assert.strictEqual(typeof device.HashCode, "number", "HashCode should be a number");
                    assert.strictEqual(typeof device.DeviceName, "string", "DeviceName should be a string");
                    assert.strictEqual(typeof device.IpAddress, "string", "IpAddress should be a string");
                    assert.strictEqual(typeof device.UserId, "number", "UserId should be a number");
                    assert.strictEqual(typeof device.IsTrusted, "boolean", "IsTrusted should be a boolean");
                    assert.strictEqual(typeof device.ExpirationTime, "number", "ExpirationTime should be a number");
                }
            });
        });
        it("should handle an invalid UserId value", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    UserId: "invalid",
                };
                try {
                    yield userService.getUserDevices(params);
                    assert.fail("Should throw an error");
                }
                catch (error) {
                    assert.match(error.message, /UserId must be a number/, "Error message should mention the invalid type");
                }
            });
        });
    });
    describe("getUserInfo", () => {
        it("should return user info for a valid UserId", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = { UserId: 64 };
                const response = yield userService.getUserInfo(params);
                console.log("Response for getUserInfo:", response);
                assert.strictEqual(typeof response.UserId, "number", "UserId should be a number");
                assert.strictEqual(typeof response.Username, "string", "Username should be a string");
                assert.strictEqual(typeof response.Email, "string", "Email should be a string");
                assert.strictEqual(typeof response.EmailVerified, "boolean", "EmailVerified should be a boolean");
                assert.strictEqual(typeof response.AccountId, "number", "AccountId should be a number");
            });
        });
        it("should allow call without UserId (use default from session)", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield userService.getUserInfo({});
                console.log("Response for getUserInfo without UserId:", response);
                assert.strictEqual(typeof response.UserId, "number", "UserId should be a number");
            });
        });
        it("should throw error if UserId is not a number", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = { UserId: "invalid" };
                try {
                    yield userService.getUserInfo(params);
                    assert.fail("Should throw an error");
                }
                catch (error) {
                    assert.match(error.message, /UserId must be a number/, "Expected validation error");
                }
            });
        });
    });
    describe("getUserPermissions", () => {
        it("should return permissions for a valid UserId", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = { UserId: 64 };
                const response = yield userService.getUserPermissions(params);
                console.log("Response for getUserPermissions:", response);
                assert.ok(Array.isArray(response), "Permissions response should be an array");
                if (response.length > 0) {
                    assert.strictEqual(typeof response[0], "string", "Permission should be a string");
                }
            });
        });
        it("should throw error when UserId is missing", function () {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield userService.getUserPermissions({});
                    assert.fail("Should throw an error");
                }
                catch (error) {
                    assert.match(error.message, /UserId is required and must be a number/, "Expected validation error");
                }
            });
        });
        it("should throw error when UserId is not a number", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const params = { UserId: "invalid" };
                try {
                    yield userService.getUserPermissions(params);
                    assert.fail("Should throw an error");
                }
                catch (error) {
                    assert.match(error.message, /UserId is required and must be a number/, "Expected validation error");
                }
            });
        });
    });
});
describe("websocket user service", () => {
    const serviceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield serviceFactory.connect();
        yield serviceFactory.authenticateUser(TestHelper.getCredentials());
    }));
    after(() => {
        serviceFactory.close();
    });
    const authService = serviceFactory.newAuthService();
    describe("log out", () => {
        it("logs out successfully", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield authService.logOut();
                assert.ok(response, "Response should not be null or undefined");
            });
        });
    });
});
