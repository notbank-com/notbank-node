import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class YieldService {
    constructor(connection) {
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getyieldproducts
     */
    getYieldProducts() {
        return this.connection.nbRequest(Endpoint.YIELD_PRODUCTS, RequestType.POST);
    }
    depositToYield(request) {
        return this.connection.nbRequest(Endpoint.YIELD_DEPOSIT, RequestType.POST, request);
    }
    withdrawFromYield(request) {
        return this.connection.nbRequest(Endpoint.YIELD_WITHDRAW, RequestType.POST, request);
    }
}
