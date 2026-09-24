var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class VerificationService {
    constructor(connection) {
        this.connection = connection;
    }
    verifyBasic(request) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_BASIC, RequestType.POST, request);
    }
    verifyTrader(request) {
        let _a = Object.assign({}, request), { document_address_file } = _a, cleanRequest = __rest(_a, ["document_address_file"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_TRADER, [], [["document_address_file", document_address_file]], cleanRequest);
    }
    verifyTraderPlus(request) {
        let _a = Object.assign({}, request), { files, fields } = _a, cleanRequest = __rest(_a, ["files", "fields"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_TRADER_PLUS, fields, files, cleanRequest);
    }
    getTraderPlusVerificationSchemas(request) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_TRADER_PLUS_SCHEMAS, RequestType.GET, request);
    }
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
    startInstitutionalVerification(request = {}) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL, RequestType.POST, request);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalCompanySchemas(request) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS, RequestType.GET, request);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    verifyInstitutionalCompany(request) {
        let _a = Object.assign({}, request), { files, fields } = _a, cleanRequest = __rest(_a, ["files", "fields"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY, fields, files || [], cleanRequest);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalCompanyVerificationStatus() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY, RequestType.GET);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalMemberTypes() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES, RequestType.GET);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalMemberSchemas(request) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS, RequestType.GET, request);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    verifyInstitutionalMember(request) {
        let _a = Object.assign({}, request), { files, fields } = _a, cleanRequest = __rest(_a, ["files", "fields"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS, fields, files, cleanRequest);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalMemberVerificationStatus() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS, RequestType.GET);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalDocumentTypes() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES, RequestType.GET);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    verifyInstitutionalDocument(request) {
        let _a = Object.assign({}, request), { file } = _a, cleanRequest = __rest(_a, ["file"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS, [], [["file", file]], cleanRequest);
    }
    /**
     * @deprecated the institutional flow moved to Sumsub. Use
     * {@link VerificationService.startInstitutionalVerification}. The endpoint
     * behind this method was retired server side and answers with a 404.
     */
    getInstitutionalDocumentVerificationStatus() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS, RequestType.GET);
    }
    getVerificationStatus(request = {}) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_STATUS, RequestType.GET, request);
    }
}
