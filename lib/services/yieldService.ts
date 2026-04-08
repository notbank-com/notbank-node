import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { YieldProduct } from "../models";
import { DepositToYieldRequest, WithdrawFromYieldRequest } from "../models/request";

export class YieldService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getyieldproducts
   */
  getYieldProducts(): Promise<YieldProduct[]> {
    return this.connection.nbRequest(
      Endpoint.YIELD_PRODUCTS,
      RequestType.POST
    );
  }


  depositToYield(request: DepositToYieldRequest): Promise<number> {
    return this.connection.nbRequest(
      Endpoint.YIELD_DEPOSIT,
      RequestType.POST,
      request
    );
  }

  withdrawFromYield(request: WithdrawFromYieldRequest): Promise<number> {
    return this.connection.nbRequest(
      Endpoint.YIELD_WITHDRAW,
      RequestType.POST,
      request
    );
  }
}
