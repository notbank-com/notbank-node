import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class SavingsService {
    constructor(connection) {
        this.connection = connection;
    }
    depositToYield(request) {
        return this.connection.nbRequest(Endpoint.SAVINGS_DEPOSIT, RequestType.POST, request);
    }
    withdrawFromYield(request) {
        return this.connection.nbRequest(Endpoint.SAVINGS_WITHDRAW, RequestType.POST, request);
    }
}
