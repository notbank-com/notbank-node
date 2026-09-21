export interface StartInstitutionalVerificationResponse {
  /**
   * Sumsub access token. It is the credential the Sumsub Web SDK (or the
   * mobile SDKs) needs to open the verification flow for this applicant.
   */
  token: string
  /** uuid of the user the institutional verification process belongs to. */
  user_id: string
  /**
   * Ready to use Sumsub url, when the server builds it instead of handing out
   * a bare token. Optional: as of today the api answers with {@link token},
   * so read this field defensively.
   */
  link?: string
}
