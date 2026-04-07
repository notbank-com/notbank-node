import { ServiceConnection } from "../core/serviceClient.js";
import { HealthCheck } from "../models/response/healthCheck.js";
import { Pong } from "../models/response/pong.js";
export declare class SystemService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#ping
     */
    ping(): Promise<Pong>;
    /**
     * https://apidoc.notbank.exchange/#healthcheck
     */
    healthCheck(): Promise<HealthCheck>;
}
