import { MessageFrame } from "../core/websocket/messageFrame.js";
import { SubscriptionHandler } from "../core/websocket/subscriptionHandler.js";
export declare function newMaybeHandler<T>(eventName: string, recordHandler: ((record: T) => void) | null): SubscriptionHandler<MessageFrame> | null;
export declare function newHandler<T>(eventName: string, recordHandler: (record: T) => void): SubscriptionHandler<MessageFrame>;
export declare function parseRecord<T>(jsonData: string): T;
