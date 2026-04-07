import { ServiceConnection } from "../core/serviceClient.js";
import { GetAccountFeesRequest } from "../models/request/getAccountFees.js";
import { GetDepositFeeRequest } from "../models/request/getDepositFee.js";
import { GetOMSDepositFeesRequest } from "../models/request/getOMSDepositFees.js";
import { GetOMSWithdrawFeesRequest } from "../models/request/getOMSWithdrawFees.js";
import { GetOrderFeeRequest } from "../models/request/getOrderFee.js";
import { GetWithdrawFeeRequest } from "../models/request/getWithdrawFee.js";
import { AccountFee } from "../models/response/getAccountFees.js";
import { DepositFee } from "../models/response/getDepositFee.js";
import { OMSDepositFee } from "../models/response/getOMSDepositFees.js";
import { OMSWithdrawFee } from "../models/response/getOMSWithdrawFees.js";
import { OrderFee } from "../models/response/getOrderFee.js";
import { WithdrawFee } from "../models/response/getWithdrawFee.js";
export declare class FeeService {
    connection: ServiceConnection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getdepositfee
     */
    getDepositFee(params: GetDepositFeeRequest): Promise<DepositFee>;
    /**
     * https://apidoc.notbank.exchange/#getwithdrawfee
     */
    getWithdrawFee(params: GetWithdrawFeeRequest): Promise<WithdrawFee>;
    /**
     * https://apidoc.notbank.exchange/#getomswithdrawfees
     */
    getOMSWithdrawFees(params: GetOMSWithdrawFeesRequest): Promise<OMSWithdrawFee[]>;
    /**
     * https://apidoc.notbank.exchange/#getomsdepositfees
     */
    getOMSDepositFees(params: GetOMSDepositFeesRequest): Promise<OMSDepositFee[]>;
    /**
     * https://apidoc.notbank.exchange/#getaccountfees
     */
    getAccountFees(params: GetAccountFeesRequest): Promise<AccountFee[]>;
    /**
     * https://apidoc.notbank.exchange/#getorderfee
     */
    getOrderFee(params: GetOrderFeeRequest): Promise<OrderFee>;
}
