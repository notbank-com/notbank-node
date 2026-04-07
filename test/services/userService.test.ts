import assert from "assert";
import "mocha";

import { GetUserAccountsRequest } from "../../lib/models/request/getUserAccounts";
import { GetUserDevicesRequest } from "../../lib/models/request/getUserDevices";
import { GetUserInfoRequest } from "../../lib/models/request/getUserInfo";
import { GetUserPermissionsRequest } from "../../lib/models/request/getUserPermissions";
import { HttpServiceFactory } from "../../lib/services/httpServiceFactory";
import { NotbankClient } from "../../lib/services/notbankClient";
import { WebsocketServiceFactory } from "../../lib/services/websocketServiceFactory";
import { TestHelper } from "./TestHelper";

describe("http user service 1", () => {
  const client = NotbankClient.Factory.createRestClient();

  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await client.authenticateUser(TestHelper.getCredentials());
  });

  it("should complete authentication setup", () => {
    assert.notEqual(client, null);
    assert.ok(client instanceof HttpServiceFactory);
  });

});

describe("http user service 2", () => {
  const serviceFactory = new HttpServiceFactory("stgapi.notbank.exchange");

  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque
    await serviceFactory.authenticateUser(TestHelper.getCredentials());
  });

  const userService = serviceFactory.newUserService();

  describe("getUserAccounts", () => {
    it("should obtain the user accounts for a valid UserId", async function () {
      const params: GetUserAccountsRequest = {
        UserId: 9,
      };

      const response = await userService.getUserAccounts(params);

      console.log("Response for GetUserAccounts:", response);

      assert.equal(
        Array.isArray(response),
        true,
        "The response should be an array",
      );

      if (response.length > 0) {
        assert.strictEqual(
          typeof response[0],
          "number",
          "Account ID should be a number",
        );
      }
    });

    it("should obtain the user accounts for a valid OMSId only (now as const on getUserAccounts", async function () {
      const params: GetUserAccountsRequest = {
      };

      const response = await userService.getUserAccounts(params);

      console.log("Response for GetUserAccounts:", response);

      assert.equal(
        Array.isArray(response),
        true,
        "The response should be an array",
      );

      if (response.length > 0) {
        assert.strictEqual(
          typeof response[0],
          "number",
          "Account ID should be a number",
        );
      }
    });

    it("should handle invalid UserId values", async function () {
      const invalidParams: GetUserAccountsRequest[] = [
        { UserId: "invalid" as any }, // Invalid UserId
      ];

      for (const params of invalidParams) {
        try {
          await userService.getUserAccounts(params);
          assert.fail("Should throw an error");
        } catch (error: any) {
          console.log("Caught error (expected):", error.message);
          assert.match(
            error.message,
            /must be a number/,
            "Error message should mention the invalid type",
          );
        }
      }
    });
  });

  describe("getUserDevices", () => {
    it("should obtain the user devices for a valid UserId", async function () {
      const params: GetUserDevicesRequest = {
        UserId: 6,
      };

      const response = await userService.getUserDevices(params);

      console.log("Response for GetUserDevices:", response);

      assert.equal(
        Array.isArray(response),
        true,
        "The response should be an array",
      );

      if (response.length > 0) {
        const device = response[0];
        assert.strictEqual(
          typeof device.HashCode,
          "number",
          "HashCode should be a number",
        );
        assert.strictEqual(
          typeof device.DeviceName,
          "string",
          "DeviceName should be a string",
        );
        assert.strictEqual(
          typeof device.IpAddress,
          "string",
          "IpAddress should be a string",
        );
        assert.strictEqual(
          typeof device.UserId,
          "number",
          "UserId should be a number",
        );
        assert.strictEqual(
          typeof device.IsTrusted,
          "boolean",
          "IsTrusted should be a boolean",
        );
        assert.strictEqual(
          typeof device.ExpirationTime,
          "number",
          "ExpirationTime should be a number",
        );
      }
    });

    it("should handle missing parameters", async function () {
      const response = await userService.getUserDevices({});

      console.log("Response for GetUserDevices without params:", response);

      assert.equal(
        Array.isArray(response),
        true,
        "The response should be an array",
      );

      if (response.length > 0) {
        const device = response[0];
        assert.strictEqual(
          typeof device.HashCode,
          "number",
          "HashCode should be a number",
        );
        assert.strictEqual(
          typeof device.DeviceName,
          "string",
          "DeviceName should be a string",
        );
        assert.strictEqual(
          typeof device.IpAddress,
          "string",
          "IpAddress should be a string",
        );
        assert.strictEqual(
          typeof device.UserId,
          "number",
          "UserId should be a number",
        );
        assert.strictEqual(
          typeof device.IsTrusted,
          "boolean",
          "IsTrusted should be a boolean",
        );
        assert.strictEqual(
          typeof device.ExpirationTime,
          "number",
          "ExpirationTime should be a number",
        );
      }
    });

    it("should handle an invalid UserId value", async function () {
      const params: GetUserDevicesRequest = {
        UserId: "invalid" as any,
      };

      try {
        await userService.getUserDevices(params);
        assert.fail("Should throw an error");
      } catch (error: any) {
        assert.match(
          error.message,
          /UserId must be a number/,
          "Error message should mention the invalid type",
        );
      }
    });
  });

  describe("getUserInfo", () => {
    it("should return user info for a valid UserId", async function () {
      const params: GetUserInfoRequest = { UserId: 64 };
      const response = await userService.getUserInfo(params);
      console.log("Response for getUserInfo:", response);

      assert.strictEqual(typeof response.UserId, "number", "UserId should be a number");
      assert.strictEqual(typeof response.Username, "string", "Username should be a string");
      assert.strictEqual(typeof response.Email, "string", "Email should be a string");
      assert.strictEqual(typeof response.EmailVerified, "boolean", "EmailVerified should be a boolean");
      assert.strictEqual(typeof response.AccountId, "number", "AccountId should be a number");
    });

    it("should allow call without UserId (use default from session)", async function () {
      const response = await userService.getUserInfo({});
      console.log("Response for getUserInfo without UserId:", response);

      assert.strictEqual(typeof response.UserId, "number", "UserId should be a number");
    });

    it("should throw error if UserId is not a number", async function () {
      const params: GetUserInfoRequest = { UserId: "invalid" as any };

      try {
        await userService.getUserInfo(params);
        assert.fail("Should throw an error");
      } catch (error: any) {
        assert.match(error.message, /UserId must be a number/, "Expected validation error");
      }
    });
  });

  describe("getUserPermissions", () => {
    it("should return permissions for a valid UserId", async function () {
      const params: GetUserPermissionsRequest = { UserId: 64 };

      const response = await userService.getUserPermissions(params);
      console.log("Response for getUserPermissions:", response);

      assert.ok(Array.isArray(response), "Permissions response should be an array");
      if (response.length > 0) {
        assert.strictEqual(typeof response[0], "string", "Permission should be a string");
      }
    });

    it("should throw error when UserId is missing", async function () {
      try {
        await userService.getUserPermissions({} as any);
        assert.fail("Should throw an error");
      } catch (error: any) {
        assert.match(error.message, /UserId is required and must be a number/, "Expected validation error");
      }
    });

    it("should throw error when UserId is not a number", async function () {
      const params: GetUserPermissionsRequest = { UserId: "invalid" as any };

      try {
        await userService.getUserPermissions(params);
        assert.fail("Should throw an error");
      } catch (error: any) {
        assert.match(error.message, /UserId is required and must be a number/, "Expected validation error");
      }
    });
  });
});

describe("websocket user service", () => {
  const serviceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  before(async () => {
    await serviceFactory.connect();
    await serviceFactory.authenticateUser(TestHelper.getCredentials());
  });
  after(() => {
    serviceFactory.close();
  });
  const authService = serviceFactory.newAuthService();

  describe("log out", () => {
    it("logs out successfully", async function () {
      const response = await authService.logOut();
      assert.ok(response, "Response should not be null or undefined");
    });
  });
});
