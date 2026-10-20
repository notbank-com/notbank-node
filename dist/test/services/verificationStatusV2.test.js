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
import { Endpoint } from "../../lib/constants/endpoints.js";
import { RequestType } from "../../lib/core/serviceClient.js";
import { VerificationService } from "../../lib/services/verificationService.js";
/**
 * Connection double. It records what the service asks for instead of hitting
 * the api, so these checks pin the request contract without credentials or
 * network.
 */
class ConnectionSpy {
    constructor() {
        this.nbRequests = [];
        this.response = {};
    }
    nbRequest(endpoint, requestType, message, paged) {
        this.nbRequests.push({ endpoint, requestType, message });
        return Promise.resolve(this.response);
    }
    apRequest() {
        throw new Error("not expected in this suite");
    }
    nbFormDataRequest() {
        throw new Error("not expected in this suite");
    }
    authenticateUser(params) {
        throw new Error("not expected in this suite");
    }
    updateSessionToken(sessionToken) {
        throw new Error("not expected in this suite");
    }
    subscribe() {
        throw new Error("not expected in this suite");
    }
    unsubscribe() {
        throw new Error("not expected in this suite");
    }
    connect() {
        return Promise.resolve();
    }
    close() {
        return Promise.resolve();
    }
}
describe("verification status v2", () => {
    let connection;
    let service;
    beforeEach(() => {
        connection = new ConnectionSpy();
        service = new VerificationService(connection);
    });
    it("should use the v2 endpoint and GET", () => __awaiter(void 0, void 0, void 0, function* () {
        yield service.getVerificationStatusV2();
        assert.strictEqual(connection.nbRequests.length, 1);
        const [request] = connection.nbRequests;
        assert.strictEqual(request.endpoint, Endpoint.VERIFICATION_STATUS_V2);
        assert.strictEqual(request.endpoint, "v2/account/verification/status");
        assert.strictEqual(request.requestType, RequestType.GET);
    }));
    it("should send user_id when given", () => __awaiter(void 0, void 0, void 0, function* () {
        yield service.getVerificationStatusV2({ user_id: "an-uuid" });
        const [request] = connection.nbRequests;
        assert.deepStrictEqual(request.message, { user_id: "an-uuid" });
    }));
    it("should send an empty request by default", () => __awaiter(void 0, void 0, void 0, function* () {
        yield service.getVerificationStatusV2();
        const [request] = connection.nbRequests;
        assert.deepStrictEqual(request.message, {});
    }));
    it("should return the data with null fields", () => __awaiter(void 0, void 0, void 0, function* () {
        // v2 answers 200 with a null id when there is no pending process, unlike
        // v1 that answered 404, so the sdk must hand it back without failing.
        const data = {
            id: null,
            locked: false,
            next_level: null,
            last_previous_status: null,
            last_previous_reason: null,
            is_business: false,
            verification_tier: 4
        };
        connection.response = data;
        const response = yield service.getVerificationStatusV2();
        assert.deepStrictEqual(response, data);
    }));
    it("should return a rejected previous process with its reason", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            id: "an-uuid",
            locked: false,
            next_level: "trader",
            last_previous_status: "rejected",
            last_previous_reason: "DOCUMENT_EXPIRED",
            is_business: false,
            verification_tier: 1
        };
        connection.response = data;
        const response = yield service.getVerificationStatusV2();
        assert.strictEqual(response.last_previous_status, "rejected");
        assert.strictEqual(response.last_previous_reason, "DOCUMENT_EXPIRED");
        assert.strictEqual(response.next_level, "trader");
    }));
});
