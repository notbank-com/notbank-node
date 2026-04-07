var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { OrderSide, OrderTypeInt, TimeInForce } from "../../lib/models/index.js";
import { TestHelper } from "./TestHelper.js";
describe("wallet service", () => {
    describe("getBanks", () => {
        it("should return a list of banks", () => __awaiter(void 0, void 0, void 0, function* () {
            const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
            yield client.authenticateUser(TestHelper.getCredentials());
            var accountId = 235;
            // get USDT user balance (also known as position)
            var positions = yield client.getAccountService().getAccountPositions({ AccountId: accountId });
            var productSymbol = "USDT";
            var usdtPosition = positions
                .filter(position => position.ProductSymbol === productSymbol)
                .pop();
            if (!usdtPosition) {
                throw new Error("no usdt position");
            }
            // define quantityToSpend (between all usdt_balance and half usdt_balance)
            var myUsdtBalance = usdtPosition.Amount;
            var randomFraction = Math.random();
            var halfMyBalance = myUsdtBalance / 2;
            var atLeastHalfMyBalance = myUsdtBalance - (randomFraction * halfMyBalance);
            var quantityToSpend = atLeastHalfMyBalance;
            var marketPair = "BTCUSDT";
            // define orderPrice (around market top)
            var btcUsdtOrderbook = yield client.getTradingService()
                .getOrderBook({ Market_Pair: marketPair, Depth: 5, Level: 2 });
            var randomSmallFraction = ((Math.random() * 90) + 10) / 1000;
            var topBid = btcUsdtOrderbook.bids[0];
            var orderPrice = topBid.price + randomSmallFraction;
            var orderQuantity = quantityToSpend / orderPrice;
            // send order
            var instruments = yield client.getInstrumentService().getInstruments();
            var btcUsdtInstrument = instruments.filter(pair => pair.Symbol === marketPair)[0];
            var orderResult = yield client.getTradingService().sendOrder({
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
                return;
            }
            // order was accepted
            console.log("orderId,", orderResult.OrderId);
            // cancel order
            yield client.getTradingService()
                .cancelOrder({
                AccountId: accountId,
                OrderId: orderResult.OrderId
            });
            return orderResult.OrderId;
        }));
    });
});
