import { AuthenticateUserRequest } from "../models/request/authenticateUser.js";
import { MessageFrame } from "./websocket/messageFrame.js";
import { SubscriptionHandler } from "./websocket/subscriptionHandler.js";
export interface ServiceConnection {
    apRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    nbRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1, paged?: boolean): Promise<T2>;
    nbFormDataRequest<T1, T2>(endpoint: string, fields: [string, string | number | boolean][], files: [string, File][], message?: T1): Promise<T2>;
    authenticateUser(params: AuthenticateUserRequest): Promise<void>;
    updateSessionToken(sessionToken: string): any;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionHandlers: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callback_ids: string[]): Promise<void>;
    connect(): Promise<void>;
    close(): Promise<void>;
}
export declare enum RequestType {
    NONE = "NONE",
    POST = "POST",
    GET = "GET",
    DELETE = "DELETE"
}
