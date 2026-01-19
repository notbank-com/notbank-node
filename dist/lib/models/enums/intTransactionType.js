export var IntTransactionType;
(function (IntTransactionType) {
    IntTransactionType[IntTransactionType["OTHER"] = 0] = "OTHER";
    IntTransactionType[IntTransactionType["DEPOSIT"] = 1] = "DEPOSIT";
    IntTransactionType[IntTransactionType["WITHDRAW"] = 2] = "WITHDRAW";
    IntTransactionType[IntTransactionType["TRANSFER"] = 3] = "TRANSFER";
    IntTransactionType[IntTransactionType["TRADE"] = 4] = "TRADE";
    IntTransactionType[IntTransactionType["PAYMENT"] = 5] = "PAYMENT";
    IntTransactionType[IntTransactionType["RECTIFICATION"] = 6] = "RECTIFICATION";
    IntTransactionType[IntTransactionType["FEE"] = 7] = "FEE";
    IntTransactionType[IntTransactionType["REVERSE"] = 8] = "REVERSE";
    IntTransactionType[IntTransactionType["HOLD"] = 9] = "HOLD";
    IntTransactionType[IntTransactionType["MARGIN"] = 10] = "MARGIN";
    IntTransactionType[IntTransactionType["AIRDROP"] = 11] = "AIRDROP";
    IntTransactionType[IntTransactionType["DISTRIBUTION"] = 12] = "DISTRIBUTION";
})(IntTransactionType || (IntTransactionType = {}));
