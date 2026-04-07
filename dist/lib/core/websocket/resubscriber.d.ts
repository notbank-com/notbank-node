import { SubscriptionData } from "./subscriptionData.js";
import { WebsocketConnection } from "./websocketConnection.js";
export declare class Resubscriber {
    #private;
    private currentSubscriptions;
    constructor();
    saveSubscription(data: SubscriptionData): void;
    removeSubscription(callbackIds: string[]): void;
    makeSubscriptions(connection: WebsocketConnection): void;
}
