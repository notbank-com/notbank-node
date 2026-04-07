export var OrderState;
(function (OrderState) {
    OrderState["Unknown"] = "Unknown";
    OrderState["Working"] = "Working";
    OrderState["Rejected"] = "Rejected";
    OrderState["Canceled"] = "Canceled";
    OrderState["Expired"] = "Expired";
    OrderState["FullyExecuted"] = "Fully Executed";
})(OrderState || (OrderState = {}));
