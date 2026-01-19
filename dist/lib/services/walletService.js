var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WalletService_instances, _WalletService_nbPagedRequest;
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class WalletService {
    constructor(connection) {
        _WalletService_instances.add(this);
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request) {
        return __classPrivateFieldGet(this, _WalletService_instances, "m", _WalletService_nbPagedRequest).call(this, Endpoint.BANKS, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getprovinces
     */
    getProvinces(request) {
        return __classPrivateFieldGet(this, _WalletService_instances, "m", _WalletService_nbPagedRequest).call(this, Endpoint.PROVINCES, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#addclientbankaccount
     */
    AddClientBankAccount(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccount
     */
    getClientBankAccount(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId, RequestType.GET);
    }
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccounts
     */
    getClientBankAccounts(request) {
        return __classPrivateFieldGet(this, _WalletService_instances, "m", _WalletService_nbPagedRequest).call(this, Endpoint.BANK_ACCOUNTS, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#deleteclientbankaccount
     */
    deleteClientBankAccount(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId, RequestType.DELETE);
    }
    /**
     * https://apidoc.notbank.exchange/#getnetworkstemplates
     */
    getNetworksTemplates(request) {
        return this.connection.nbRequest(Endpoint.GET_NETWORKS_TEMPLATES, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositaddresses
     */
    getDepositAddresses(request) {
        return this.connection.nbRequest(Endpoint.DEPOSIT_ADDRESS, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#createdepositaddress
     */
    createDepositAddress(request) {
        return this.connection.nbRequest(Endpoint.DEPOSIT_ADDRESS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getwhitelistedaddresses
     */
    getWhitelistedAddresses(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#addwhitelistedaddress
     */
    addWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
     */
    confirmWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId + "/verification", RequestType.POST, { sms_code: request.sms_code, account_id: request.account_id });
    }
    resendVerificationCodeWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId + "/verification", RequestType.GET, { account_id: request.account_id });
    }
    /**
     * https://apidoc.notbank.exchange/#deletewhitelistedaddress
     */
    deleteWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId, RequestType.DELETE, {
            account_id: request.account_id,
            otp: request.otp
        });
    }
    /**
     * https://apidoc.notbank.exchange/#updateonestepwithdraw
     */
    updateOneStepWithdraw(request) {
        return this.connection.nbRequest(Endpoint.UPDATE_ONE_STEP_WITHDRAW, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#createcryptowithdraw
     */
    createCryptoWithdraw(request) {
        return this.connection.nbRequest(Endpoint.CREATE_CRYPTO_WITHDRAW, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#createfiatdeposit
     */
    createFiatDeposit(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.nbRequest(Endpoint.FIAT_DEPOSIT, RequestType.POST, request);
            return result === null || result === void 0 ? void 0 : result.url;
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    getOwnersFiatWithdraw(request) {
        return this.connection.nbRequest(Endpoint.GET_OWNERS_FIAT_WITHDRAW, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    createFiatWithdraw(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.nbRequest(Endpoint.FIAT_WITHDRAW, RequestType.POST, request);
            return result === null || result === void 0 ? void 0 : result.withdrawal_id;
        });
    }
    /**
   * https://apidoc.notbank.exchange/#confirmfiatwithdraw
   */
    confirmFiatWithdraw(request) {
        return this.connection.nbRequest(Endpoint.FIAT_WITHDRAW + "/" + request.withdrawal_id, RequestType.POST, { attempt_code: request.attempt_code });
    }
    /**
     * https://apidoc.notbank.exchange/#transferfunds
     */
    transferFunds(request) {
        return this.connection.nbRequest(Endpoint.TRANSFER_FUNDS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#gettransactions
     */
    getTransactions(request) {
        return __classPrivateFieldGet(this, _WalletService_instances, "m", _WalletService_nbPagedRequest).call(this, Endpoint.GET_TRANSACTIONS, RequestType.GET, request);
    }
}
_WalletService_instances = new WeakSet(), _WalletService_nbPagedRequest = function _WalletService_nbPagedRequest(endpoint, requestType, message) {
    return this.connection.nbRequest(endpoint, requestType, message, true);
};
