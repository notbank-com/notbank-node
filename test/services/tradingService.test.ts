import assert from "assert";
import "mocha";

import { OrderSide } from "../../lib/models/enums/orderSide";
import { OrderTypeInt } from "../../lib/models/enums/orderType";
import { TimeInForce } from "../../lib/models/enums/timeInForce";
import { NotbankClient } from "../../lib/services/notbankClient";
import { TestHelper } from "./TestHelper";

describe("http trading service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange")


  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await client.authenticateUser(TestHelper.getCredentials());
  });

  const tradingService = client.getTradingService();

  describe("sendOrder", () => {
    it("should send a valid order successfully", async () => {
      const mockOrderRequest = {
        InstrumentId: 1,
        AccountId: 99,
        TimeInForce: TimeInForce.GTC, // Usamos enum en lugar de string
        Side: OrderSide.Buy, // Usamos enum en lugar de número
        OrderType: OrderTypeInt.Limit, // Usamos enum en lugar de string
        Quantity: 10,
        LimitPrice: 80,
      };

      const response = await tradingService.sendOrder(mockOrderRequest);
      console.log(response)
      assert.ok(response.OrderId, "Response should include an OrderId");
      assert.strictEqual(
        response.Status,
        "SUCCESS",
        "Response status should be 'SUCCESS'",
      );
    });

    it("should throw an error for missing required parameters", async () => {
      try {
        const invalidOrderRequest = {
          Quantity: 10,
          Side: OrderSide.Buy, // Enum requerido
          TimeInForce: TimeInForce.GTC, // Enum requerido
          OrderType: OrderTypeInt.Market, // Enum requerido
        };

        // @ts-expect-error – Omitimos instrumentId y accountId
        await tradingService.sendOrder(invalidOrderRequest);
        assert.fail("The call should throw an error due to missing parameters");
      } catch (error: any) {
        assert.ok(error, "Error should be thrown");
        assert.match(
          error.message,
          /InstrumentId and AccountId are required/,
          "Error message should indicate missing fields",
        );
      }
    });
  });

  describe("getOrderBook", () => {
    it("should throw an error for missing required parameters", async () => {
      var orderbook = await tradingService.getOrderBook({ Market_Pair: "BTCUSDT", Depth: 5, Level: 2 })
      assert.ok(orderbook)
      assert.equal(orderbook.asks.length, 5)
      assert.equal(orderbook.bids.length, 5)
    });
  });

  describe("GetLevel1Summary", () => {
    it("should throw an error for missing required parameters", async () => {
      var response = await tradingService.getLevel1Summary()
      assert.ok(response)
      console.log(response)
    });
  });
});