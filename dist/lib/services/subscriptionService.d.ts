import { ServiceConnection } from "../core/serviceClient.js";
import { CancelOrderRejectEvent, DepositEvent } from "../models/enums/accountEvent.js";
import { TradeSummary } from "../models/response/tradeSummary.js";
import { TickerFeed } from "../models/response/tickerFeed.js";
import { SubscribeAccountEventsRequest } from "../models/request/subscribeAccountEvents.js";
import { SubscribeLevel1Request } from "../models/request/subscribeLevel1.js";
import { SubscribeLevel2Request } from "../models/request/subscribeLevel2.js";
import { SubscribeOrderStateEventsRequest } from "../models/request/subscribeOrderStateEvents.js";
import { SubscribeTickerRequest } from "../models/request/subscribeTicker.js";
import { SubscribeTradesRequest } from "../models/request/subscribeTrades.js";
import { UnsubscribeAccountEventsRequest } from "../models/request/unsubscribeAccountEvents.js";
import { UnsubscribeLevel1Request } from "../models/request/unSubscribeLevel1.js";
import { UnsubscribeLevel2Request } from "../models/request/unSubscribeLevel2.js";
import { UnsubscribeOrderStateEventsRequest } from "../models/request/unsubscribeOrderStateEvents.js";
import { UnsubscribeTickerRequest } from "../models/request/unsubscribeTicker.js";
import { UnsubscribeTradesRequest } from "../models/request/unsubscribeTrades.js";
import { AccountInfo } from "../models/response/accountInfo.js";
import { AccountPosition } from "../models/response/accountPositions.js";
import { DepositTicket } from "../models/response/depositTicket.js";
import { Order } from "../models/response/order.js";
import { OrderTrade } from "../models/response/orderTrade.js";
import { Level1Feed } from "../models/response/subscribeLevel1.js";
import { TransactionEvent } from "../models/response/transactionEvent.js";
import { WithdrawTicket } from "../models/response/withdrawTicket.js";
import { Level2Feed } from "../models/response/level2.js";
export declare class SubscriptionService {
    private readonly connection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#subscribelevel1
     */
    subscribeLevel1(request: SubscribeLevel1Request, snapshotHandler: (ticker: Level1Feed) => void, updateHandler: (ticker: Level1Feed) => void): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel1
     */
    unsubscribeLevel1(request: UnsubscribeLevel1Request): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#subscribelevel2
     */
    subscribeLevel2(request: SubscribeLevel2Request, snapshotHandler: (ticker: Level2Feed) => void, updateHandler: (ticker: Level2Feed) => void): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel2
     */
    unsubscribeLevel2(request: UnsubscribeLevel2Request): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#subscribetrades
     */
    subscribeTrades(request: SubscribeTradesRequest, subcriptionHandler: (trade: TradeSummary) => void): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#unsubscribetrades
     */
    unsubscribeTrades(request: UnsubscribeTradesRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#subscribeticker
     */
    subscribeTicker(request: SubscribeTickerRequest, snapshotHandler: (tickers: TickerFeed[]) => void, updateHandler: (tickers: TickerFeed[]) => void): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#unsubscribeticker
     */
    unsubscribeTicker(request: UnsubscribeTickerRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#subscribeaccountevents
     */
    subscribeAccountEvents(request: SubscribeAccountEventsRequest, eventHandlers: {
        withdrawTicketUpdateEventHandler?: (event: WithdrawTicket) => void;
        orderTradeEventHandler?: (event: OrderTrade) => void;
        orderStateEventHandler?: (event: Order) => void;
        depositTicketUpdateEventHandler?: (event: DepositTicket) => void;
        accountPositionEventHandler?: (event: AccountPosition) => void;
        accountInfoUpdateEventHandler?: (event: AccountInfo) => void;
        cancelOrderRejectEventHandler?: (event: CancelOrderRejectEvent) => void;
        depositEventHandler?: (event: DepositEvent) => void;
        transactionEventHandler?: (event: TransactionEvent) => void;
    }): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#unsubscribeaccountevents
     */
    unsubscribeAccountEvents(request: UnsubscribeAccountEventsRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#subscribeorderstateevents
     */
    subscribeOrderStateEvents(request: SubscribeOrderStateEventsRequest, subscriptionHandler: (event: Order) => void): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#unsubscribeorderstateevents
     */
    unsubscribeOrderStateEvents(request: UnsubscribeOrderStateEventsRequest): Promise<void>;
}
