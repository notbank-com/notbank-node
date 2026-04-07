import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetUserAccountsRequest } from "../models/request/getUserAccounts";
import { GetUserDevicesRequest } from "../models/request/getUserDevices";
import { GetUserInfoRequest } from "../models/request/getUserInfo";
import { GetUserPermissionsRequest } from "../models/request/getUserPermissions";
import { UserDevice } from "../models/response/getUserDevices";
import { UserInfo } from "../models/response/getUserInfo";
import { completeParams } from "../utils/completeParams";

export class UserService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getuseraccounts
   */
  getUserAccounts(
    request: GetUserAccountsRequest = {}
  ): Promise<number[]> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_USER_ACCOUNTS,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getuserdevices
   */
  getUserDevices(
    request: GetUserDevicesRequest
  ): Promise<UserDevice[]> {
    return this.connection.apRequest(
      Endpoint.GET_USER_DEVICES,
      RequestType.POST,
      request
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getuserinfo
   */
  getUserInfo(
    request: GetUserInfoRequest
  ): Promise<UserInfo> {
    return this.connection.apRequest(
      Endpoint.GET_USER_INFO,
      RequestType.POST,
      request
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getuserpermissions
   */
  getUserPermissions(
    request: GetUserPermissionsRequest
  ): Promise<string[]> {
    return this.connection.apRequest(
      Endpoint.GET_USER_PERMISSIONS,
      RequestType.POST,
      request
    )
  }
}
