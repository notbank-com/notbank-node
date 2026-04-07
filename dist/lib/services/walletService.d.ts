import { ServiceConnection } from "../core/serviceClient.js";
import { AddWhitelistedAddressRequest } from "../models/request/addWhitelistedAddress.js";
import { ConfirmFiatWithdrawRequest } from "../models/request/confirmFiatWithdraw.js";
import { ConfirmWhitelistedAddressRequest } from "../models/request/confirmWhitelistedAddress.js";
import { AddClientBankAccountRequest } from "../models/request/addClientBankAccount.js";
import { CreateCryptoWithdrawRequest } from "../models/request/createCryptoWithdraw.js";
import { CreateDepositAddressesRequest } from "../models/request/createDepositAddress.js";
import { CreateFiatDepositRequest } from "../models/request/createFiatDeposit.js";
import { CreateFiatWithdrawRequest } from "../models/request/createFiatWithdraw.js";
import { DeleteClientBankAccountRequest } from "../models/request/deleteClientBankAccount.js";
import { DeleteWhitelistedAddressRequest } from "../models/request/deleteWhitelistedAddress.js";
import { GetClientBankAccountRequest } from "../models/request/getClientBankAccount.js";
import { GetClientBankAccountsRequest } from "../models/request/getClientBankAccounts.js";
import { GetBankRequest } from "../models/request/getBanks.js";
import { GetNetworksTemplatesRequest } from "../models/request/getCurrencyNetworkTemplates.js";
import { GetDepositAddressesRequest } from "../models/request/getDepositAddresses.js";
import { GetOwnersFiatWithdrawRequest } from "../models/request/getOwnersFiatWithdraw.js";
import { GetTransactionsRequest } from "../models/request/getTransactions.js";
import { GetWhitelistedAddressesRequest } from "../models/request/getWhitelistedAddresses.js";
import { TransferFundsRequest } from "../models/request/transferFunds.js";
import { UpdateOneStepWithdrawRequest } from "../models/request/updateOneStepWithdraw.js";
import { Banks } from "../models/response/bank.js";
import { BankAccount, BankAccounts } from "../models/response/bankAccount.js";
import { CbuOwner } from "../models/response/cbuOwner.js";
import { CurrencyNetworkTemplates } from "../models/response/networkTemplates.js";
import { Transactions } from "../models/response/transaction.js";
import { WhiteListedAddress } from "../models/response/whiteListedAddress.js";
import { ResendVerificationCodeWhitelistedAddressRequest } from "../models/request/resendVerificationCodeWhitelistedAddress.js";
import { Province } from "../models/response/index.js";
import { GetProvincesRequest } from "../models/request/index.js";
export declare class WalletService {
    #private;
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request: GetBankRequest): Promise<Banks>;
    /**
     * https://apidoc.notbank.exchange/#getprovinces
     */
    getProvinces(request: GetProvincesRequest): Promise<Province[]>;
    /**
     * https://apidoc.notbank.exchange/#addclientbankaccount
     */
    AddClientBankAccount(request: AddClientBankAccountRequest): Promise<BankAccount>;
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccount
     */
    getClientBankAccount(request: GetClientBankAccountRequest): Promise<BankAccount>;
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccounts
     */
    getClientBankAccounts(request: GetClientBankAccountsRequest): Promise<BankAccounts>;
    /**
     * https://apidoc.notbank.exchange/#deleteclientbankaccount
     */
    deleteClientBankAccount(request: DeleteClientBankAccountRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#getnetworkstemplates
     */
    getNetworksTemplates(request: GetNetworksTemplatesRequest): Promise<CurrencyNetworkTemplates[]>;
    /**
     * https://apidoc.notbank.exchange/#getdepositaddresses
     */
    getDepositAddresses(request: GetDepositAddressesRequest): Promise<string[]>;
    /**
     * https://apidoc.notbank.exchange/#createdepositaddress
     */
    createDepositAddress(request: CreateDepositAddressesRequest): Promise<string>;
    /**
     * https://apidoc.notbank.exchange/#getwhitelistedaddresses
     */
    getWhitelistedAddresses(request: GetWhitelistedAddressesRequest): Promise<WhiteListedAddress[]>;
    /**
     * https://apidoc.notbank.exchange/#addwhitelistedaddress
     */
    addWhitelistedAddress(request: AddWhitelistedAddressRequest): Promise<string>;
    /**
     * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
     */
    confirmWhitelistedAddress(request: ConfirmWhitelistedAddressRequest): Promise<void>;
    resendVerificationCodeWhitelistedAddress(request: ResendVerificationCodeWhitelistedAddressRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#deletewhitelistedaddress
     */
    deleteWhitelistedAddress(request: DeleteWhitelistedAddressRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#updateonestepwithdraw
     */
    updateOneStepWithdraw(request: UpdateOneStepWithdrawRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#createcryptowithdraw
     */
    createCryptoWithdraw(request: CreateCryptoWithdrawRequest): Promise<string>;
    /**
     * https://apidoc.notbank.exchange/#createfiatdeposit
     */
    createFiatDeposit(request: CreateFiatDepositRequest): Promise<string | undefined>;
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    getOwnersFiatWithdraw(request: GetOwnersFiatWithdrawRequest): Promise<CbuOwner[]>;
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    createFiatWithdraw(request: CreateFiatWithdrawRequest): Promise<string | undefined>;
    /**
   * https://apidoc.notbank.exchange/#confirmfiatwithdraw
   */
    confirmFiatWithdraw(request: ConfirmFiatWithdrawRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#transferfunds
     */
    transferFunds(request: TransferFundsRequest): Promise<string | undefined>;
    /**
     * https://apidoc.notbank.exchange/#gettransactions
     */
    getTransactions(request: GetTransactionsRequest): Promise<Transactions>;
}
