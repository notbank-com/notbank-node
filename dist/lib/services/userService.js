import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { completeParams } from "../utils/completeParams.js";
export class UserService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getuseraccounts
     */
    getUserAccounts(request = {}) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_USER_ACCOUNTS, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#getuserdevices
     */
    getUserDevices(request) {
        return this.connection.apRequest(Endpoint.GET_USER_DEVICES, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getuserinfo
     */
    getUserInfo(request) {
        return this.connection.apRequest(Endpoint.GET_USER_INFO, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getuserpermissions
     */
    getUserPermissions(request) {
        return this.connection.apRequest(Endpoint.GET_USER_PERMISSIONS, RequestType.POST, request);
    }
}
