import { DocumentAdressType } from "../enums/documentAdressType.js";
export interface VerifyTraderRequest {
    pep: boolean;
    subject_comply: boolean;
    is_public_servant: boolean;
    document_address_file: File;
    document_address_type: DocumentAdressType;
}
