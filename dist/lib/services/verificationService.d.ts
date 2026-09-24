import { ServiceConnection } from "../core/serviceClient.js";
import { BasicVerificationResponse, EnumType, GetInstitutionalCompanySchemasRequest, GetInstitutionalMemberSchemasRequest, InstitutionalMember, StartInstitutionalVerificationRequest, StartInstitutionalVerificationResponse, TraderPlusVerificationSchemasRequest, VerificationStatus, VerificationStatusRequest, VerifyBasicRequest, VerifyInstitutionalCompanyRequest, VerifyInstitutionalDocumentRequest, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, VerifyTraderRequest } from "../models/index.js";
export declare class VerificationService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    verifyBasic(request: VerifyBasicRequest): Promise<BasicVerificationResponse>;
    verifyTrader(request: VerifyTraderRequest): Promise<void>;
    verifyTraderPlus(request: VerifyTraderPlusRequest): Promise<void>;
    getTraderPlusVerificationSchemas(request: TraderPlusVerificationSchemasRequest): Promise<any>;
    /**
     * Starts the institutional verification of the authenticated user and
     * returns the Sumsub url the user has to be sent to.
     *
     * It replaces the whole institutional flow that used to be spread over the
     * company, members and documents endpoints: the user no longer fills
     * declarations against Notbank, Sumsub collects everything instead.
     *
     * The account must be a business account with an active institutional
     * verification process, otherwise the server answers with an
     * `invalid_request` error.
     *
     * The url may come back as null even on a successful response, see
     * {@link StartInstitutionalVerificationResponse.link}.
     */
    startInstitutionalVerification(request?: StartInstitutionalVerificationRequest): Promise<StartInstitutionalVerificationResponse>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalCompanySchemas(request: GetInstitutionalCompanySchemasRequest): Promise<any>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    verifyInstitutionalCompany(request: VerifyInstitutionalCompanyRequest): Promise<void>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalCompanyVerificationStatus(): Promise<any>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalMemberTypes(): Promise<EnumType[]>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalMemberSchemas(request: GetInstitutionalMemberSchemasRequest): Promise<any>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    verifyInstitutionalMember(request: VerifyInstitutionalMemberRequest): Promise<void>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalMemberVerificationStatus(): Promise<InstitutionalMember[]>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalDocumentTypes(): Promise<EnumType[]>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<void>;
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalDocumentVerificationStatus(): Promise<any[]>;
    getVerificationStatus(request?: VerificationStatusRequest): Promise<VerificationStatus>;
}
