import assert from "assert";
import "mocha";

import { Endpoint } from "../../lib/constants/endpoints";
import { RequestType, ServiceConnection } from "../../lib/core/serviceClient";
import { AuthenticateUserRequest, VerificationStatusV2 } from "../../lib/models";
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

describe("verification status v2", () => {
  let connection: ConnectionSpy;
  let service: VerificationService;

  beforeEach(() => {
    connection = new ConnectionSpy();
    service = new VerificationService(connection);
  });

  it("should use the v2 endpoint and GET", async () => {
    await service.getVerificationStatusV2();

    assert.strictEqual(connection.nbRequests.length, 1);
    const [request] = connection.nbRequests;
    assert.strictEqual(request.endpoint, Endpoint.VERIFICATION_STATUS_V2);
    assert.strictEqual(request.endpoint, "v2/account/verification/status");
    assert.strictEqual(request.requestType, RequestType.GET);
  });

  it("should send user_id when given", async () => {
    await service.getVerificationStatusV2({ user_id: "an-uuid" });

    const [request] = connection.nbRequests;
    assert.deepStrictEqual(request.message, { user_id: "an-uuid" });
  });

  it("should send an empty request by default", async () => {
    await service.getVerificationStatusV2();

    const [request] = connection.nbRequests;
    assert.deepStrictEqual(request.message, {});
  });

  it("should return the data with null fields", async () => {
    // v2 answers 200 with a null id when there is no pending process, unlike
    // v1 that answered 404, so the sdk must hand it back without failing.
    const data: VerificationStatusV2 = {
      id: null,
      locked: false,
      next_level: null,
      last_previous_status: null,
      last_previous_reason: null,
      is_business: false,
      verification_tier: 4
    };
    connection.response = data;

    const response = await service.getVerificationStatusV2();

    assert.deepStrictEqual(response, data);
  });

  it("should return a rejected previous process with its reason", async () => {
    const data: VerificationStatusV2 = {
      id: "an-uuid",
      locked: false,
      next_level: "trader",
      last_previous_status: "rejected",
      last_previous_reason: "DOCUMENT_EXPIRED",
      is_business: false,
      verification_tier: 1
    };
    connection.response = data;

    const response = await service.getVerificationStatusV2();

    assert.strictEqual(response.last_previous_status, "rejected");
    assert.strictEqual(response.last_previous_reason, "DOCUMENT_EXPIRED");
    assert.strictEqual(response.next_level, "trader");
  });
});
