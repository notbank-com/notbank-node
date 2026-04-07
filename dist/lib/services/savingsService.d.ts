import { ServiceConnection } from "../core/serviceClient.js";
import { DepositToYieldRequest, WithdrawFromYieldRequest } from "../models/request/index.js";
export declare class SavingsService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    depositToYield(request: DepositToYieldRequest): Promise<number>;
    withdrawFromYield(request: WithdrawFromYieldRequest): Promise<number>;
}
