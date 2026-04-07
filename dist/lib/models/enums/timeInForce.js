// Tiempo de ejecución
export var TimeInForce;
(function (TimeInForce) {
    TimeInForce[TimeInForce["Unknown"] = 0] = "Unknown";
    TimeInForce[TimeInForce["GTC"] = 1] = "GTC";
    TimeInForce[TimeInForce["OPG"] = 2] = "OPG";
    TimeInForce[TimeInForce["IOC"] = 3] = "IOC";
    TimeInForce[TimeInForce["FOK"] = 4] = "FOK";
    TimeInForce[TimeInForce["GTX"] = 5] = "GTX";
    TimeInForce[TimeInForce["GTD"] = 6] = "GTD"; // Good 'til date
})(TimeInForce || (TimeInForce = {}));
