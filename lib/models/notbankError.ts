import { NbResponse } from "./nbResponse";
import { StandardResponse as StandardApResponse } from "./standardResponse";

export class NotbankError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super("Notbank Error. " + message)
    this.code = code
  }

  static Factory = class Factory {
    static createFromApResponse(standardResponse: StandardApResponse): NotbankError {
      var errMsg = ""
      if (standardResponse.errorcode) {
        errMsg += `(code=${standardResponse.errorcode})`;
      }
      if (standardResponse.errormsg) {
        errMsg += " " + standardResponse.errormsg + ".";
      }
      if (standardResponse.detail) {
        errMsg += " " + standardResponse.detail + ".";
      }
      return new NotbankError(
        errMsg,
        standardResponse.errorcode || standardResponse.statusCode
      )
    }

    static createFromNbResponse(standardResponse: NbResponse, httpStatus: number): NotbankError {
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
        errMsg += " " + standardResponse.detail
        if (!standardResponse.detail.endsWith(".")) {
          errMsg += ".";
        }
      }
      return new NotbankError(errMsg, -1)
    }
  }
}
