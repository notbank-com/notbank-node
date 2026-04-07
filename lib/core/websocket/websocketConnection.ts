import WebSocket from "universal-websocket-client";
import { Endpoint } from "../../constants/endpoints";
import { MessageFrame, MessageType } from "./messageFrame";
import { SubscriptionHandler } from "./subscriptionHandler";
import { RequestType, ServiceConnection } from "../serviceClient";
import {
  AuthenticateUserRequest,
  NotbankError,
  StandardResponse
} from "../../models";
import { WebsocketHooks } from "./websocketHooks";
import { CallbackManager } from "./callbackManager";
import ErrorCode from "../../constants/errorCode";
import { SubscriptionIdentifier } from "./SubscriptionIdentifier";
import { WebsocketConnectionConfiguration } from "./websocketConnectionConfiguration";

const emptyFn: (o: MessageFrame) => void = (o: MessageFrame) => { };
const DEFAULT_DOMAIN = "api.notbank.exchange";

export class WebsocketConnection implements ServiceConnection {
  private domain: string;
  private callbackManager: CallbackManager;
  private websocket: WebSocket;
  private hooks: WebsocketHooks;
  private peekMessageIn: (message: MessageFrame) => void;
  private peekMessageOut: (message: MessageFrame) => void;

  constructor(configuration: WebsocketConnectionConfiguration) {
    this.domain = configuration?.domain || DEFAULT_DOMAIN;
    this.callbackManager = new CallbackManager();
    this.hooks = configuration?.websocketHooks || {};
    this.peekMessageIn = configuration?.peekMessageIn || (_ => { });
    this.peekMessageOut = configuration?.peekMessageOut || (_ => { });
  }
  nbFormDataRequest<T1, T2>(endpoint: string, fields: [string, string | number | boolean][], files: [string, File][], message?: T1,): Promise<T2> {
    throw new Error("websocket client does not support nb form data methods.");
  }

  updateSessionToken(sessionToken: string) {
    throw new Error("websocket client does not updating session token.");
  }

  nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1
  ): Promise<T2> {
    throw new Error("websocket client does not support nb methods.");
  }

  async connect(): Promise<void> {
    this.websocket = new WebSocket("wss://" + this.domain + "/wsgateway");
    this.websocket.onopen = event => this.hooks.onOpen?.(event);
    this.websocket.onclose = event => this.hooks.onClose?.(event);
    this.websocket.onerror = event => this.hooks.onError?.(event);
    this.websocket.addEventListener("message", event => {
      const messageFrame = JSON.parse(event.data) as MessageFrame;
      this.#handleMessage(messageFrame);
    });
    this.websocket.addEventListener("message", event =>
      this.hooks.onMessage?.(event)
    );
    return new Promise<void>((resolve, _) =>
      this.websocket.addEventListener("open", _ => resolve())
    );
  }

  #getSubscriptionCallbackId(message: MessageFrame): string {
    return SubscriptionIdentifier.getFromMessageFrame(message);
  }

  #handleMessage(message: MessageFrame) {
    this.peekMessageIn(message);
    const callback = this.callbackManager.popCallback(message.i);
    if (callback != null) {
      callback(message);
      if (isErrorMessage(message)) {
        return;
      }
    }
    const callbackId = this.#getSubscriptionCallbackId(message);
    const subscriptionCallback =
      this.callbackManager.getSubscriptionCallback(callbackId);

    if (subscriptionCallback != null) {
      subscriptionCallback(message);
      return;
    }
    var lastSuffixStart = callbackId.lastIndexOf("_");
    if (lastSuffixStart == -1) {
      return;
    }
    const broaderCallbackId = callbackId.substring(0, lastSuffixStart);
    const broaderSubscriptionCallback =
      this.callbackManager.getSubscriptionCallback(callbackId);
    if (broaderSubscriptionCallback != null) {
      broaderSubscriptionCallback(message);
      return;
    }
  }

  close(): Promise<void> {
    return this.websocket.close();
  }

  get readyState(): number {
    return this.websocket.readyState;
  }

  apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1
  ): Promise<T2> {
    return this.#request(endpoint, message, MessageType.REQUEST);
  }

  #request<T1, T2>(
    endpoint: string,
    message?: T1,
    messageType: MessageType = MessageType.REQUEST
  ): Promise<T2> {
    return new Promise((resolve, reject) => {
      this.#requestToCallback(
        endpoint,
        JSON.stringify(message) || "{}",
        messageType,
        this.#handleRequestResponse<T2>(reject, resolve)
      );
    });
  }

  #handleRequestResponse<T>(
    reject: (reason?: any) => void,
    resolve: (value: T | PromiseLike<T>) => void
  ): (o: MessageFrame) => void {
    return (response: MessageFrame) => {
      try {
        var payload = JSON.parse(response.o);
      } catch (e) {
        reject(newStandardErrorFromString(response.o));
        return;
      }
      if (response.m === MessageType.ERROR) {
        reject(NotbankError.Factory.createFromApResponse(payload));
        return;
      }
      var standardResponse = payload as StandardResponse;
      if (
        standardResponse?.result === false &&
        standardResponse?.errormsg != null
      ) {
        reject(NotbankError.Factory.createFromApResponse(payload));
        return;
      }
      resolve(payload as T);
    };
  }

  async subscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]
  ): Promise<void> {
    subscriptionCallbacks.map(handler =>
      this.callbackManager.addSubscriptionCallback(
        SubscriptionIdentifier.get(
          handler.eventName,
          firstIdentifier,
          secondIdentifier
        ),
        handler.eventHandler
      )
    );
    return this.#request<T, void>(endpoint, message, MessageType.REQUEST);
  }

  async unsubscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    callbackIds: string[]
  ): Promise<void> {
    this.callbackManager.removeSubscriptionCallback(
      callbackIds.map(callbackId =>
        SubscriptionIdentifier.get(
          callbackId,
          firstIdentifier,
          secondIdentifier
        )
      )
    );
    return await this.#request(endpoint, message, MessageType.REQUEST);
  }

  #requestToCallback(
    endpoint: string,
    message: any,
    messageType: MessageType,
    callback = emptyFn
  ) {
    const sequenceNumber = this.callbackManager.putCallback(callback);
    const frame = {
      m: messageType,
      i: sequenceNumber,
      n: endpoint,
      o: message
    };
    this.peekMessageOut(frame);
    this.websocket.send(JSON.stringify(frame));
  }

  closeConnection() {
    this.websocket.socket.close();
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    await this.apRequest(Endpoint.AUTHENTICATE_USER, RequestType.NONE, params);
  }
}

function newStandardErrorFromString(errorStr: string): any {
  return NotbankError.Factory.createFromApResponse({
    result: false,
    errormsg: errorStr,
    errorcode: ErrorCode.UNDEFINED,
    statusCode: -1,
    detail: ""
  });
}

function isErrorMessage(message: MessageFrame): boolean {
  let isErrorType = message.m === MessageType.ERROR;
  if (isErrorType) {
    return true;
  }
  try {
    let standardError = message.o as StandardResponse;
    return standardError.result == false;
  } catch (e) {
    return false;
  }
}
