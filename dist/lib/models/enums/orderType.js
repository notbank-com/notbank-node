// Tipos de orden
export var OrderTypeInt;
(function (OrderTypeInt) {
    OrderTypeInt[OrderTypeInt["Unknown"] = 0] = "Unknown";
    OrderTypeInt[OrderTypeInt["Market"] = 1] = "Market";
    OrderTypeInt[OrderTypeInt["Limit"] = 2] = "Limit";
    OrderTypeInt[OrderTypeInt["StopMarket"] = 3] = "StopMarket";
    OrderTypeInt[OrderTypeInt["StopLimit"] = 4] = "StopLimit";
    OrderTypeInt[OrderTypeInt["TrailingStopMarket"] = 5] = "TrailingStopMarket";
    OrderTypeInt[OrderTypeInt["TrailingStopLimit"] = 6] = "TrailingStopLimit";
    OrderTypeInt[OrderTypeInt["BlockTrade"] = 7] = "BlockTrade";
})(OrderTypeInt || (OrderTypeInt = {}));
export var OrderTypeStr;
(function (OrderTypeStr) {
    OrderTypeStr["Unknown"] = "Unknown";
    OrderTypeStr["Market"] = "Market";
    OrderTypeStr["Limit"] = "Limit";
    OrderTypeStr["StopMarket"] = "StopMarket";
    OrderTypeStr["StopLimit"] = "StopLimit";
    OrderTypeStr["TrailingStopMarket"] = "TrailingStopMarket";
    OrderTypeStr["TrailingStopLimit"] = "TrailingStopLimit";
    OrderTypeStr["BlockTrade"] = "BlockTrade";
})(OrderTypeStr || (OrderTypeStr = {}));
