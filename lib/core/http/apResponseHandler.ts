import { AxiosResponse } from 'axios';
import ErrorCode from "../../constants/errorCode";
import {
  NotbankError,
  StandardResponse
} from "../../models";

export class ApResponseHandler {
  public static async handle<T>(response: AxiosResponse<any>): Promise<T> {
    if (response.status >= 300 || response.status < 200) {
      throw new Error(
        `http error (${response.status
        }) not a successfull response. ${await response.data}`
      );
    }
    var jsonResponse = ApResponseHandler.#getJsonData(response)
    if (!jsonResponse) {
      throw new NotbankError("http error. (status=" + response.status + ")", -1)
    }
    var standardResponse = jsonResponse as StandardResponse;
    if (
      standardResponse?.result === false &&
      standardResponse?.errorcode != null && !(standardResponse.errorcode == ErrorCode.OPERATION_IN_PROCESS && standardResponse.errormsg === "Operation In Process")
    ) {
      throw NotbankError.Factory.createFromApResponse(standardResponse);
    }
    return jsonResponse as T;
  }

  static #getJsonData(response: AxiosResponse<any>): any {
    try {
      return response.data;
    } catch (err) {
      return null;
    }
  }
}
