import { AxiosResponse } from "axios";
import { RequestType } from "../serviceClient";
import { Requester } from "./Requester";
export class JsonRequester {

  static request<T1>(config: {
    url: string,
    requestType: RequestType,
    params?: T1;
    extraHeaders?: any
  }
  ): Promise<AxiosResponse<any>> {
    const isPostOrDeleteRequest = [
      RequestType.POST, RequestType.DELETE].includes(config.requestType)
    var url = isPostOrDeleteRequest
      ? config.url
      : JsonRequester.getUrlWithSearchParams(config.url, config.params);
    var data = isPostOrDeleteRequest
      ? config.params :
      null;
    var requestConfig: any = {
      method: config.requestType,
      headers: JsonRequester.getHeaders(config.extraHeaders, isPostOrDeleteRequest),
      validateStatus: status => true,
    }
    return Requester.getFunction(config.requestType)(url, data, requestConfig);
  }

  private static getHeaders(extraHeaders?: any, withJsonData: boolean = false): any {
    var headers = {
      charset: "UTF-8"
    };
    if (withJsonData) {
      headers["Content-type"] = "application/json";
    }
    if (extraHeaders) {
      return { ...headers, ...extraHeaders };
    }
    return headers;
  }

  private static getUrlWithSearchParams(endpoint: string, params?: any): string {
    return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
  }
}
