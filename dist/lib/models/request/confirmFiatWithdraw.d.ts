export interface ConfirmFiatWithdrawRequest {
    withdrawal_id: string;
    attempt_code: string;
    user_id?: string;
}
