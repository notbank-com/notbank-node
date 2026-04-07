export interface Deposit {
    OMSId: number;
    DepositId: number;
    AccountId: number;
    SubAccountId: number;
    ProductId: number;
    Amount: number;
    LastUpdateTimeStamp: number;
    ProductType: string;
    TicketStatus: string;
    DepositInfo: string;
    DepositCode: string;
    TicketNumber: number;
    NotionalProductId: number;
    NotionalValue: number;
    FeeAmount: number;
}
