import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { BasicVerificationResponse, EnumType, GetInstitutionalCompanySchemasRequest, GetInstitutionalMemberSchemasRequest, InstitutionalMember, TraderPlusVerificationSchemasRequest, VerificationStatus, VerificationStatusRequest, VerifyBasicRequest, VerifyInstitutionalCompanyRequest, VerifyInstitutionalDocumentRequest, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, VerifyTraderRequest } from "../models";

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

  getInstitutionalCompanySchemas(request: GetInstitutionalCompanySchemasRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS,
      RequestType.GET,
      request
    );
  }


  verifyInstitutionalCompany(request: VerifyInstitutionalCompanyRequest): Promise<void> {
    let { files, fields, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      fields,
      files || [],
      cleanRequest,
    );
  }

  getInstitutionalCompanyVerificationStatus(): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      RequestType.GET
    );
  }

  getInstitutionalMemberTypes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES,
      RequestType.GET
    );
  }

  getInstitutionalMemberSchemas(request: GetInstitutionalMemberSchemasRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS,
      RequestType.GET,
      request
    );
  }

  verifyInstitutionalMember(request: VerifyInstitutionalMemberRequest): Promise<void> {
    let { files, fields, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      fields,
      files,
      cleanRequest,
    );
  }

  getInstitutionalMemberVerificationStatus(): Promise<InstitutionalMember[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      RequestType.GET
    );
  }



  getInstitutionalDocumentTypes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES,
      RequestType.GET
    );
  }


  verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<void> {
    let { file, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      [],
      [["file", file]],
      cleanRequest
    );
  }

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
