import { Endpoint } from "../../constants/endpoints";
import { AuthenticateUserRequest } from "../../models";
import { RequestType, ServiceConnection } from "../serviceClient";
import { MessageFrame } from "./messageFrame";
import { Restarter } from "./restarter";
import { SubscriptionHandler } from "./subscriptionHandler";

export class RestartingWebsocketConnection implements ServiceConnection {
  private restarter: Restarter;

  constructor(params: { restarter: Restarter }) {
    this.restarter = params.restarter;
  }

  nbFormDataRequest<T1, T2>(endpoint: string, fields: [string, string | number | boolean][], files: [string, File][], message?: T1,): Promise<T2> {
    throw new Error("websocket client does not support nb form data methods.");
  }

  updateSessionToken(sessionToken: string) {
    throw new Error("websocket client does not support updating session token.");
  }


  apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1
  ): Promise<T2> {
    if (endpoint === Endpoint.LOGOUT) {
      this.restarter.getReauther().removeAuthentication();
    }
    return this.restarter
      .getConnection()
      .apRequest(endpoint, requestType, message);
  }

  nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    paged?: boolean
  ): Promise<T2> {
    throw new Error("websocket client does not support nb methods.");
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    await this.restarter.getConnection().authenticateUser(params);
    this.restarter
      .getReauther()
      .updateAuthentication(connection => connection.authenticateUser(params));
  }

  async subscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    subscriptionHandlers: SubscriptionHandler<MessageFrame>[]
  ): Promise<void> {
    await this.restarter
      .getConnection()
      .subscribe(
        endpoint,
        firstIdentifier,
        secondIdentifier,
        message,
        subscriptionHandlers
      );
    this.restarter.getResubscriber().saveSubscription({
      endpoint,
      firstIdentifier,
      secondIdentifier,
      message,
      subscriptionHandlers
    });
  }

  async unsubscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    callback_ids: string[]
  ): Promise<void> {
    await this.restarter
      .getConnection()
      .unsubscribe(
        endpoint,
        firstIdentifier,
        secondIdentifier,
        message,
        callback_ids
      );
    this.restarter.getResubscriber().removeSubscription(callback_ids);
  }

  get readyState(): number {
    return this.restarter.getConnection().readyState;
  }

  connect(): Promise<void> {
    return this.restarter.reconnect();
  }

  close(): Promise<void> {
    return this.restarter.close();
  }
}
