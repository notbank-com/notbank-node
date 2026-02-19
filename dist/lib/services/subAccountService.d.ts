import { ServiceConnection } from "../core/serviceClient.js";
import { CreateSubAccountRequest } from "../models/request/createSubAccount.js";
import { GetSubAccountsRequest } from "../models/request/getSubAccounts.js";
import { SubAccounts } from "../models/response/subAccount.js";
export declare class SubAccountService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    createSubAccount(request: CreateSubAccountRequest): Promise<void>;
    getSubAccounts(request: GetSubAccountsRequest): Promise<SubAccounts>;
}
