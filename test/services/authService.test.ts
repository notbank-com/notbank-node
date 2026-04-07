import assert from "assert";
import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";

describe("auth service", () => {
  const client = NotbankClient.Factory.createWebsocketClient({ domain: "stgapi.notbank.exchange" });

  describe("auth user", () => {
    it("should authenticate the user", async () => {
      await client.connect()
      const response = await client.getAuthService().webAuthenticateUser({
        JWTToken: "abc123"
      })
      console.log("authentication response:", response);
      assert.ok(response.Authenticated)
      await client.close()
    })
  });
});
