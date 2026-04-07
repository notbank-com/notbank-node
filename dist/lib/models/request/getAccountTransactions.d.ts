import { TransactionReferenceTypes } from "../enums/transactionReferenceTypes.js";
import { TransactionTypes } from "../enums/transactionTypes.js";
export interface GetAccountTransactionsRequest {
    AccountId: number;
    Depth?: number;
    ProductId?: number;
    TransactionId?: number;
    ReferenceId?: number;
    TransactionTypes?: TransactionTypes[];
    TransactionReferenceTypes?: TransactionReferenceTypes[];
    StartTimestamp?: number;
    EndTimeStamp?: number;
}
