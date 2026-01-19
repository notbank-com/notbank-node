import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";
import { Credentials, TestHelper } from "./TestHelper";

describe("fee service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
  let credentials: Credentials = undefined

  before(async () => {
    credentials = TestHelper.getCredentials()
    await client.authenticateUser(credentials);
  });

  describe("getDepositFee", () => {
    it("success response", async () => {
      const response = await client.getFeeService().getDepositFee({
        AccountId: credentials.AccountId,
        Amount: 100,
        ProductId: 5
      })
      console.log("response:", response);
    })
  });

  describe("getWithdrawFee", () => {
    it.only("success response", async () => {
      const response = await client.getFeeService().getWithdrawFee({
        AccountId: 12,
        Amount: 200,
        ProductId: 51
      })
      console.log("response:", response);
    })
  });
});
