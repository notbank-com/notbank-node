import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { DepositToYieldRequest, WithdrawFromYield as WithdrawFromYieldRequest, YieldProduct } from "../models";

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
      RequestType.GET
    );
  }


  /**
   * https://apidoc.notbank.exchange/#deposittoyield
   */
  depositToYield(request: DepositToYieldRequest): Promise<number> {
    return this.connection.nbRequest(
      Endpoint.SAVINGS_DEPOSIT,
      RequestType.POST,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#withdrawfromyield
   */
  withdrawFromYield(request: WithdrawFromYieldRequest): Promise<number> {
    return this.connection.nbRequest(
      Endpoint.SAVINGS_DEPOSIT,
      RequestType.POST,
      request
    );
  }
}