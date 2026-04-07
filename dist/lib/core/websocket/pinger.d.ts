import { Restarter } from "./restarter.js";
import { WebsocketConnection } from "./websocketConnection.js";
export declare class Pinger {
    private pingIntervalMillis;
    private pingTimeoutMillis;
    private interval?;
    constructor(pingIntervalMillis?: number, pingTimeoutMillis?: number);
    startPing(connection: WebsocketConnection, restarter: Restarter): void;
    stop(): void;
}
