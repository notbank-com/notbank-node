import assert from "assert";
import "mocha";

import { YieldProductType } from "../../lib/models/enums";
import { NotbankClient } from "../../lib/services/notbankClient";
import { TestHelper } from "./TestHelper";

describe("yield service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");

  before(async () => {
    await client.authenticateUser(TestHelper.getCredentials());
  });

  client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae")
  describe("getYieldProducts", () => {
    it("should get yield products", async () => {

      const response = await client.getYieldService().getYieldProducts()
      console.log("transaction id:", response);
      assert.ok(response, "Response should not be null");
    });
  });
  describe("depositToYield", () => {
    it("should deposit to yield", async () => {

      const response = await client.getYieldService().depositToYield({
        account_id: 235,
        amount: 10,
        product_id: 5,
        currency: "USDT",
        type: YieldProductType.VARIABLE
      })
      console.log("transaction id:", response);
      assert.ok(response, "Response should not be null");
    });
  });

  describe("withdrawFromYield", () => {
    it("should withdraw from yield", async () => {
      const response = await client.getYieldService().withdrawFromYield({
        account_id: 235,
        amount: 10,
        product_id: 5,
        currency: "USDT",
        type: YieldProductType.VARIABLE
      })
      console.log("transaction id:", response);
      assert.ok(response, "Response should not be null");
    });
  });
});
