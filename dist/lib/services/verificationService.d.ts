import { ServiceConnection } from "../core/serviceClient.js";
import { BasicVerificationResponse, EnumType, GetInstitutionalCompanySchemasRequest, GetInstitutionalMemberSchemasRequest, InstitutionalMember, TraderPlusVerificationSchemasRequest, VerificationStatus, VerificationStatusRequest, VerifyBasicRequest, VerifyInstitutionalCompanyRequest, VerifyInstitutionalDocumentRequest, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, VerifyTraderRequest } from "../models/index.js";
export declare class VerificationService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    verifyBasic(request: VerifyBasicRequest): Promise<BasicVerificationResponse>;
    verifyTrader(request: VerifyTraderRequest): Promise<void>;
    verifyTraderPlus(request: VerifyTraderPlusRequest): Promise<void>;
    getTraderPlusVerificationSchemas(request: TraderPlusVerificationSchemasRequest): Promise<any>;
    getInstitutionalCompanySchemas(request: GetInstitutionalCompanySchemasRequest): Promise<any>;
    verifyInstitutionalCompany(request: VerifyInstitutionalCompanyRequest): Promise<void>;
    getInstitutionalCompanyVerificationStatus(): Promise<any>;
    getInstitutionalMemberTypes(): Promise<EnumType[]>;
    getInstitutionalMemberSchemas(request: GetInstitutionalMemberSchemasRequest): Promise<any>;
    verifyInstitutionalMember(request: VerifyInstitutionalMemberRequest): Promise<void>;
    getInstitutionalMemberVerificationStatus(): Promise<InstitutionalMember[]>;
    getInstitutionalDocumentTypes(): Promise<EnumType[]>;
    verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<void>;
    getInstitutionalDocumentVerificationStatus(): Promise<any[]>;
    getVerificationStatus(request?: VerificationStatusRequest): Promise<VerificationStatus>;
}
