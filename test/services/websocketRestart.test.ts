import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient";
import { SubscriptionService } from "../../lib/services/subscriptionService";
import { TestHelper } from "./TestHelper";

describe("websocket restarter", () => {

  let client: NotbankClient;
  let subscriptionService: SubscriptionService;

  before(async () => {
    client = NotbankClient.Factory.createWebsocketClient({
      domain: "stgapi.notbank.exchange",
      peekMessageIn: message => { },
      peekMessageOut: message => { },
      websocketHooks: {
        onOpen: o => console.log("open"),
      },
      withReconnect: true
    });
    await client.connect();
    await client.authenticateUser(TestHelper.getCredentials());
    subscriptionService = client.getSubscriptionService();
  });

  after(async () => {
    await client.close();
  });

  describe("subscribeLevel1", () => {

    it("debería reconectarse después de desconexión", async function () {
      this.timeout(0);
      await subscriptionService.subscribeOrderStateEvents(
        {
          InstrumentId: 66,
          AccountId: 235
        },
        o => { console.log(o) }
      );
      await sleepSeconds(300_000)
    });
  })

  function sleepSeconds(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1_000));
  }
});