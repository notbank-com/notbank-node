export interface StartInstitutionalVerificationRequest {
    /**
     * Phone number. The api accepts this field but does not read it: the Sumsub
     * applicant is always built with the phone already registered for the
     * authenticated user, so sending it changes nothing. Kept for compatibility
     * with the endpoint's schema.
     */
    phone?: string;
}
