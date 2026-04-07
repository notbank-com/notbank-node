export interface VerifyInstitutionalMemberRequest {
    member_type: number;
    member_template_id: number;
    fields: [string, number | boolean | string][];
    files: [string, File][];
}
