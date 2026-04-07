var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _ApResponseHandler_getJsonData;
import ErrorCode from "../../constants/errorCode.js";
import { NotbankError } from "../../models/index.js";
export class ApResponseHandler {
    static handle(response) {
        return __awaiter(this, void 0, void 0, function* () {
            if (response.status >= 300 || response.status < 200) {
                throw new Error(`http error (${response.status}) not a successfull response. ${yield response.data}`);
            }
            var jsonResponse = __classPrivateFieldGet(_a, _a, "m", _ApResponseHandler_getJsonData).call(_a, response);
            if (!jsonResponse) {
                throw new NotbankError("http error. (status=" + response.status + ")", -1);
            }
            var standardResponse = jsonResponse;
            if ((standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.result) === false &&
                (standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.errorcode) != null && !(standardResponse.errorcode == ErrorCode.OPERATION_IN_PROCESS && standardResponse.errormsg === "Operation In Process")) {
                throw NotbankError.Factory.createFromApResponse(standardResponse);
            }
            return jsonResponse;
        });
    }
}
_a = ApResponseHandler, _ApResponseHandler_getJsonData = function _ApResponseHandler_getJsonData(response) {
    try {
        return response.data;
    }
    catch (err) {
        return null;
    }
};
