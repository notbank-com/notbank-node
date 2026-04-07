
import axios, { AxiosResponse } from "axios";
import { FormData } from "formdata-node";
import { RequestType } from "../serviceClient";
import { Requester } from "./Requester";

export interface FormDataRequest {
  url: string,
  formData: FormData
  extraHeaders?: any
}

export class FormDataRequester {
  public static post<T1>(config: FormDataRequest): Promise<AxiosResponse<any>> {
    const requestData = {
      method: RequestType.POST,
      headers: FormDataRequester.getHeaders(config.extraHeaders),
    };
    return axios.post(config.url,config.formData, requestData);
  }

  private static getHeaders(extraHeaders?: any): any {
    var headers = {
      charset: "UTF-8",
      "Content-Type":"multipart/form-data"
    };
    if (extraHeaders) {
      return { ...headers, ...extraHeaders };
    }
    return headers;
  }
}
