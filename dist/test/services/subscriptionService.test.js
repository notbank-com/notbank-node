var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from "assert";
import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { WebsocketServiceFactory } from "../../lib/services/websocketServiceFactory.js";
import { TestHelper } from "./TestHelper.js";
describe("Subscription Service websocket", () => {
    const client = NotbankClient.Factory.createWebsocketClient();
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.connect();
        yield client.authenticateUser(TestHelper.getCredentials());
        subscriptionService = client.getSubscriptionService();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.close();
    }));
    const mockCallback = (data) => {
        console.log("Evento recibido:", data);
    };
    describe("subscribeLevel1", () => {
        it("debería suscribirse correctamente a Level1", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(70000);
                const request = {
                    InstrumentId: 1,
                    Symbol: "BTCUSD",
                };
                assert.doesNotThrow(() => subscriptionService.subscribeLevel1(request, mockCallback, mockCallback));
            });
        });
        it("debería lanzar un error si falta InstrumentId y Symbol", () => {
            const request = {};
            assert.rejects(() => subscriptionService.subscribeLevel1(request, mockCallback, mockCallback), Error);
        });
    });
    // Prueba para desuscribirse de Level1
    describe("unsubscribeLevel1", () => {
        it("debería desuscribirse correctamente de Level1", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                InstrumentId: 1,
                Symbol: "BTCUSD",
            };
            assert.doesNotThrow(() => __awaiter(void 0, void 0, void 0, function* () { return yield subscriptionService.unsubscribeLevel1(request); }), Error);
        }));
    });
    // Prueba para suscribirse a Level2
    describe("subscribeLevel2", () => {
        it("debería suscribirse correctamente a Level2", () => {
            const request = {
                InstrumentId: 1,
                Depth: 10,
            };
            assert.doesNotThrow(() => subscriptionService.subscribeLevel2(request, mockCallback, mockCallback));
        });
        it("debería lanzar un error si falta InstrumentId o Symbol", () => {
            const request = {
                Depth: 2
            };
            assert.rejects(() => subscriptionService.subscribeLevel2(request, mockCallback, mockCallback));
        });
    });
    // Prueba para suscribirse a Trades
    describe("subscribeTrades", () => {
        it("debería suscribirse correctamente a Trades", () => {
            const request = {
                InstrumentId: 1,
                IncludeLastCount: 10,
            };
            assert.doesNotThrow(() => subscriptionService.subscribeTrades(request, mockCallback));
        });
        it("debería lanzar un error si falta IncludeLastCount", () => {
            const request = {
                InstrumentId: 1,
                IncludeLastCount: -1, // Invalid
            };
            assert.rejects(() => subscriptionService.subscribeTrades(request, mockCallback), Error);
        });
    });
    // Prueba para desuscribirse de Trades
    describe("unsubscribeTrades", () => {
        it("debería desuscribirse correctamente de Trades", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                InstrumentId: 1,
            };
            assert.doesNotThrow(() => __awaiter(void 0, void 0, void 0, function* () { return yield subscriptionService.unsubscribeTrades(request); }), Error);
        }));
    });
    // Prueba para suscribirse a Eventos de Cuenta
    describe("subscribeAccountEvents", () => {
        it("debería suscribirse correctamente a Eventos de Cuenta", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 55,
            };
            assert.doesNotThrow(() => subscriptionService.subscribeAccountEvents(request, {
                accountInfoUpdateEventHandler: mockCallback,
            }));
        }));
        it("debería lanzar un error si falta AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: null,
            };
            yield assert.rejects(subscriptionService.subscribeAccountEvents(request, {
                withdrawTicketUpdateEventHandler: mockCallback,
            }));
        }));
    });
});
describe("subscriptionService - SubscribeAccountEvents", () => {
    const wsServiceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.connect();
        yield wsServiceFactory.authenticateUser(TestHelper.getCredentials());
        subscriptionService = wsServiceFactory.getSubscriptionService();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.close();
    }));
    const mockCallback = (data) => {
        console.log("Evento recibido:", data);
    };
    // Manejador de eventos simulado
    describe("subscribeAccountEvents", () => {
        it("debería suscribirse correctamente a eventos de cuenta", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = { AccountId: 1 };
            assert.doesNotThrow(() => subscriptionService.subscribeAccountEvents(request, {
                accountInfoUpdateEventHandler: mockCallback,
            }));
        }));
        it("debería lanzar un error si falta AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = { AccountId: null };
            yield assert.rejects(subscriptionService.subscribeAccountEvents(request, {}), Error);
        }));
        it("debería lanzar error en la suscripción", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 999,
            }; // Datos inválidos
            yield assert.rejects(subscriptionService.subscribeAccountEvents(request, {}), Error);
        }));
    });
});
describe("subscriptionService - UnsubscribeAccountEvents", () => {
    const wsServiceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.connect();
        yield wsServiceFactory.authenticateUser(TestHelper.getCredentials());
        subscriptionService = wsServiceFactory.getSubscriptionService();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.close();
    }));
    describe("unsubscribeAccountEvents", () => {
        it("debería desuscribirse correctamente de eventos de cuenta", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 1,
            };
            assert.doesNotThrow(() => __awaiter(void 0, void 0, void 0, function* () { return yield subscriptionService.unsubscribeAccountEvents(request); }), Error);
        }));
        it("debería lanzar un error si falta AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = { AccountId: null };
            yield assert.rejects(subscriptionService.unsubscribeAccountEvents(request), Error);
        }));
        it("debería manejar errores durante la desuscripción", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 999,
            }; // Datos inválidos
            yield assert.rejects(subscriptionService.unsubscribeAccountEvents(request), Error);
        }));
    });
});
describe("SubscriptionService - SubscribeOrderStateEvents", () => {
    const wsServiceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.connect();
        yield wsServiceFactory.authenticateUser(TestHelper.getCredentials());
        subscriptionService = wsServiceFactory.getSubscriptionService();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.close();
    }));
    // Manejador de eventos simulado
    const mockEventHandler = (data) => {
        console.log("Evento de estado de orden recibido:", data);
    };
    describe("subscribeOrderStateEvents", () => {
        it("debería suscribirse correctamente a eventos de estado de órdenes", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 1,
            };
            assert.doesNotThrow(() => subscriptionService.subscribeOrderStateEvents(request, mockEventHandler));
        }));
        it("debería suscribirse correctamente con filtro de InstrumentId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 1,
                InstrumentId: 1,
            };
            assert.doesNotThrow(() => subscriptionService.subscribeOrderStateEvents(request, mockEventHandler));
        }));
        it("debería lanzar un error si falta AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = { AccountId: null };
            yield assert.rejects(subscriptionService.subscribeOrderStateEvents(request, mockEventHandler), Error);
        }));
        it("debería manejar errores durante la suscripción", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 999,
            }; // Datos inválidos
            yield assert.rejects(subscriptionService.subscribeOrderStateEvents(request, mockEventHandler), Error);
        }));
    });
});
describe("subscriptionService - UnsubscribeOrderStateEvents", () => {
    const wsServiceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.connect();
        yield wsServiceFactory.authenticateUser(TestHelper.getCredentials());
        subscriptionService = wsServiceFactory.getSubscriptionService();
    }));
    describe("unsubscribeOrderStateEvents", () => {
        it("debería desuscribirse correctamente de eventos de estado de órdenes", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 1,
            };
            assert.doesNotThrow(() => __awaiter(void 0, void 0, void 0, function* () { return yield subscriptionService.unsubscribeOrderStateEvents(request); }), Error);
        }));
        it("debería desuscribirse correctamente con filtro de InstrumentId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 1,
                InstrumentId: 1,
            };
            assert.doesNotThrow(() => __awaiter(void 0, void 0, void 0, function* () { return yield subscriptionService.unsubscribeOrderStateEvents(request); }), Error);
        }));
        it("debería lanzar un error si falta AccountId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = { AccountId: null };
            yield assert.rejects(subscriptionService.unsubscribeOrderStateEvents(request), Error);
        }));
        it("debería manejar errores durante la desuscripción", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {
                AccountId: 999,
            }; // Datos inválidos
            yield assert.rejects(subscriptionService.unsubscribeOrderStateEvents(request), Error);
        }));
    });
});
describe("SubscribeTicker", () => {
    const wsServiceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.connect();
        yield wsServiceFactory.authenticateUser(TestHelper.getCredentials());
        subscriptionService = wsServiceFactory.getSubscriptionService();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.close();
    }));
    it("debería suscribirse correctamente a SubscribeTicker 1", function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(70000);
            const request = {
                InstrumentId: 1,
                Interval: 60,
                IncludeLastCount: 2,
            };
            let snapshotResolved = false;
            yield new Promise((resolve, reject) => {
                subscriptionService.subscribeTicker(request, (snapshot) => {
                    console.debug("Snapshot", snapshot);
                    snapshotResolved = true;
                }, (update) => {
                    console.debug("Update", update);
                    if (snapshotResolved)
                        resolve();
                });
                // Safety timeout in case no data arrives
                setTimeout(() => reject(new Error("Timeout: no data received")), 60000);
            });
        });
    });
});
describe("subscriptionService - UnsubscribeTicker", () => {
    const wsServiceFactory = new WebsocketServiceFactory({
        domain: "stgapi.notbank.exchange",
    });
    let subscriptionService;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield wsServiceFactory.connect();
        yield wsServiceFactory.authenticateUser(TestHelper.getCredentials());
        subscriptionService = wsServiceFactory.getSubscriptionService();
    }));
    describe("unsubscribeTicker", () => {
        it("debería desuscribirse correctamente de un ticker", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = { InstrumentId: 1 };
            assert.doesNotThrow(() => __awaiter(void 0, void 0, void 0, function* () { return yield subscriptionService.unsubscribeTicker(request); }), Error);
        }));
        it("debería lanzar un error si falta InstrumentId", () => __awaiter(void 0, void 0, void 0, function* () {
            const request = {};
            // @ts-expect-error
            yield assert.rejects(subscriptionService.unsubscribeTicker(request), Error);
        }));
    });
});
