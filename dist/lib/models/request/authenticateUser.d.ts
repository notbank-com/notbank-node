export interface AuthenticateUserRequest {
    APIKey: string;
    Signature: string;
    UserId: number;
    Nonce: string;
}
