export var FiatDepositPaymentMethod;
(function (FiatDepositPaymentMethod) {
    FiatDepositPaymentMethod[FiatDepositPaymentMethod["MANUAL_BANK_TRANSFER"] = 1] = "MANUAL_BANK_TRANSFER";
    FiatDepositPaymentMethod[FiatDepositPaymentMethod["VIRTUAL_WALLET"] = 3] = "VIRTUAL_WALLET";
    FiatDepositPaymentMethod[FiatDepositPaymentMethod["QR_CODE"] = 4] = "QR_CODE";
    FiatDepositPaymentMethod[FiatDepositPaymentMethod["ASSISTED_BANK_TRANSFER"] = 5] = "ASSISTED_BANK_TRANSFER";
    FiatDepositPaymentMethod[FiatDepositPaymentMethod["CREDIT_DEBIT_CARD"] = 6] = "CREDIT_DEBIT_CARD";
    FiatDepositPaymentMethod[FiatDepositPaymentMethod["CASH_OR_CARD"] = 7] = "CASH_OR_CARD";
})(FiatDepositPaymentMethod || (FiatDepositPaymentMethod = {}));
