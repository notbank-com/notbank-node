export interface UserInfo {
    UserId: number;
    Username: string;
    Email: string;
    PasswordHash: string;
    PendingEmailCode: string;
    EmailVerified: boolean;
    AccountId: number;
    DateTimeCreated: string;
    AffiliateId: number;
    RefererId: number;
    OMSId: number;
    Use2FA: boolean;
    Salt: string;
    PendingCodeTime: string;
    Locked: boolean;
    LockedTime: string;
    NumberOfFailedAttempt: number;
    MarginBorrowerEnabled: boolean;
    MarginAcquisitionHalt: boolean;
    OperatorId: number;
}
