// Lados del comercio (Side)
export var TradeSide;
(function (TradeSide) {
    TradeSide[TradeSide["Buy"] = 0] = "Buy";
    TradeSide[TradeSide["Sell"] = 1] = "Sell";
    TradeSide[TradeSide["Short"] = 2] = "Short";
    TradeSide[TradeSide["Unknown"] = 3] = "Unknown";
})(TradeSide || (TradeSide = {}));
