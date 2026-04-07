import { MessageFrame } from "./messageFrame.js";
import { WebsocketHooks } from "./websocketHooks.js";
export interface WebsocketConnectionConfiguration {
    domain?: string;
    websocketHooks?: WebsocketHooks;
    peekMessageIn?: (message: MessageFrame) => void;
    peekMessageOut?: (message: MessageFrame) => void;
    withReconnect?: boolean;
}
