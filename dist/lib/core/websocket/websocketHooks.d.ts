export interface WebsocketHooks {
    onOpen?: (event: any) => void;
    onClose?: (event: any) => void;
    onMessage?: (event: any) => void;
    onError?: (event: any) => void;
}
