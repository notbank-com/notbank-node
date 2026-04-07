import { ServiceConnection } from "../core/serviceClient.js";
import { GetUserAccountsRequest } from "../models/request/getUserAccounts.js";
import { GetUserDevicesRequest } from "../models/request/getUserDevices.js";
import { GetUserInfoRequest } from "../models/request/getUserInfo.js";
import { GetUserPermissionsRequest } from "../models/request/getUserPermissions.js";
import { UserDevice } from "../models/response/getUserDevices.js";
import { UserInfo } from "../models/response/getUserInfo.js";
export declare class UserService {
    connection: ServiceConnection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getuseraccounts
     */
    getUserAccounts(request?: GetUserAccountsRequest): Promise<number[]>;
    /**
     * https://apidoc.notbank.exchange/#getuserdevices
     */
    getUserDevices(request: GetUserDevicesRequest): Promise<UserDevice[]>;
    /**
     * https://apidoc.notbank.exchange/#getuserinfo
     */
    getUserInfo(request: GetUserInfoRequest): Promise<UserInfo>;
    /**
     * https://apidoc.notbank.exchange/#getuserpermissions
     */
    getUserPermissions(request: GetUserPermissionsRequest): Promise<string[]>;
}
