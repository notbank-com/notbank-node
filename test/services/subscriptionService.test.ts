import assert from "assert";
import "mocha";
import { SubscribeAccountEventsRequest } from "../../lib/models/request/subscribeAccountEvents";
import { SubscribeLevel1Request } from "../../lib/models/request/subscribeLevel1";
import { SubscribeLevel2Request } from "../../lib/models/request/subscribeLevel2";
import { SubscribeOrderStateEventsRequest } from "../../lib/models/request/subscribeOrderStateEvents";
import { SubscribeTickerRequest } from "../../lib/models/request/subscribeTicker";
import { SubscribeTradesRequest } from "../../lib/models/request/subscribeTrades";
import { UnsubscribeAccountEventsRequest } from "../../lib/models/request/unsubscribeAccountEvents";
import { UnsubscribeLevel1Request } from "../../lib/models/request/unSubscribeLevel1";
import { UnsubscribeOrderStateEventsRequest } from "../../lib/models/request/unsubscribeOrderStateEvents";
import { UnsubscribeTickerRequest } from "../../lib/models/request/unsubscribeTicker";
import { UnsubscribeTradesRequest } from "../../lib/models/request/unsubscribeTrades";
import { NotbankClient } from "../../lib/services/notbankClient";
import { SubscriptionService } from "../../lib/services/subscriptionService";
import { WebsocketServiceFactory } from "../../lib/services/websocketServiceFactory";
import { TestHelper } from "./TestHelper";

describe("Subscription Service websocket", () => {
  const client = NotbankClient.Factory.createWebsocketClient();
  let subscriptionService: SubscriptionService;

  before(async () => {
    await client.connect();
    await client.authenticateUser(TestHelper.getCredentials());
    subscriptionService = client.getSubscriptionService();
  });

  after(async () => {
    await client.close();
  });


  const mockCallback = (data: any) => {
    console.log("Evento recibido:", data);
  };

  describe("subscribeLevel1", () => {
    it("debería suscribirse correctamente a Level1", async function() {
      this.timeout(70_000);
      const request: SubscribeLevel1Request = {
        InstrumentId: 1,
        Symbol: "BTCUSD",
      };
      assert.doesNotThrow(() =>
        subscriptionService.subscribeLevel1(request, mockCallback, mockCallback),
      );
    });

    it("debería lanzar un error si falta InstrumentId y Symbol", () => {
      const request: SubscribeLevel1Request = {
      };

      assert.rejects(
        () =>
          subscriptionService.subscribeLevel1(
            request,
            mockCallback,
            mockCallback,
          ),
        Error,
      );
    });
  });

  // Prueba para desuscribirse de Level1
  describe("unsubscribeLevel1", () => {
    it("debería desuscribirse correctamente de Level1", async () => {
      const request: UnsubscribeLevel1Request = {
        InstrumentId: 1,
        Symbol: "BTCUSD",
      };
      assert.doesNotThrow(
        async () => await subscriptionService.unsubscribeLevel1(request),
        Error,
      );
    });
  });

  // Prueba para suscribirse a Level2
  describe("subscribeLevel2", () => {
    it("debería suscribirse correctamente a Level2", () => {
      const request: SubscribeLevel2Request = {
        InstrumentId: 1,
        Depth: 10,
      };
      assert.doesNotThrow(() =>
        subscriptionService.subscribeLevel2(request, mockCallback, mockCallback),
      );
    });

    it("debería lanzar un error si falta InstrumentId o Symbol", () => {
      const request: SubscribeLevel2Request = {
        Depth: 2
      };
      assert.rejects(() =>
        subscriptionService.subscribeLevel2(request, mockCallback, mockCallback),
      );
    });
  });

  // Prueba para suscribirse a Trades
  describe("subscribeTrades", () => {
    it("debería suscribirse correctamente a Trades", () => {
      const request: SubscribeTradesRequest = {
        InstrumentId: 1,
        IncludeLastCount: 10,
      };
      assert.doesNotThrow(() =>
        subscriptionService.subscribeTrades(request, mockCallback),
      );
    });

    it("debería lanzar un error si falta IncludeLastCount", () => {
      const request: SubscribeTradesRequest = {
        InstrumentId: 1,
        IncludeLastCount: -1, // Invalid
      };
      assert.rejects(
        () => subscriptionService.subscribeTrades(request, mockCallback),
        Error,
      );
    });
  });

  // Prueba para desuscribirse de Trades
  describe("unsubscribeTrades", () => {
    it("debería desuscribirse correctamente de Trades", async () => {
      const request: UnsubscribeTradesRequest = {
        InstrumentId: 1,
      };
      assert.doesNotThrow(
        async () => await subscriptionService.unsubscribeTrades(request),
        Error,
      );
    });
  });

  // Prueba para suscribirse a Eventos de Cuenta
  describe("subscribeAccountEvents", () => {
    it("debería suscribirse correctamente a Eventos de Cuenta", async () => {
      const request: SubscribeAccountEventsRequest = {
        AccountId: 55,
      };
      assert.doesNotThrow(() =>
        subscriptionService.subscribeAccountEvents(request, {
          accountInfoUpdateEventHandler: mockCallback,
        }),
      );
    });

    it("debería lanzar un error si falta AccountId", async () => {
      const request: SubscribeAccountEventsRequest = {
        AccountId: null as any,
      };
      await assert.rejects(
        subscriptionService.subscribeAccountEvents(request, {
          withdrawTicketUpdateEventHandler: mockCallback,
        }),
      );
    });
  });
});

describe("subscriptionService - SubscribeAccountEvents", () => {
  const wsServiceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  let subscriptionService: SubscriptionService;

  before(async () => {
    await wsServiceFactory.connect();
    await wsServiceFactory.authenticateUser(TestHelper.getCredentials());
    subscriptionService = wsServiceFactory.getSubscriptionService();
  });

  after(async () => {
    await wsServiceFactory.close();
  });

  const mockCallback = (data: any) => {
    console.log("Evento recibido:", data);
  };

  // Manejador de eventos simulado
  describe("subscribeAccountEvents", () => {
    it("debería suscribirse correctamente a eventos de cuenta", async () => {
      const request: SubscribeAccountEventsRequest = { AccountId: 1 };
      assert.doesNotThrow(() =>
        subscriptionService.subscribeAccountEvents(request, {
          accountInfoUpdateEventHandler: mockCallback,
        }),
      );
    });

    it("debería lanzar un error si falta AccountId", async () => {
      const request = { AccountId: null } as any;
      await assert.rejects(
        subscriptionService.subscribeAccountEvents(request, {}),
        Error,
      );
    });

    it("debería lanzar error en la suscripción", async () => {
      const request: SubscribeAccountEventsRequest = {
        AccountId: 999,
      }; // Datos inválidos
      await assert.rejects(
        subscriptionService.subscribeAccountEvents(request, {}),
        Error,
      );
    });
  });
});

describe("subscriptionService - UnsubscribeAccountEvents", () => {
  const wsServiceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  let subscriptionService: SubscriptionService;

  before(async () => {
    await wsServiceFactory.connect();
    await wsServiceFactory.authenticateUser(TestHelper.getCredentials());
    subscriptionService = wsServiceFactory.getSubscriptionService();
  });

  after(async () => {
    await wsServiceFactory.close();
  });

  describe("unsubscribeAccountEvents", () => {
    it("debería desuscribirse correctamente de eventos de cuenta", async () => {
      const request: UnsubscribeAccountEventsRequest = {
        AccountId: 1,
      };
      assert.doesNotThrow(
        async () => await subscriptionService.unsubscribeAccountEvents(request),
        Error,
      );
    });

    it("debería lanzar un error si falta AccountId", async () => {
      const request = { AccountId: null } as any;
      await assert.rejects(
        subscriptionService.unsubscribeAccountEvents(request),
        Error,
      );
    });

    it("debería manejar errores durante la desuscripción", async () => {
      const request: UnsubscribeAccountEventsRequest = {
        AccountId: 999,
      }; // Datos inválidos
      await assert.rejects(
        subscriptionService.unsubscribeAccountEvents(request),
        Error,
      );
    });
  });
});

describe("SubscriptionService - SubscribeOrderStateEvents", () => {
  const wsServiceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  let subscriptionService: SubscriptionService;

  before(async () => {
    await wsServiceFactory.connect();
    await wsServiceFactory.authenticateUser(TestHelper.getCredentials());
    subscriptionService = wsServiceFactory.getSubscriptionService();
  });

  after(async () => {
    await wsServiceFactory.close();
  });

  // Manejador de eventos simulado
  const mockEventHandler = (data: any) => {
    console.log("Evento de estado de orden recibido:", data);
  };

  describe("subscribeOrderStateEvents", () => {
    it("debería suscribirse correctamente a eventos de estado de órdenes", async () => {
      const request: SubscribeOrderStateEventsRequest = {
        AccountId: 1,
      };

      assert.doesNotThrow(() =>
        subscriptionService.subscribeOrderStateEvents(
          request,
          mockEventHandler,
        ),
      );
    });

    it("debería suscribirse correctamente con filtro de InstrumentId", async () => {
      const request: SubscribeOrderStateEventsRequest = {
        AccountId: 1,
        InstrumentId: 1,
      };

      assert.doesNotThrow(() =>
        subscriptionService.subscribeOrderStateEvents(
          request,
          mockEventHandler,
        ),
      );
    });

    it("debería lanzar un error si falta AccountId", async () => {
      const request = { AccountId: null } as any;
      await assert.rejects(
        subscriptionService.subscribeOrderStateEvents(request, mockEventHandler),
        Error,
      );
    });

    it("debería manejar errores durante la suscripción", async () => {
      const request: SubscribeOrderStateEventsRequest = {
        AccountId: 999,
      }; // Datos inválidos
      await assert.rejects(
        subscriptionService.subscribeOrderStateEvents(request, mockEventHandler),
        Error,
      );
    });
  });
});

describe("subscriptionService - UnsubscribeOrderStateEvents", () => {
  const wsServiceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  let subscriptionService: SubscriptionService;

  before(async () => {
    await wsServiceFactory.connect();
    await wsServiceFactory.authenticateUser(TestHelper.getCredentials());
    subscriptionService = wsServiceFactory.getSubscriptionService();
  });

  describe("unsubscribeOrderStateEvents", () => {
    it("debería desuscribirse correctamente de eventos de estado de órdenes", async () => {
      const request: UnsubscribeOrderStateEventsRequest = {
        AccountId: 1,
      };
      assert.doesNotThrow(
        async () => await subscriptionService.unsubscribeOrderStateEvents(request),
        Error,
      );
    });

    it("debería desuscribirse correctamente con filtro de InstrumentId", async () => {
      const request: UnsubscribeOrderStateEventsRequest = {
        AccountId: 1,
        InstrumentId: 1,
      };
      assert.doesNotThrow(
        async () => await subscriptionService.unsubscribeOrderStateEvents(request),
        Error,
      );
    });

    it("debería lanzar un error si falta AccountId", async () => {
      const request = { AccountId: null } as any;
      await assert.rejects(
        subscriptionService.unsubscribeOrderStateEvents(request),
        Error,
      );
    });

    it("debería manejar errores durante la desuscripción", async () => {
      const request: UnsubscribeOrderStateEventsRequest = {
        AccountId: 999,
      }; // Datos inválidos
      await assert.rejects(
        subscriptionService.unsubscribeOrderStateEvents(request),
        Error,
      );
    });
  });
});

describe("SubscribeTicker", () => {
  const wsServiceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  let subscriptionService: SubscriptionService;

  before(async () => {
    await wsServiceFactory.connect();
    await wsServiceFactory.authenticateUser(TestHelper.getCredentials());
    subscriptionService = wsServiceFactory.getSubscriptionService();
  });

  after(async () => {
    await wsServiceFactory.close();
  });

  it("debería suscribirse correctamente a SubscribeTicker 1", async function () {
    this.timeout(70_000);
    const request: SubscribeTickerRequest = {
      InstrumentId: 1,
      Interval: 60,
      IncludeLastCount: 2,
    };

    let snapshotResolved = false;

    await new Promise<void>((resolve, reject) => {
      subscriptionService.subscribeTicker(
        request,
        (snapshot) => {
          console.debug("Snapshot", snapshot);
          snapshotResolved = true;
        },
        (update) => {
          console.debug("Update", update);
          if (snapshotResolved) resolve();
        },
      );

      // Safety timeout in case no data arrives
      setTimeout(() => reject(new Error("Timeout: no data received")), 60000);
    });
  });
});

describe("subscriptionService - UnsubscribeTicker", () => {
  const wsServiceFactory = new WebsocketServiceFactory({
    domain: "stgapi.notbank.exchange",
  });
  let subscriptionService: SubscriptionService;

  before(async () => {
    await wsServiceFactory.connect();
    await wsServiceFactory.authenticateUser(TestHelper.getCredentials());
    subscriptionService = wsServiceFactory.getSubscriptionService();
  });

  describe("unsubscribeTicker", () => {
    it("debería desuscribirse correctamente de un ticker", async () => {
      const request: UnsubscribeTickerRequest = { InstrumentId: 1 };
      assert.doesNotThrow(
        async () => await subscriptionService.unsubscribeTicker(request),
        Error,
      );
    });

    it("debería lanzar un error si falta InstrumentId", async () => {
      const request = {};
      // @ts-expect-error
      await assert.rejects(subscriptionService.unsubscribeTicker(request), Error);
    });
  });
});
