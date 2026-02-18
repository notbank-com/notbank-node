import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { CreateSubAccountRequest } from "../models/request/createSubAccount";
import { GetSubAccountsRequest } from "../models/request/getSubAccounts";
import { SubAccounts } from "../models/response/subAccount";

export class SubAccountService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  createSubAccount(request: CreateSubAccountRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.SUBACCOUNT,
      RequestType.POST,
      request
    );
  }

  getSubAccounts(request: GetSubAccountsRequest): Promise<SubAccounts> {
    return this.connection.nbRequest(
      Endpoint.SUBACCOUNT,
      RequestType.GET,
      request
    );
  }
}
