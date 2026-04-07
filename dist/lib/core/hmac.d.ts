export declare function getNonce(): string;
export declare function sign(apiPublicKey: string, apiSecretKey: string, userId: number, nonce: string): string;
