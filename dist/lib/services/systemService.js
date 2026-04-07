import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class SystemService {
    constructor(connection) {
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#ping
     */
    ping() {
        return this.connection.apRequest(Endpoint.PING, RequestType.POST);
    }
    /**
     * https://apidoc.notbank.exchange/#healthcheck
     */
    healthCheck() {
        return this.connection.apRequest(Endpoint.HEALTH_CHECK, RequestType.POST);
    }
}
