export interface StartInstitutionalVerificationResponse {
    /**
     * Sumsub url the user has to be sent to in order to run the verification.
     *
     * It is null when the server issued the Sumsub applicant but could not
     * resolve the url for it. The request still succeeds in that case, so read
     * this field before redirecting.
     */
    link: string | null;
    /** uuid of the user the institutional verification process belongs to. */
    user_id: string;
}
