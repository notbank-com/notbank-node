import { ServiceConnection } from "../core/serviceClient.js";
import { GetAccountInfoRequest } from "../models/request/getAccountInfo.js";
import { GetAccountInstrumentStatisticsRequest } from "../models/request/getAccountInstrumentStatistics.js";
import { GetAccountPositionRequest } from "../models/request/getAccountPositions.js";
import { GetAccountTransactionsRequest } from "../models/request/getAccountTransactions.js";
import { AccountInfo } from "../models/response/accountInfo.js";
import { AccountPosition } from "../models/response/accountPositions.js";
import { AccountInstrumentStatistics } from "../models/response/getAccountInstrumentStatistics.js";
import { AccountTransaction } from "../models/response/getAccountTransactions.js";
export declare class AccountService {
    connection: ServiceConnection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getaccounttransactions
     */
    getAccountTransactions(request: GetAccountTransactionsRequest): Promise<AccountTransaction[]>;
    /**
     * https://apidoc.notbank.exchange/#getaccountpositions
     */
    getAccountPositions(params: GetAccountPositionRequest): Promise<AccountPosition[]>;
    /**
     * https://apidoc.notbank.exchange/#getaccountinstrumentstatistics
     */
    getAccountInstrumentStatistics(params: GetAccountInstrumentStatisticsRequest): Promise<AccountInstrumentStatistics[]>;
    /**
     * https://apidoc.notbank.exchange/#getaccountinfo
     */
    getAccountInfo(params?: GetAccountInfoRequest): Promise<AccountInfo>;
}
