import { AxiosResponse } from "axios";
import { Endpoint } from "../../constants/endpoints";
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse,
  NotbankError
} from "../../models";
import { RequestType, ServiceConnection } from "../serviceClient";
import { MessageFrame } from "../websocket/messageFrame";
import { ResponseHandler } from "../websocket/responseHandler";
import { SubscriptionHandler } from "../websocket/subscriptionHandler";
import { ApResponseHandler } from "./apResponseHandler";
import { FormDataBuilder } from "./formDataBuilder";
import { FormDataRequester } from "./formDataRequester";
import { JsonRequester, RequestData } from "./jsonRequester";
import { NbResponseHandler } from "./nbResponseHandler";
export class HttpConnection implements ServiceConnection {
  #host: string;
  #sessionToken?: string;
  #peekRequest: (data: RequestData<any>) => void;
  #peekResponse: (response: AxiosResponse<any>) => void;

  constructor(domain: string, peekRequest: (data: RequestData<any>) => void, peekResponse: (response: AxiosResponse<any>) => void) {
    this.#host = "https://" + domain;
    this.#peekRequest = peekRequest
    this.#peekResponse = peekResponse

  }

  async nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    paged: boolean = false
  ): Promise<T2> {
    const url = this.getNbUrl(endpoint);
    const headers = this.getHeaders();
    const requestData = { url, requestType, params: message, headers: headers };
    this.#peekRequest(requestData)
    var response = await JsonRequester.request(requestData);
    this.#peekResponse(response)
    return await NbResponseHandler.handle<T2>(response, paged);

  }

  async nbFormDataRequest<T1, T2>(
    endpoint: string,
    fields: [string, string | number | boolean][],
    files: [string, File][],
    message?: T1,
  ): Promise<T2> {
    const url = this.getNbUrl(endpoint);
    const formData = FormDataBuilder.build({ fields, files, message: message || {} })
    const headers = this.getHeaders();
    this.#peekRequest({ url, requestType: RequestType.POST, params: formData, headers: headers })
    try {
      const response = await FormDataRequester.post({ url, formData, headers: headers });
      this.#peekResponse(response)
      return await NbResponseHandler.handle<T2>(response, false);
    } catch (error: any) {
      if (error.response) {
        this.#peekResponse(error.response)
        throw new NotbankError(
          `Notbank Error. http status=${error.response.status}. ${JSON.stringify(error.response.data)}`,
          -1
        );
      }
      // Request was made but no response was received (Network / Timeout issues)
      else if (error.request) {
        throw new NotbankError(`Notbank Error. No response received. ${error}`, -1);
      }
      // Something went wrong setting up the request itself
      throw new NotbankError(`Notbank Error. ${error}`, -1);
    }
  }

  async apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    extraHeaders?: any
  ): Promise<T2> {
    const url = this.getApUrl(endpoint);
    const headers = { ...extraHeaders, ...this.getHeaders() }
    const requestData = { url, requestType, params: message, headers: headers }
    this.#peekRequest(requestData)
    const response = await JsonRequester.request(requestData);
    this.#peekResponse(response)
    return await ApResponseHandler.handle<T2>(response);
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    var response = await this.apRequest<any, AuthenticateUserResponse>(
      Endpoint.AUTHENTICATE_USER,
      RequestType.GET,
      null,
      params
    );
    this.#sessionToken = response.SessionToken;
  }

  updateSessionToken(aptoken: string): void {
    this.#sessionToken = aptoken;
  }

  subscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  unsubscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    callback_ids: string[]
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  setResponseHandler<T1, T2>(responseHandler: ResponseHandler<T1, T2>): void {
    throw new Error("Method not implemented.");
  }

  setResponseHandlers<T>(responseHandlers: SubscriptionHandler<T>[]): void {
    throw new Error("Method not implemented.");
  }

  getApUrl(endpoint: string): string {
    return this.#host + "/ap/" + endpoint;
  }

  getNbUrl(endpoint: string): string {
    return this.#host + "/api/nb/" + endpoint;
  }

  connect(): Promise<void> {
    return Promise.resolve();
  }

  close(): Promise<void> {
    return Promise.resolve();
  }

  private getHeaders() {
    if (this.#sessionToken) {
      return { aptoken: this.#sessionToken }
    }
    return {}
  }
}
