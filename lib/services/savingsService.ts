import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { YieldProductType } from "../models";
import { DepositToYieldRequest, WithdrawFromYieldRequest } from "../models/request";

export class SavingsService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }


  /**
   * https://apidoc.notbank.exchange/#getyieldproducts
   */
  getYieldProducts(): Promise<YieldProductType[]> {
    return this.connection.nbRequest(
      Endpoint.YIELD_PRODUCTS,
      RequestType.GET
    );
  }


  depositToYield(request: DepositToYieldRequest): Promise<number> {
    return this.connection.nbRequest(
      Endpoint.SAVINGS_DEPOSIT,
      RequestType.POST,
      request
    );
  }

  withdrawFromYield(request: WithdrawFromYieldRequest): Promise<number> {
    return this.connection.nbRequest(
      Endpoint.SAVINGS_WITHDRAW,
      RequestType.POST,
      request
    );
  }
}
