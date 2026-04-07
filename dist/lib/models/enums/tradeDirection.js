// Dirección de la transacción en el mercado
export var TradeDirection;
(function (TradeDirection) {
    TradeDirection[TradeDirection["NoChange"] = 0] = "NoChange";
    TradeDirection[TradeDirection["Uptick"] = 1] = "Uptick";
    TradeDirection[TradeDirection["DownTick"] = 2] = "DownTick";
})(TradeDirection || (TradeDirection = {}));
