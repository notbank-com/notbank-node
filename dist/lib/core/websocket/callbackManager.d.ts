import { MessageFrame } from "./messageFrame.js";
export declare class CallbackManager {
    #private;
    constructor();
    putCallback(callback: (event: MessageFrame) => void): number;
    popCallback(sequenceNumber: number): (event: MessageFrame) => void;
    addSubscriptionCallback(callbackId: string, callback: (event: MessageFrame) => void): void;
    getSubscriptionCallback(callbackIdentifier: string): (event: MessageFrame) => void;
    removeSubscriptionCallback(callbackIds: string[]): void;
}
