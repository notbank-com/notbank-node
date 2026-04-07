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
    getInstitutionalCompanySchemas(request) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS, RequestType.GET, request);
    }
    verifyInstitutionalCompany(request) {
        let _a = Object.assign({}, request), { files, fields } = _a, cleanRequest = __rest(_a, ["files", "fields"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY, fields, files || [], cleanRequest);
    }
    getInstitutionalCompanyVerificationStatus() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY, RequestType.GET);
    }
    getInstitutionalMemberTypes() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES, RequestType.GET);
    }
    getInstitutionalMemberSchemas(request) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS, RequestType.GET, request);
    }
    verifyInstitutionalMember(request) {
        let _a = Object.assign({}, request), { files, fields } = _a, cleanRequest = __rest(_a, ["files", "fields"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS, fields, files, cleanRequest);
    }
    getInstitutionalMemberVerificationStatus() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS, RequestType.GET);
    }
    getInstitutionalDocumentTypes() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES, RequestType.GET);
    }
    verifyInstitutionalDocument(request) {
        let _a = Object.assign({}, request), { file } = _a, cleanRequest = __rest(_a, ["file"]);
        return this.connection.nbFormDataRequest(Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS, [], [["file", file]], cleanRequest);
    }
    getInstitutionalDocumentVerificationStatus() {
        return this.connection.nbRequest(Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS, RequestType.GET);
    }
    getVerificationStatus(request = {}) {
        return this.connection.nbRequest(Endpoint.VERIFICATION_STATUS, RequestType.GET, request);
    }
}
