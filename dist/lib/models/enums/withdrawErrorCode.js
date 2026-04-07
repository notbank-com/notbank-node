// Códigos de error posibles
export var WithdrawErrorCode;
(function (WithdrawErrorCode) {
    WithdrawErrorCode[WithdrawErrorCode["NoError"] = 0] = "NoError";
    WithdrawErrorCode[WithdrawErrorCode["NotAuthorized"] = 20] = "NotAuthorized";
    WithdrawErrorCode[WithdrawErrorCode["InvalidRequest"] = 100] = "InvalidRequest";
    WithdrawErrorCode[WithdrawErrorCode["OperationFailed"] = 101] = "OperationFailed";
    WithdrawErrorCode[WithdrawErrorCode["ServerError"] = 102] = "ServerError";
    WithdrawErrorCode[WithdrawErrorCode["ResourceNotFound"] = 104] = "ResourceNotFound";
})(WithdrawErrorCode || (WithdrawErrorCode = {}));
