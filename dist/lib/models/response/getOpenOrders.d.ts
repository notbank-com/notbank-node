import { ChangeReason } from "../enums/changeReason.js";
import { OrderTypeInt } from "../enums/orderType.js";
import { SideType } from "../enums/sideType.js";
/**
 * OpenOrder:
 * Representa una orden abierta devuelta por el API de GetOpenOrders.
 */
export interface OpenOrder {
    Side: SideType;
    OrderId: number;
    Price: number;
    Quantity: number;
    DisplayQuantity: number;
    Instrument: number;
    Account: number;
    AccountName: string;
    OrderType: OrderTypeInt;
    ClientOrderId: number;
    OrderState: string;
    ReceiveTime: number;
    ReceiveTimeTicks: number;
    LastUpdatedTime: number;
    LastUpdatedTimeTicks: number;
    OrigQuantity: number;
    QuantityExecuted: number;
    GrossValueExecuted: number;
    ExecutableValue: number;
    AvgPrice: number;
    CounterPartyId: number;
    ChangeReason: ChangeReason;
    OrigOrderId: number;
    OrigClOrdId: number;
    EnteredBy: number;
    UserName: string;
    IsQuote: boolean;
    InsideAsk: number;
    InsideAskSize: number;
    InsideBid: number;
    InsideBidSize: number;
    LastTradePrice: number;
    RejectReason: string;
    IsLockedIn: boolean;
    CancelReason: string;
    OrderFlag: string;
    UseMargin: boolean;
    StopPrice: number;
    PegPriceType: string;
    PegOffset: number;
    PegLimitOffset: number;
    IpAddress: string | null;
    IPv6a: number;
    IPv6b: number;
    ClientOrderIdUuid?: string | null;
    OMSId: number;
}
