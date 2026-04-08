import { ServiceConnection } from "../core/serviceClient.js";
import { YieldProduct } from "../models/index.js";
import { DepositToYieldRequest, WithdrawFromYieldRequest } from "../models/request/index.js";
export declare class YieldService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getyieldproducts
     */
    getYieldProducts(): Promise<YieldProduct[]>;
    depositToYield(request: DepositToYieldRequest): Promise<number>;
    withdrawFromYield(request: WithdrawFromYieldRequest): Promise<number>;
}
