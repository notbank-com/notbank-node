import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class SubAccountService {
    constructor(connection) {
        this.connection = connection;
    }
    createSubAccount(request) {
        return this.connection.nbRequest(Endpoint.SUBACCOUNT, RequestType.POST, request);
    }
    getSubAccounts(request) {
        return this.connection.nbRequest(Endpoint.SUBACCOUNT, RequestType.GET, request);
    }
}
