export interface VerifyInstitutionalCompanyRequest {
    declaration_template_id: number;
    declaration_id: number;
    country: string;
    user_id?: string;
    fields: [string, number | boolean | string][];
    files?: [string, File][];
}
