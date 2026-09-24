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
describe("institutional verification", () => {
    let connection;
    let service;
    beforeEach(() => {
        connection = new ConnectionSpy();
        service = new VerificationService(connection);
    });
    it("should point to the consolidated institutional endpoint", () => {
        assert.strictEqual(Endpoint.VERIFICATION_INSTITUTIONAL, "account/verification/institutional");
    });
    it("should post to the institutional endpoint with an empty body by default", () => __awaiter(void 0, void 0, void 0, function* () {
        yield service.startInstitutionalVerification();
        assert.strictEqual(connection.nbRequests.length, 1);
        const [request] = connection.nbRequests;
        assert.strictEqual(request.endpoint, Endpoint.VERIFICATION_INSTITUTIONAL);
        assert.strictEqual(request.requestType, RequestType.POST);
        assert.deepStrictEqual(request.message, {});
    }));
    it("should send the request through untouched", () => __awaiter(void 0, void 0, void 0, function* () {
        // The api ignores `phone` and takes the one registered for the user, so
        // this only pins that the service does not rewrite the body it is given.
        yield service.startInstitutionalVerification({ phone: "+56911111111" });
        const [request] = connection.nbRequests;
        assert.deepStrictEqual(request.message, { phone: "+56911111111" });
    }));
    it("should return the sumsub link as the api sends it", () => __awaiter(void 0, void 0, void 0, function* () {
        connection.response = {
            link: "https://sumsub.com/websdk/a-link",
            user_id: "an-uuid"
        };
        const response = yield service.startInstitutionalVerification();
        assert.strictEqual(response.link, "https://sumsub.com/websdk/a-link");
        assert.strictEqual(response.user_id, "an-uuid");
    }));
    it("should hand back a null link without failing", () => __awaiter(void 0, void 0, void 0, function* () {
        // The server answers 200 with a null link when it issued the applicant
        // but could not resolve its url, so the sdk must not turn that into an
        // error of its own.
        connection.response = { link: null, user_id: "an-uuid" };
        const response = yield service.startInstitutionalVerification();
        assert.strictEqual(response.link, null);
        assert.strictEqual(response.user_id, "an-uuid");
    }));
    describe("deprecated endpoints", () => {
        /**
         * These paths were retired server side along with the Sumsub migration.
         * The methods are kept, marked as deprecated, for one release; the checks
         * below only document that they no longer share a path with the
         * consolidated endpoint.
         */
        const retiredEndpoints = [
            Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
            Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS,
            Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
            Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS,
            Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES,
            Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
            Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES
        ];
        it("should keep the retired paths apart from the consolidated one", () => {
            for (const endpoint of retiredEndpoints) {
                assert.notStrictEqual(endpoint, Endpoint.VERIFICATION_INSTITUTIONAL);
                assert.ok(endpoint.startsWith(Endpoint.VERIFICATION_INSTITUTIONAL + "/"), `${endpoint} should be a subpath of the institutional endpoint`);
            }
        });
    });
});
