export interface ResponseHandler<T1, T2> {
    eventName: string;
    eventHandler: (event: T1) => T2;
}
