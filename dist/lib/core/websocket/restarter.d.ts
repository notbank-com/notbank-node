import { Reauther } from "./reauther.js";
import { Resubscriber } from "./resubscriber.js";
import { WebsocketConnection } from "./websocketConnection.js";
import { WebsocketConnectionConfiguration } from "./websocketConnectionConfiguration.js";
export declare class Restarter {
    #private;
    private reconnecting;
    private connection?;
    private connectionConfiguration;
    private pinger;
    private resubscriber;
    private reauther;
    private closeRequested;
    constructor(params: {
        connectionConfiguration: WebsocketConnectionConfiguration;
    });
    getResubscriber(): Resubscriber;
    getReauther(): Reauther;
    getConnection(): WebsocketConnection;
    reconnect(): Promise<void>;
    closeCurrentConnection(): Promise<void>;
    close(): Promise<void>;
}
