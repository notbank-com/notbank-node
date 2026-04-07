import { AuthenticateUserRequest } from "../../models/index.js";
import { RequestType, ServiceConnection } from "../serviceClient.js";
import { MessageFrame } from "../websocket/messageFrame.js";
import { ResponseHandler } from "../websocket/responseHandler.js";
import { SubscriptionHandler } from "../websocket/subscriptionHandler.js";
export declare class HttpConnection implements ServiceConnection {
    #private;
    constructor(domain: string);
    nbRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1, paged?: boolean): Promise<T2>;
    nbFormDataRequest<T1, T2>(endpoint: string, fields: [string, string | number | boolean][], files: [string, File][], message?: T1): Promise<T2>;
    apRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1, extraHeaders?: any): Promise<T2>;
    authenticateUser(params: AuthenticateUserRequest): Promise<void>;
    updateSessionToken(aptoken: string): void;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callback_ids: string[]): Promise<void>;
    setResponseHandler<T1, T2>(responseHandler: ResponseHandler<T1, T2>): void;
    setResponseHandlers<T>(responseHandlers: SubscriptionHandler<T>[]): void;
    getApUrl(endpoint: string): string;
    getNbUrl(endpoint: string): string;
    connect(): Promise<void>;
    close(): Promise<void>;
    private getHeaders;
}
