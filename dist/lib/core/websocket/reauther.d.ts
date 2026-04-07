import { WebsocketConnection } from "./websocketConnection.js";
export declare class Reauther {
    private authenticateFn?;
    constructor();
    updateAuthentication(authenticateFn: (connection: WebsocketConnection) => void): void;
    removeAuthentication(): void;
    makeAuthentication(connection: WebsocketConnection): void;
}
