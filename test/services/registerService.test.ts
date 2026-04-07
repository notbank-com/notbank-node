import assert from "assert";
import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";

describe("account service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");

  describe("registerUser", () => {
    it("should register a new user", async () => {
      const response = await client.getRegisterService().registerUser({
        first_name: "Millaray",
        last_name: "Villanueva",
        email: "ismael+15@dysopsis.com"
      });

      console.log("user registration:", response);
      assert.ok(response, "Response should not be null");
    });
  });

});
