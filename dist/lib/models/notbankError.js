export class NotbankError extends Error {
    constructor(message, code) {
        super("Notbank Error. " + message);
        this.code = code;
    }
}
NotbankError.Factory = class Factory {
    static createFromApResponse(standardResponse) {
        var errMsg = "";
        if (standardResponse.errorcode) {
            errMsg += `(code=${standardResponse.errorcode})`;
        }
        if (standardResponse.errormsg) {
            errMsg += " " + standardResponse.errormsg + ".";
        }
        if (standardResponse.detail) {
            errMsg += " " + standardResponse.detail + ".";
        }
        return new NotbankError(errMsg, standardResponse.errorcode || standardResponse.statusCode);
    }
    static createFromNbResponse(standardResponse, httpStatus) {
        var errMsg = `(http status=${httpStatus}) `;
        if (standardResponse.status) {
            errMsg += `(status=${standardResponse.status}) `;
        }
        if (standardResponse.code) {
            errMsg += `(code=${standardResponse.code}) `;
        }
        if (standardResponse.message) {
            errMsg += standardResponse.message;
            if (!standardResponse.message.endsWith(".")) {
                errMsg += ".";
            }
        }
        if (standardResponse.detail) {
            errMsg += " " + standardResponse.detail;
            if (!standardResponse.detail.endsWith(".")) {
                errMsg += ".";
            }
        }
        return new NotbankError(errMsg, -1);
    }
};
