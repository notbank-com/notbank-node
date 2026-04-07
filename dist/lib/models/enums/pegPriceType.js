// Tipo de precio para órdenes Stop y Trailing
export var PegPriceType;
(function (PegPriceType) {
    PegPriceType[PegPriceType["Last"] = 1] = "Last";
    PegPriceType[PegPriceType["Bid"] = 2] = "Bid";
    PegPriceType[PegPriceType["Ask"] = 3] = "Ask";
    PegPriceType[PegPriceType["Midpoint"] = 4] = "Midpoint"; // No soportado actualmente
})(PegPriceType || (PegPriceType = {}));
