export interface AccountTransaction {
    TransactionId: number;
    OMSId: number;
    AccountId: number;
    CR: number;
    DR: number;
    Counterparty: number;
    TransactionType: string;
    ReferenceId: number;
    ReferenceType: string;
    ProductId: number;
    Balance: number;
    TimeStamp: number;
}
