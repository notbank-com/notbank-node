import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetAccountInfoRequest } from "../models/request/getAccountInfo";
import { GetAccountInstrumentStatisticsRequest } from "../models/request/getAccountInstrumentStatistics";
import { GetAccountPositionRequest } from "../models/request/getAccountPositions";
import { GetAccountTransactionsRequest } from "../models/request/getAccountTransactions";
import { AccountInfo } from "../models/response/accountInfo";
import { AccountPosition } from "../models/response/accountPositions";
import { AccountInstrumentStatistics } from "../models/response/getAccountInstrumentStatistics";
import { AccountTransaction } from "../models/response/getAccountTransactions";
import { completeParams } from "../utils/completeParams";

export class AccountService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getaccounttransactions
   */
  getAccountTransactions(
    request: GetAccountTransactionsRequest
  ): Promise<AccountTransaction[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ACCOUNT_TRANSACTIONS,
      RequestType.POST,
      paramsWithOMSId
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getaccountpositions
   */
  getAccountPositions(
    params: GetAccountPositionRequest
  ): Promise<AccountPosition[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ACCOUNT_POSITIONS,
      RequestType.POST,
      paramsWithOMSId
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getaccountinstrumentstatistics
   */
  getAccountInstrumentStatistics(
    params: GetAccountInstrumentStatisticsRequest
  ): Promise<AccountInstrumentStatistics[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ACCOUNT_INSTRUMENT_STATISTICS,
      RequestType.POST,
      paramsWithOMSId
    )
  }

  /**
   * https://apidoc.notbank.exchange/#getaccountinfo
   */
  public async getAccountInfo(
    params: GetAccountInfoRequest = {}
  ): Promise<AccountInfo> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ACCOUNT_INFO,
      RequestType.POST,
      paramsWithOMSId
    )
  }
}
