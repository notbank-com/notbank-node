export var Endpoint;
(function (Endpoint) {
    // Account
    Endpoint["GET_ACCOUNT_TRANSACTIONS"] = "GetAccountTransactions";
    Endpoint["GET_ACCOUNT_POSITIONS"] = "GetAccountPositions";
    Endpoint["GET_ACCOUNT_INSTRUMENT_STATISTICS"] = "GetAccountInstrumentStatistics";
    Endpoint["GET_ACCOUNT_SETTLEMENT_POSITIONS"] = "GetAccountSettlementPositions";
    Endpoint["GET_ACCOUNT_INFO"] = "GetAccountInfo";
    // Authentication
    Endpoint["AUTHENTICATE"] = "Authenticate";
    Endpoint["AUTHENTICATE_USER"] = "AuthenticateUser";
    Endpoint["WEB_AUTHENTICATE_USER"] = "WebAuthenticateUser";
    Endpoint["LOGOUT"] = "LogOut";
    // FEE
    Endpoint["GET_WITHDRAW_FEE"] = "GetWithdrawFee";
    Endpoint["GET_DEPOSIT_FEE"] = "GetDepositFee";
    Endpoint["GET_OMS_WITHDRAW_FEES"] = "GetOMSWithdrawFees";
    Endpoint["GET_OMS_DEPOSIT_FEES"] = "GetOMSDepositFees";
    Endpoint["GET_ACCOUNT_FEES"] = "GetAccountFees";
    Endpoint["GET_ORDER_FEE"] = "GetOrderFee";
    // Instrument
    Endpoint["GET_INSTRUMENT"] = "GetInstrument";
    Endpoint["GET_INSTRUMENTS"] = "GetInstruments";
    Endpoint["GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG"] = "GetInstrumentVerificationLevelConfig";
    // Product
    Endpoint["GET_PRODUCT"] = "GetProduct";
    Endpoint["GET_PRODUCTS"] = "GetProducts";
    Endpoint["GET_VERIFICATION_LEVEL_CONFIG"] = "GetVerificationLevelConfig";
    // Report
    Endpoint["GENERATE_TRADE_ACTIVITY_REPORT"] = "GenerateTradeActivityReport";
    Endpoint["GENERATE_TRANSACTION_ACTIVITY_REPORT"] = "GenerateTransactionActivityReport";
    Endpoint["GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT"] = "GenerateProductDeltaActivityReport";
    Endpoint["GENERATE_PNL_ACTIVITY_REPORT"] = "GeneratePnLActivityReport";
    Endpoint["SCHEDULE_TRADE_ACTIVITY_REPORT"] = "ScheduleTradeActivityReport";
    Endpoint["SCHEDULE_TRANSACTION_ACTIVITY_REPORT"] = "ScheduleTransactionActivityReport";
    Endpoint["SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT"] = "ScheduleProductDeltaActivityReport";
    Endpoint["SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT"] = "ScheduleProfitAndLossActivityReport";
    Endpoint["CANCEL_USER_REPORT"] = "CancelUserReport";
    Endpoint["GET_USER_REPORT_WRITER_RESULT_RECORDS"] = "GetUserReportWriterResultRecords";
    Endpoint["GET_USER_REPORT_TICKETS"] = "GetUserReportTickets";
    Endpoint["REMOVE_USER_REPORT_TICKET"] = "RemoveUserReportTicket";
    Endpoint["GET_USER_REPORT_TICKETS_BY_STATUS"] = "GetUserReportTicketsByStatus";
    Endpoint["DOWNLOAD_DOCUMENT"] = "DownloadDocument";
    Endpoint["DOWNLOAD_DOCUMENT_SLICE"] = "DownloadDocumentSlice";
    // System
    Endpoint["PING"] = "Ping";
    Endpoint["HEALTH_CHECK"] = "HealthCheck";
    // Trading
    Endpoint["SEND_ORDER_LIST"] = "SendOrderList";
    Endpoint["SEND_CANCEL_LIST"] = "SendCancelList";
    Endpoint["SEND_CANCEL_REPLACE_LIST"] = "SendCancelReplaceList";
    Endpoint["MODIFY_ORDER"] = "ModifyOrder";
    Endpoint["CANCEL_ALL_ORDERS"] = "CancelAllOrders";
    Endpoint["GET_ORDER_STATUS"] = "GetOrderStatus";
    Endpoint["GET_ORDERS_HISTORY"] = "GetOrdersHistory";
    Endpoint["GET_TRADES_HISTORY"] = "GetTradesHistory";
    Endpoint["GET_ORDER_HISTORY_BY_ORDER_ID"] = "GetOrderHistoryByOrderId";
    Endpoint["GET_TICKER_HISTORY"] = "GetTickerHistory";
    Endpoint["GET_LAST_TRADES"] = "GetLastTrades";
    Endpoint["GET_LEVEL1_SUMMARY"] = "GetLevel1Summary";
    Endpoint["GET_LEVEL1_SUMMARY_MIN"] = "GetLevel1SummaryMin";
    Endpoint["GET_OPEN_TRADE_REPORTS"] = "GetOpenTradeReports";
    Endpoint["GET_ORDERS"] = "GetOrders";
    Endpoint["GET_ORDER_HISTORY"] = "GetOrderHistory";
    Endpoint["SEND_ORDER"] = "SendOrder";
    Endpoint["CANCEL_REPLACE_ORDER"] = "CancelReplaceOrder";
    Endpoint["CANCEL_ORDER"] = "CancelOrder";
    Endpoint["GET_OPEN_ORDERS"] = "GetOpenOrders";
    Endpoint["GET_ACCOUNT_TRADES"] = "GetAccountTrades";
    Endpoint["SUMMARY"] = "Summary";
    Endpoint["TICKER"] = "Ticker";
    Endpoint["ORDER_BOOK"] = "OrderBook";
    Endpoint["TRADES"] = "Trades";
    Endpoint["GET_L2_SNAPSHOT"] = "GetL2Snapshot";
    Endpoint["GET_LEVEL1"] = "GetLevel1";
    Endpoint["GET_ENUMS"] = "GetEnums";
    // User
    Endpoint["GET_USER_ACCOUNTS"] = "GetUserAccounts";
    Endpoint["GET_USER_DEVICES"] = "GetUserDevices";
    Endpoint["GET_USER_INFO"] = "GetUserInfo";
    Endpoint["GET_USER_PERMISSIONS"] = "GetUserPermissions";
    // Wallet
    Endpoint["BANKS"] = "banks";
    Endpoint["PROVINCES"] = "provinces";
    Endpoint["BANK_ACCOUNTS"] = "bank-accounts";
    Endpoint["GET_NETWORKS_TEMPLATES"] = "wallet/crypto/withdrawal/templates";
    Endpoint["DEPOSIT_ADDRESS"] = "wallet/crypto";
    Endpoint["WHITELIST_ADDRESSES"] = "wallet/crypto/whitelist-addresses";
    Endpoint["UPDATE_ONE_STEP_WITHDRAW"] = "wallet/crypto/whitelist-addresses/one-step/status";
    Endpoint["CREATE_CRYPTO_WITHDRAW"] = "wallet/crypto/withdrawal";
    Endpoint["FIAT_DEPOSIT"] = "wallet/fiat/deposit";
    Endpoint["GET_OWNERS_FIAT_WITHDRAW"] = "wallet/fiat/withdrawal/owners";
    Endpoint["FIAT_WITHDRAW"] = "wallet/fiat/withdrawal";
    Endpoint["TRANSFER_FUNDS"] = "wallet/transfer-funds";
    Endpoint["GET_TRANSACTIONS"] = "wallet/transactions";
    // quote
    Endpoint["QUOTES"] = "quotes";
    Endpoint["QUOTES_DIRECT"] = "quotes/direct";
    Endpoint["QUOTES_INVERSE"] = "quotes/inverse";
    // register
    Endpoint["REGISTER"] = "account/register";
    // verification 
    Endpoint["VERIFICATION_BASIC"] = "account/verification/basic";
    Endpoint["VERIFICATION_TRADER"] = "account/verification/trader";
    Endpoint["VERIFICATION_TRADER_PLUS"] = "account/verification/trader-plus";
    Endpoint["VERIFICATION_TRADER_PLUS_SCHEMAS"] = "account/verification/trader-plus/schemas";
    Endpoint["VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS"] = "account/verification/institutional/company/schemas";
    Endpoint["VERIFICATION_INSTITUTIONAL_COMPANY"] = "account/verification/institutional/company";
    Endpoint["VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS"] = "account/verification/institutional/members/schemas";
    Endpoint["VERIFICATION_INSTITUTIONAL_MEMBERS"] = "account/verification/institutional/members";
    Endpoint["VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES"] = "account/verification/institutional/documents/types";
    Endpoint["VERIFICATION_INSTITUTIONAL_DOCUMENTS"] = "account/verification/institutional/documents";
    Endpoint["VERIFICATION_STATUS"] = "account/verification/status";
    Endpoint["VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES"] = "account/verification/institutional/members/types";
    // savings
    Endpoint["SAVINGS_DEPOSIT"] = "savings/deposit";
    Endpoint["SAVINGS_WITHDRAW"] = "savings/withdraw";
})(Endpoint || (Endpoint = {}));
export var WebSocketEndpoint;
(function (WebSocketEndpoint) {
    //SUBSCRIPTION
    WebSocketEndpoint["SUBSCRIBE_LEVEL1"] = "SubscribeLevel1";
    WebSocketEndpoint["UPDATE_LEVEL1"] = "Level1UpdateEvent";
    WebSocketEndpoint["UNSUBSCRIBE_LEVEL1"] = "UnsubscribeLevel1";
    WebSocketEndpoint["SUBSCRIBE_LEVEL2"] = "SubscribeLevel2";
    WebSocketEndpoint["UPDATE_LEVEL2"] = "Level2UpdateEvent";
    WebSocketEndpoint["UNSUBSCRIBE_LEVEL2"] = "UnsubscribeLevel2";
    WebSocketEndpoint["SUBSCRIBE_TRADES"] = "SubscribeTrades";
    WebSocketEndpoint["UNSUBSCRIBE_TRADES"] = "UnsubscribeTrades";
    WebSocketEndpoint["SUBSCRIBE_TICKER"] = "SubscribeTicker";
    WebSocketEndpoint["UPDATE_TICKER"] = "TickerDataUpdateEvent";
    WebSocketEndpoint["UNSUBSCRIBE_TICKER"] = "UnsubscribeTicker";
    WebSocketEndpoint["SUBSCRIBE_ACCOUNT_EVENTS"] = "SubscribeAccountEvents";
    WebSocketEndpoint["UNSUBSCRIBE_ACCOUNT_EVENTS"] = "UnsubscribeAccountEvents";
    WebSocketEndpoint["SUBSCRIBE_ORDER_STATE_EVENTS"] = "SubscribeOrderStateEvents";
    WebSocketEndpoint["UNSUBSCRIBE_ORDER_STATE_EVENTS"] = "UnsubscribeOrderStateEvents";
    //Accout Events
    WebSocketEndpoint["ACCOUNT_EVENT_TRANSACTION"] = "TransactionEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE"] = "WithdrawTicketUpdateEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_ACCOUNT_POSITION"] = "AccountPositionEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_ORDER_TRADE"] = "OrderTradeEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_ORDER_STATE"] = "OrderStateEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE"] = "DepositTicketUpdateEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE"] = "AccountInfoUpdateEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_CANCEL_ORDER_REJECT"] = "CancelOrderRejectEvent";
    WebSocketEndpoint["ACCOUNT_EVENT_DEPOSIT"] = "DepositEvent";
})(WebSocketEndpoint || (WebSocketEndpoint = {}));
