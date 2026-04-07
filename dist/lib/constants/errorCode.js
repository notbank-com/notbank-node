export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["UNDEFINED"] = -1] = "UNDEFINED";
    ErrorCode[ErrorCode["NOT_AN_ERROR"] = 0] = "NOT_AN_ERROR";
    ErrorCode[ErrorCode["NOT_AUTHORIZED"] = 20] = "NOT_AUTHORIZED";
    ErrorCode[ErrorCode["INVALID_RESPONSE"] = 100] = "INVALID_RESPONSE";
    ErrorCode[ErrorCode["OPERATION_FAILED"] = 101] = "OPERATION_FAILED";
    ErrorCode[ErrorCode["SERVER_ERROR"] = 102] = "SERVER_ERROR";
    ErrorCode[ErrorCode["RESOURCE_NOT_FOUND"] = 104] = "RESOURCE_NOT_FOUND";
    ErrorCode[ErrorCode["OPERATION_IN_PROCESS"] = 107] = "OPERATION_IN_PROCESS";
})(ErrorCode || (ErrorCode = {}));
export default ErrorCode;
