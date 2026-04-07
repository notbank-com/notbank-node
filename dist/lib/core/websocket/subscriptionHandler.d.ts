export interface SubscriptionHandler<T> {
    eventName: string;
    eventHandler: (event: T) => void;
}
