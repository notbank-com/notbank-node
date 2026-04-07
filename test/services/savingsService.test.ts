import assert from "assert";
import "mocha";

import { YieldProductType } from "../../lib/models/enums";
import { NotbankClient } from "../../lib/services/notbankClient";

describe("savings service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
  client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae")

  describe("depositToYield", () => {
    it("should deposit to yield", async () => {
    
      const response = await client.getSavingsService().depositToYield({
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
      const response = await client.getSavingsService().withdrawFromYield({
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
