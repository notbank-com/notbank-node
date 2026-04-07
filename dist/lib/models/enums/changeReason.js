export var ChangeReason;
(function (ChangeReason) {
    ChangeReason["UNKNOWN"] = "Unknown";
    ChangeReason["NEWINPUTACCEPTED"] = "NewInputAccepted";
    ChangeReason["NEWINPUTREJECTED"] = "NewInputRejected";
    ChangeReason["OTHERREJECTED"] = "OtherRejected";
    ChangeReason["EXPIRED"] = "Expired";
    ChangeReason["TRADE"] = "Trade";
    ChangeReason["SYSTEMCANCELED_NOMOREDMARKET"] = "SystemCanceled_NoMoreMarket";
    ChangeReason["SYSTEMCANCELED_BELOWMINIMUM"] = "SystemCanceled_BelowMinimum";
    ChangeReason["SYSTEMCANCELED_PRICECOLLAR"] = "SystemCanceled_PriceCollar";
    ChangeReason["SYSTEMCANCELED_MARGINFAILED"] = "SystemCanceled_MarginFailed";
    ChangeReason["USERMODIFIED"] = "UserModified";
})(ChangeReason || (ChangeReason = {}));
