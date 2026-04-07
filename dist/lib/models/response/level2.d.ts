import { ActionType, SideType } from "../enums/index.js";
/**
 * Interface que mapea cada elemento del snapshot Level 2.
 */
export interface Level2Feed {
    MDUpdateId: number;
    NumberOfAccounts: number;
    ActionDateTime: number;
    ActionType: ActionType;
    LastTradePrice: number;
    NumberOfOrders: number;
    Price: number;
    ProductPairCode: number;
    Quantity: number;
    Side: SideType;
}
