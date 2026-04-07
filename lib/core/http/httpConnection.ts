import { Endpoint } from "../../constants/endpoints";
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse
} from "../../models";
import { RequestType, ServiceConnection } from "../serviceClient";
import { MessageFrame } from "../websocket/messageFrame";
import { ResponseHandler } from "../websocket/responseHandler";
import { SubscriptionHandler } from "../websocket/subscriptionHandler";
import { ApResponseHandler } from "./apResponseHandler";
import { FormDataBuilder } from "./formDataBuilder";
import { FormDataRequester } from "./formDataRequester";
import { JsonRequester } from "./jsonRequester";
import { NbResponseHandler } from "./nbResponseHandler";
export class HttpConnection implements ServiceConnection {
  #host: string;
  #sessionToken?: string;

  constructor(domain: string) {
    this.#host = "https://" + domain;
  }

  async nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    paged: boolean = false
  ): Promise<T2> {
    const url = this.getNbUrl(endpoint);
    const headers = this.getHeaders();
    var response = await JsonRequester.request({ url, requestType, params: message, extraHeaders: headers });
    
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
    const response = await FormDataRequester.post({ url, formData, extraHeaders: headers });
    return await NbResponseHandler.handle<T2>(response, false);
  }

  async apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    extraHeaders?: any
  ): Promise<T2> {
    const url = this.getApUrl(endpoint);
    const headers = { ...extraHeaders, ...this.getHeaders() }
    const response = await JsonRequester.request({
      url,
      requestType,
      params: message,
      extraHeaders: headers
    });
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
