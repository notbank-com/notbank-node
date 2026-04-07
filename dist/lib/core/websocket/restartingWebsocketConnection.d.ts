import { AuthenticateUserRequest } from "../../models/index.js";
import { RequestType, ServiceConnection } from "../serviceClient.js";
import { MessageFrame } from "./messageFrame.js";
import { Restarter } from "./restarter.js";
import { SubscriptionHandler } from "./subscriptionHandler.js";
export declare class RestartingWebsocketConnection implements ServiceConnection {
    private restarter;
    constructor(params: {
        restarter: Restarter;
    });
    nbFormDataRequest<T1, T2>(endpoint: string, fields: [string, string | number | boolean][], files: [string, File][], message?: T1): Promise<T2>;
    updateSessionToken(sessionToken: string): void;
    apRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    nbRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1, paged?: boolean): Promise<T2>;
    authenticateUser(params: AuthenticateUserRequest): Promise<void>;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionHandlers: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callback_ids: string[]): Promise<void>;
    get readyState(): number;
    connect(): Promise<void>;
    close(): Promise<void>;
}
