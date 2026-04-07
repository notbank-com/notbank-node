export interface WebAuthenticateUserResponse {
    Authenticated: boolean;
    SessionToken: string;
    UserId: string;
    twoFAToken: string;
    Requires2FA: string;
    AuthType: string;
    errormsg: string;
    AddtlInfo: "";
}
