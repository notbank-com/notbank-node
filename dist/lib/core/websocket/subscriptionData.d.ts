import { MessageFrame } from "./messageFrame.js";
import { SubscriptionHandler } from "./subscriptionHandler.js";
export interface SubscriptionData {
    endpoint: string;
    firstIdentifier: number | null;
    secondIdentifier: number | null;
    message: any;
    subscriptionHandlers: SubscriptionHandler<MessageFrame>[];
}
