import assert from "assert";
import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";

describe("subAccount service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
  client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae");

  describe("createSubAccount", () => {
    it("should create a subaccount", async () => {
      await client.getSubAccountService().createSubAccount({
        alias: "test_sub",
      });
    });
  });

  describe("getSubAccounts", () => {
    it("should get subaccounts", async () => {
      const response = await client.getSubAccountService().getSubAccounts({
        page: 1,
        page_size: 10,
      });
      console.log("subaccounts:", response);
      assert.ok(response, "Response should not be null");
      assert.ok(Array.isArray(response.data), "Data should be an array");
      assert.ok(typeof response.total === "number", "Total should be a number");
    });
  });
});
