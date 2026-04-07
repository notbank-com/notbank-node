var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { completeParams } from "../utils/completeParams.js";
export class FeeService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositfee
     */
    getDepositFee(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_DEPOSIT_FEE, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getwithdrawfee
     */
    getWithdrawFee(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_WITHDRAW_FEE, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getomswithdrawfees
     */
    getOMSWithdrawFees(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_OMS_WITHDRAW_FEES, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getomsdepositfees
     */
    getOMSDepositFees(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return this.connection.apRequest(Endpoint.GET_OMS_DEPOSIT_FEES, RequestType.POST, paramsWithOMSId);
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountfees
     */
    getAccountFees(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return this.connection.apRequest(Endpoint.GET_ACCOUNT_FEES, RequestType.POST, paramsWithOMSId);
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getorderfee
     */
    getOrderFee(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return this.connection.apRequest(Endpoint.GET_ORDER_FEE, RequestType.POST, paramsWithOMSId);
        });
    }
}
