export declare enum ChangeReason {
    UNKNOWN = "Unknown",
    NEWINPUTACCEPTED = "NewInputAccepted",
    NEWINPUTREJECTED = "NewInputRejected",
    OTHERREJECTED = "OtherRejected",
    EXPIRED = "Expired",
    TRADE = "Trade",
    SYSTEMCANCELED_NOMOREDMARKET = "SystemCanceled_NoMoreMarket",
    SYSTEMCANCELED_BELOWMINIMUM = "SystemCanceled_BelowMinimum",
    SYSTEMCANCELED_PRICECOLLAR = "SystemCanceled_PriceCollar",
    SYSTEMCANCELED_MARGINFAILED = "SystemCanceled_MarginFailed",
    USERMODIFIED = "UserModified"
}
