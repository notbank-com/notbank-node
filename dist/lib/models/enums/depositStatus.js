// Estados posibles para el depósito
export var DepositStatus;
(function (DepositStatus) {
    DepositStatus["New"] = "New";
    DepositStatus["Pending"] = "Pending";
    DepositStatus["FullyProcessed"] = "FullyProcessed";
    DepositStatus["Error"] = "Error"; // Depósito con error.
})(DepositStatus || (DepositStatus = {}));
