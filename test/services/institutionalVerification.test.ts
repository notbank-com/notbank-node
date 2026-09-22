import assert from "assert";
import "mocha";

import { Endpoint } from "../../lib/constants/endpoints";
import { RequestType, ServiceConnection } from "../../lib/core/serviceClient";
import { AuthenticateUserRequest } from "../../lib/models";
import { VerificationService } from "../../lib/services/verificationService";

type RecordedRequest = {
  endpoint: string;
  requestType: RequestType;
  message?: any;
};

/**
 * Connection double. It records what the service asks for instead of hitting
 * the api, so these checks pin the request contract without credentials or
 * network.
 */
class ConnectionSpy implements ServiceConnection {
  readonly nbRequests: RecordedRequest[] = [];
  response: any = {};

  nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    paged?: boolean
  ): Promise<T2> {
    this.nbRequests.push({ endpoint, requestType, message });
    return Promise.resolve(this.response as T2);
  }

  apRequest<T1, T2>(): Promise<T2> {
    throw new Error("not expected in this suite");
  }

  nbFormDataRequest<T1, T2>(): Promise<T2> {
    throw new Error("not expected in this suite");
  }

  authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    throw new Error("not expected in this suite");
  }

  updateSessionToken(sessionToken: string): any {
    throw new Error("not expected in this suite");
  }

  subscribe<T>(): Promise<void> {
    throw new Error("not expected in this suite");
  }

  unsubscribe<T>(): Promise<void> {
    throw new Error("not expected in this suite");
  }

  connect(): Promise<void> {
    return Promise.resolve();
  }

  close(): Promise<void> {
    return Promise.resolve();
  }
}

describe("institutional verification", () => {
  let connection: ConnectionSpy;
  let service: VerificationService;

  beforeEach(() => {
    connection = new ConnectionSpy();
    service = new VerificationService(connection);
  });

  it("should point to the consolidated institutional endpoint", () => {
    assert.strictEqual(
      Endpoint.VERIFICATION_INSTITUTIONAL,
      "account/verification/institutional"
    );
  });

  it("should post to the institutional endpoint with an empty body by default", async () => {
    await service.startInstitutionalVerification();

    assert.strictEqual(connection.nbRequests.length, 1);
    const [request] = connection.nbRequests;
    assert.strictEqual(request.endpoint, Endpoint.VERIFICATION_INSTITUTIONAL);
    assert.strictEqual(request.requestType, RequestType.POST);
    assert.deepStrictEqual(request.message, {});
  });

  it("should send the request through untouched", async () => {
    // The api ignores `phone` and takes the one registered for the user, so
    // this only pins that the service does not rewrite the body it is given.
    await service.startInstitutionalVerification({ phone: "+56911111111" });

    const [request] = connection.nbRequests;
    assert.deepStrictEqual(request.message, { phone: "+56911111111" });
  });

  it("should return the sumsub link as the api sends it", async () => {
    connection.response = {
      link: "https://sumsub.com/websdk/a-link",
      user_id: "an-uuid"
    };

    const response = await service.startInstitutionalVerification();

    assert.strictEqual(response.link, "https://sumsub.com/websdk/a-link");
    assert.strictEqual(response.user_id, "an-uuid");
  });

  it("should hand back a null link without failing", async () => {
    // The server answers 200 with a null link when it issued the applicant
    // but could not resolve its url, so the sdk must not turn that into an
    // error of its own.
    connection.response = { link: null, user_id: "an-uuid" };

    const response = await service.startInstitutionalVerification();

    assert.strictEqual(response.link, null);
    assert.strictEqual(response.user_id, "an-uuid");
  });

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
        assert.ok(
          endpoint.startsWith(Endpoint.VERIFICATION_INSTITUTIONAL + "/"),
          `${endpoint} should be a subpath of the institutional endpoint`
        );
      }
    });
  });
});
