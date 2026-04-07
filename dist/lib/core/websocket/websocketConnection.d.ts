import { MessageFrame } from "./messageFrame.js";
import { SubscriptionHandler } from "./subscriptionHandler.js";
import { RequestType, ServiceConnection } from "../serviceClient.js";
import { AuthenticateUserRequest } from "../../models/index.js";
import { WebsocketConnectionConfiguration } from "./websocketConnectionConfiguration.js";
export declare class WebsocketConnection implements ServiceConnection {
    #private;
    private domain;
    private callbackManager;
    private websocket;
    private hooks;
    private peekMessageIn;
    private peekMessageOut;
    constructor(configuration: WebsocketConnectionConfiguration);
    nbFormDataRequest<T1, T2>(endpoint: string, fields: [string, string | number | boolean][], files: [string, File][], message?: T1): Promise<T2>;
    updateSessionToken(sessionToken: string): void;
    nbRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    connect(): Promise<void>;
    close(): Promise<void>;
    get readyState(): number;
    apRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callbackIds: string[]): Promise<void>;
    closeConnection(): void;
    authenticateUser(params: AuthenticateUserRequest): Promise<void>;
}
