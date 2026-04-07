import { MessageFrame } from "./messageFrame.js";
export declare class SubscriptionIdentifier {
    #private;
    static get(eventName: string, firstIdentifier?: number | null, secondIdentifier?: number | null): string;
    static getFromMessageFrame(message: MessageFrame): string;
}
