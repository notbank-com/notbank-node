export enum Endpoint {
  // Account
  GET_ACCOUNT_TRANSACTIONS = "GetAccountTransactions",
  GET_ACCOUNT_POSITIONS = "GetAccountPositions",
  GET_ACCOUNT_INSTRUMENT_STATISTICS = "GetAccountInstrumentStatistics",
  GET_ACCOUNT_SETTLEMENT_POSITIONS = "GetAccountSettlementPositions",
  GET_ACCOUNT_INFO = "GetAccountInfo",

  // Authentication
  AUTHENTICATE = "Authenticate",
  AUTHENTICATE_USER = "AuthenticateUser",
  WEB_AUTHENTICATE_USER = "WebAuthenticateUser",
  LOGOUT = "LogOut",

  // FEE
  GET_WITHDRAW_FEE = "GetWithdrawFee",
  GET_DEPOSIT_FEE = "GetDepositFee",
  GET_OMS_WITHDRAW_FEES = "GetOMSWithdrawFees",
  GET_OMS_DEPOSIT_FEES = "GetOMSDepositFees",
  GET_ACCOUNT_FEES = "GetAccountFees",
  GET_ORDER_FEE = "GetOrderFee",

  // Instrument
  GET_INSTRUMENT = "GetInstrument",
  GET_INSTRUMENTS = "GetInstruments",
  GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG = "GetInstrumentVerificationLevelConfig",

  // Product
  GET_PRODUCT = "GetProduct",
  GET_PRODUCTS = "GetProducts",
  GET_VERIFICATION_LEVEL_CONFIG = "GetVerificationLevelConfig",

  // Report
  GENERATE_TRADE_ACTIVITY_REPORT = "GenerateTradeActivityReport",
  GENERATE_TRANSACTION_ACTIVITY_REPORT = "GenerateTransactionActivityReport",
  GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT = "GenerateProductDeltaActivityReport",
  GENERATE_PNL_ACTIVITY_REPORT = "GeneratePnLActivityReport",
  SCHEDULE_TRADE_ACTIVITY_REPORT = "ScheduleTradeActivityReport",
  SCHEDULE_TRANSACTION_ACTIVITY_REPORT = "ScheduleTransactionActivityReport",
  SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT = "ScheduleProductDeltaActivityReport",
  SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT = "ScheduleProfitAndLossActivityReport",
  CANCEL_USER_REPORT = "CancelUserReport",
  GET_USER_REPORT_WRITER_RESULT_RECORDS = "GetUserReportWriterResultRecords",
  GET_USER_REPORT_TICKETS = "GetUserReportTickets",
  REMOVE_USER_REPORT_TICKET = "RemoveUserReportTicket",
  GET_USER_REPORT_TICKETS_BY_STATUS = "GetUserReportTicketsByStatus",
  DOWNLOAD_DOCUMENT = "DownloadDocument",
  DOWNLOAD_DOCUMENT_SLICE = "DownloadDocumentSlice",

  // System
  PING = "Ping",
  HEALTH_CHECK = "HealthCheck",

  // Trading
  SEND_ORDER_LIST = "SendOrderList",
  SEND_CANCEL_LIST = "SendCancelList",
  SEND_CANCEL_REPLACE_LIST = "SendCancelReplaceList",
  MODIFY_ORDER = "ModifyOrder",
  CANCEL_ALL_ORDERS = "CancelAllOrders",
  GET_ORDER_STATUS = "GetOrderStatus",
  GET_ORDERS_HISTORY = "GetOrdersHistory",
  GET_TRADES_HISTORY = "GetTradesHistory",
  GET_ORDER_HISTORY_BY_ORDER_ID = "GetOrderHistoryByOrderId",
  GET_TICKER_HISTORY = "GetTickerHistory",
  GET_LAST_TRADES = "GetLastTrades",
  GET_LEVEL1_SUMMARY = "GetLevel1Summary",
  GET_LEVEL1_SUMMARY_MIN = "GetLevel1SummaryMin",
  GET_OPEN_TRADE_REPORTS = "GetOpenTradeReports",
  GET_ORDERS = "GetOrders",
  GET_ORDER_HISTORY = "GetOrderHistory",
  SEND_ORDER = "SendOrder",
  CANCEL_REPLACE_ORDER = "CancelReplaceOrder",
  CANCEL_ORDER = "CancelOrder",
  GET_OPEN_ORDERS = "GetOpenOrders",
  GET_ACCOUNT_TRADES = "GetAccountTrades",
  SUMMARY = "Summary",
  TICKER = "Ticker",
  ORDER_BOOK = "OrderBook",
  TRADES = "Trades",
  GET_L2_SNAPSHOT = "GetL2Snapshot",
  GET_LEVEL1 = "GetLevel1",
  GET_ENUMS = "GetEnums",

  // User
  GET_USER_ACCOUNTS = "GetUserAccounts",
  GET_USER_DEVICES = "GetUserDevices",
  GET_USER_INFO = "GetUserInfo",
  GET_USER_PERMISSIONS = "GetUserPermissions",

  // Wallet
  BANKS = "banks",
  PROVINCES = "provinces",
  BANK_ACCOUNTS = "bank-accounts",
  GET_NETWORKS_TEMPLATES = "wallet/crypto/withdrawal/templates",
  DEPOSIT_ADDRESS = "wallet/crypto",
  WHITELIST_ADDRESSES = "wallet/crypto/whitelist-addresses",
  UPDATE_ONE_STEP_WITHDRAW = "wallet/crypto/whitelist-addresses/one-step/status",
  CREATE_CRYPTO_WITHDRAW = "wallet/crypto/withdrawal",
  FIAT_DEPOSIT = "wallet/fiat/deposit",
  GET_OWNERS_FIAT_WITHDRAW = "wallet/fiat/withdrawal/owners",
  FIAT_WITHDRAW = "wallet/fiat/withdrawal",
  TRANSFER_FUNDS = "wallet/transfer-funds",
  GET_TRANSACTIONS = "wallet/transactions",

  // quote
  QUOTES = "quotes",
  QUOTES_DIRECT = "quotes/direct",
  QUOTES_INVERSE = "quotes/inverse",

  // register
  REGISTER = "account/register",

  // verification 
  VERIFICATION_BASIC = "account/verification/basic",
  VERIFICATION_TRADER = "account/verification/trader",
  VERIFICATION_TRADER_PLUS = "account/verification/trader-plus",
  VERIFICATION_TRADER_PLUS_SCHEMAS = "account/verification/trader-plus/schemas",
  VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS = "account/verification/institutional/company/schemas",
  VERIFICATION_INSTITUTIONAL_COMPANY = "account/verification/institutional/company",
  VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS = "account/verification/institutional/members/schemas",
  VERIFICATION_INSTITUTIONAL_MEMBERS = "account/verification/institutional/members",
  VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES = "account/verification/institutional/documents/types",
  VERIFICATION_INSTITUTIONAL_DOCUMENTS = "account/verification/institutional/documents",
  VERIFICATION_STATUS = "account/verification/status",
  VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES = "account/verification/institutional/members/types",

  // savings
  SAVINGS_DEPOSIT = "savings/deposit",
  SAVINGS_WITHDRAW = "savings/withdraw"

}

export enum WebSocketEndpoint {
  //SUBSCRIPTION
  SUBSCRIBE_LEVEL1 = "SubscribeLevel1",
  UPDATE_LEVEL1 = "Level1UpdateEvent",
  UNSUBSCRIBE_LEVEL1 = "UnsubscribeLevel1",
  SUBSCRIBE_LEVEL2 = "SubscribeLevel2",
  UPDATE_LEVEL2 = "Level2UpdateEvent",
  UNSUBSCRIBE_LEVEL2 = "UnsubscribeLevel2",
  SUBSCRIBE_TRADES = "SubscribeTrades",
  UNSUBSCRIBE_TRADES = "UnsubscribeTrades",
  SUBSCRIBE_TICKER = "SubscribeTicker",
  UPDATE_TICKER = "TickerDataUpdateEvent",
  UNSUBSCRIBE_TICKER = "UnsubscribeTicker",
  SUBSCRIBE_ACCOUNT_EVENTS = "SubscribeAccountEvents",
  UNSUBSCRIBE_ACCOUNT_EVENTS = "UnsubscribeAccountEvents",
  SUBSCRIBE_ORDER_STATE_EVENTS = "SubscribeOrderStateEvents",
  UNSUBSCRIBE_ORDER_STATE_EVENTS = "UnsubscribeOrderStateEvents",

  //Accout Events
  ACCOUNT_EVENT_TRANSACTION = "TransactionEvent",
  ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE = "WithdrawTicketUpdateEvent",
  ACCOUNT_EVENT_ACCOUNT_POSITION = "AccountPositionEvent",
  ACCOUNT_EVENT_ORDER_TRADE = "OrderTradeEvent",
  ACCOUNT_EVENT_ORDER_STATE = "OrderStateEvent",
  ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE = "DepositTicketUpdateEvent",
  ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE = "AccountInfoUpdateEvent",
  ACCOUNT_EVENT_CANCEL_ORDER_REJECT = "CancelOrderRejectEvent",
  ACCOUNT_EVENT_DEPOSIT = "DepositEvent"
}
