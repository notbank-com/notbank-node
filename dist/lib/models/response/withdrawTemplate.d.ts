export interface WithdrawTemplate {
    FullName: string | null;
    Language: string | null;
    Comment: string | null;
    BankAddress: string | null;
    BankAccountNumber: string | null;
    BankAccountName: string | null;
    SwiftCode: string | null;
    ExternalAddress: string | null;
}
export interface WithdrawTemplateResponse {
    Template: string;
}
