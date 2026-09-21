import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { BasicVerificationResponse, EnumType, GetInstitutionalCompanySchemasRequest, GetInstitutionalMemberSchemasRequest, InstitutionalMember, StartInstitutionalVerificationRequest, StartInstitutionalVerificationResponse, TraderPlusVerificationSchemasRequest, VerificationStatus, VerificationStatusRequest, VerifyBasicRequest, VerifyInstitutionalCompanyRequest, VerifyInstitutionalDocumentRequest, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, VerifyTraderRequest } from "../models";

export class VerificationService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  verifyBasic(request: VerifyBasicRequest): Promise<BasicVerificationResponse> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_BASIC,
      RequestType.POST,
      request
    );
  }

  verifyTrader(request: VerifyTraderRequest): Promise<void> {
    let { document_address_file, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_TRADER,
      [],
      [["document_address_file", document_address_file]],
      cleanRequest
    );
  }


  verifyTraderPlus(request: VerifyTraderPlusRequest): Promise<void> {
    let { files, fields, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_TRADER_PLUS,
      fields,
      files,
      cleanRequest
    );
  }

  getTraderPlusVerificationSchemas(request: TraderPlusVerificationSchemasRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER_PLUS_SCHEMAS,
      RequestType.GET,
      request
    );
  }

  /**
   * Starts the institutional verification of the authenticated user and
   * returns the Sumsub credentials needed to run it.
   *
   * It replaces the whole institutional flow that used to be spread over the
   * company, members and documents endpoints: the user no longer fills
   * declarations against Notbank, Sumsub collects everything instead.
   *
   * The account must be a business account with an active institutional
   * verification process, otherwise the server answers with an
   * `invalid_request` error.
   */
  startInstitutionalVerification(
    request: StartInstitutionalVerificationRequest = {}
  ): Promise<StartInstitutionalVerificationResponse> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL,
      RequestType.POST,
      request
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalCompanySchemas(request: GetInstitutionalCompanySchemasRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS,
      RequestType.GET,
      request
    );
  }


  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  verifyInstitutionalCompany(request: VerifyInstitutionalCompanyRequest): Promise<void> {
    let { files, fields, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      fields,
      files || [],
      cleanRequest,
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalCompanyVerificationStatus(): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      RequestType.GET
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalMemberTypes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES,
      RequestType.GET
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalMemberSchemas(request: GetInstitutionalMemberSchemasRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS,
      RequestType.GET,
      request
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  verifyInstitutionalMember(request: VerifyInstitutionalMemberRequest): Promise<void> {
    let { files, fields, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      fields,
      files,
      cleanRequest,
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalMemberVerificationStatus(): Promise<InstitutionalMember[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      RequestType.GET
    );
  }



  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalDocumentTypes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES,
      RequestType.GET
    );
  }


  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<void> {
    let { file, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      [],
      [["file", file]],
      cleanRequest
    );
  }

  /**
   * @deprecated the institutional flow moved to Sumsub. Use
   * {@link VerificationService.startInstitutionalVerification}. The endpoint
   * behind this method was retired server side and answers with a 404.
   */
  getInstitutionalDocumentVerificationStatus(): Promise<any[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      RequestType.GET
    );
  }


  getVerificationStatus(request: VerificationStatusRequest = {}): Promise<VerificationStatus> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_STATUS,
      RequestType.GET,
      request
    );
  }
}
