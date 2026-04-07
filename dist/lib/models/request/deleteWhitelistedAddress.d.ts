export interface DeleteWhitelistedAddressRequest {
    whitelistedAddressId: string;
    account_id: number;
    otp: string;
    user_id?: string;
}
