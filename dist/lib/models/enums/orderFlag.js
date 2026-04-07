// Flags de la orden
export var OrderFlag;
(function (OrderFlag) {
    OrderFlag["NoAccountRiskCheck"] = "NoAccountRiskCheck";
    OrderFlag["AddedToBook"] = "AddedToBook";
    OrderFlag["RemovedFromBook"] = "RemovedFromBook";
    OrderFlag["PostOnly"] = "PostOnly";
    OrderFlag["Liquidation"] = "Liquidation";
    OrderFlag["ReverseMarginPosition"] = "ReverseMarginPosition";
})(OrderFlag || (OrderFlag = {}));
