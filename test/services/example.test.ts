import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";
import { OrderSide, OrderTypeInt, TimeInForce } from "../../lib/models";
import { TestHelper } from "./TestHelper";

describe("wallet service", () => {
  describe("getBanks", () => {
    it("should return a list of banks", async () => {
      const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
      await client.authenticateUser(TestHelper.getCredentials());
      var accountId = 235;

      // get USDT user balance (also known as position)
      var positions = await client.getAccountService().getAccountPositions({ AccountId: accountId });
      var productSymbol = "USDT";
      var usdtPosition = positions
        .filter(position => position.ProductSymbol === productSymbol)
        .pop()
      if (!usdtPosition) {
        throw new Error("no usdt position")
      }

      // define quantityToSpend (between all usdt_balance and half usdt_balance)
      var myUsdtBalance = usdtPosition.Amount;
      var randomFraction = Math.random()
      var halfMyBalance = myUsdtBalance / 2
      var atLeastHalfMyBalance = myUsdtBalance - (randomFraction * halfMyBalance);
      var quantityToSpend = atLeastHalfMyBalance;

      var marketPair = "BTCUSDT";

      // define orderPrice (around market top)
      var btcUsdtOrderbook = await client.getTradingService()
        .getOrderBook({ Market_Pair: marketPair, Depth: 5, Level: 2 })
      var randomSmallFraction = ((Math.random() * 90) + 10) / 1000
      var topBid = btcUsdtOrderbook.bids[0];
      var orderPrice = topBid.price + randomSmallFraction;
      var orderQuantity = quantityToSpend / orderPrice;


      // send order
      var instruments = await client.getInstrumentService().getInstruments();
      var btcUsdtInstrument = instruments.filter(pair => pair.Symbol === marketPair)[0]
      var orderResult = await client.getTradingService().sendOrder({
        InstrumentId: btcUsdtInstrument.InstrumentId,
        AccountId: accountId,
        TimeInForce: TimeInForce.GTC,
        Side: OrderSide.Buy,
        OrderType: OrderTypeInt.Limit,
        Quantity: orderQuantity,
        LimitPrice: orderPrice,
      });


      // handle order result
      if (orderResult.Status === "Rejected") {
        // order was rejected
        console.log("order rejected");
        console.log(orderResult.Message);
        return
      }
      // order was accepted
      console.log("orderId,", orderResult.OrderId);

      // cancel order
      await client.getTradingService()
        .cancelOrder({
          AccountId: accountId,
          OrderId: orderResult.OrderId
        })
      return orderResult.OrderId
    });
  });
});
