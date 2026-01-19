import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { AddWhitelistedAddressRequest } from "../models/request/addWhitelistedAddress";
import { ConfirmFiatWithdrawRequest } from "../models/request/confirmFiatWithdraw";
import { ConfirmWhitelistedAddressRequest } from "../models/request/confirmWhitelistedAddress";
import { AddClientBankAccountRequest } from "../models/request/addClientBankAccount";
import { CreateCryptoWithdrawRequest } from "../models/request/createCryptoWithdraw";
import { CreateDepositAddressesRequest } from "../models/request/createDepositAddress";
import { CreateFiatDepositRequest } from "../models/request/createFiatDeposit";
import { CreateFiatWithdrawRequest } from "../models/request/createFiatWithdraw";
import { DeleteClientBankAccountRequest } from "../models/request/deleteClientBankAccount";
import { DeleteWhitelistedAddressRequest } from "../models/request/deleteWhitelistedAddress";
import { GetClientBankAccountRequest } from "../models/request/getClientBankAccount";
import { GetClientBankAccountsRequest } from "../models/request/getClientBankAccounts";
import { GetBankRequest } from "../models/request/getBanks";
import { GetNetworksTemplatesRequest } from "../models/request/getCurrencyNetworkTemplates";
import { GetDepositAddressesRequest } from "../models/request/getDepositAddresses";
import { GetOwnersFiatWithdrawRequest } from "../models/request/getOwnersFiatWithdraw";
import { GetTransactionsRequest } from "../models/request/getTransactions";
import { GetWhitelistedAddressesRequest } from "../models/request/getWhitelistedAddresses";
import { TransferFundsRequest } from "../models/request/transferFunds";
import { UpdateOneStepWithdrawRequest } from "../models/request/updateOneStepWithdraw";
import { Banks } from "../models/response/bank";
import { BankAccount, BankAccounts } from "../models/response/bankAccount";
import { CbuOwner } from "../models/response/cbuOwner";
import { CurrencyNetworkTemplates } from "../models/response/networkTemplates";
import { Transactions } from "../models/response/transaction";
import { WhiteListedAddress } from "../models/response/whiteListedAddress";
import { ResendVerificationCodeWhitelistedAddressRequest } from "../models/request/resendVerificationCodeWhitelistedAddress";
import { Province } from "../models/response";
import { GetProvincesRequest } from "../models/request";

export class WalletService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  #nbPagedRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2> {
    return this.connection.nbRequest(
      endpoint,
      requestType,
      message,
      true
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getbanks
   */
  getBanks(request: GetBankRequest): Promise<Banks> {
    return this.#nbPagedRequest(
      Endpoint.BANKS,
      RequestType.GET,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#getprovinces
   */
  getProvinces(request: GetProvincesRequest): Promise<Province[]> {
    return this.#nbPagedRequest(
      Endpoint.PROVINCES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#addclientbankaccount
   */
  AddClientBankAccount(request: AddClientBankAccountRequest): Promise<BankAccount> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getclientbankaccount
   */
  getClientBankAccount(request: GetClientBankAccountRequest): Promise<BankAccount> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId,
      RequestType.GET,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getclientbankaccounts
   */
  getClientBankAccounts(request: GetClientBankAccountsRequest): Promise<BankAccounts> {
    return this.#nbPagedRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.GET,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#deleteclientbankaccount
   */
  deleteClientBankAccount(request: DeleteClientBankAccountRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId,
      RequestType.DELETE
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getnetworkstemplates
   */
  getNetworksTemplates(request: GetNetworksTemplatesRequest): Promise<CurrencyNetworkTemplates[]> {
    return this.connection.nbRequest(
      Endpoint.GET_NETWORKS_TEMPLATES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getdepositaddresses
   */
  getDepositAddresses(request: GetDepositAddressesRequest): Promise<string[]> {
    return this.connection.nbRequest(
      Endpoint.DEPOSIT_ADDRESS,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createdepositaddress
   */
  createDepositAddress(request: CreateDepositAddressesRequest): Promise<string> {
    return this.connection.nbRequest(
      Endpoint.DEPOSIT_ADDRESS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getwhitelistedaddresses
   */
  getWhitelistedAddresses(request: GetWhitelistedAddressesRequest): Promise<WhiteListedAddress[]> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#addwhitelistedaddress
   */
  addWhitelistedAddress(request: AddWhitelistedAddressRequest): Promise<string> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES,
      RequestType.POST,
      request
    );
  }
  /**
   * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
   */
  confirmWhitelistedAddress(request: ConfirmWhitelistedAddressRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId + "/verification",
      RequestType.POST,
      { sms_code: request.sms_code, account_id: request.account_id }
    );
  }

  resendVerificationCodeWhitelistedAddress(request: ResendVerificationCodeWhitelistedAddressRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId + "/verification",
      RequestType.GET,
      { account_id: request.account_id }
    );
  }

  /**
   * https://apidoc.notbank.exchange/#deletewhitelistedaddress
   */
  deleteWhitelistedAddress(request: DeleteWhitelistedAddressRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId,
      RequestType.DELETE,
      {
        account_id: request.account_id,
        otp: request.otp
      }
    );
  }

  /**
   * https://apidoc.notbank.exchange/#updateonestepwithdraw
   */
  updateOneStepWithdraw(request: UpdateOneStepWithdrawRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.UPDATE_ONE_STEP_WITHDRAW,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createcryptowithdraw
   */
  createCryptoWithdraw(request: CreateCryptoWithdrawRequest): Promise<string> {
    return this.connection.nbRequest(
      Endpoint.CREATE_CRYPTO_WITHDRAW,
      RequestType.POST,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#createfiatdeposit
   */
  async createFiatDeposit(request: CreateFiatDepositRequest): Promise<string | undefined> {
    const result = await this.connection.nbRequest<CreateFiatDepositRequest, { url?: string }>(
      Endpoint.FIAT_DEPOSIT,
      RequestType.POST,
      request
    );
    return result?.url;
  }

  /**
   * https://apidoc.notbank.exchange/#getownersfiatwithdraw
   */
  getOwnersFiatWithdraw(request: GetOwnersFiatWithdrawRequest): Promise<CbuOwner[]> {
    return this.connection.nbRequest(
      Endpoint.GET_OWNERS_FIAT_WITHDRAW,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getownersfiatwithdraw
   */
  async createFiatWithdraw(request: CreateFiatWithdrawRequest): Promise<string | undefined> {
    const result = await this.connection.nbRequest<CreateFiatWithdrawRequest, { withdrawal_id?: string }>(
      Endpoint.FIAT_WITHDRAW,
      RequestType.POST,
      request
    );
    return result?.withdrawal_id;
  }

  /**
 * https://apidoc.notbank.exchange/#confirmfiatwithdraw
 */
  confirmFiatWithdraw(request: ConfirmFiatWithdrawRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.FIAT_WITHDRAW + "/" + request.withdrawal_id,
      RequestType.POST,
      { attempt_code: request.attempt_code }
    );
  }

  /**
   * https://apidoc.notbank.exchange/#transferfunds
   */
  transferFunds(request: TransferFundsRequest): Promise<string | undefined> {
    return this.connection.nbRequest(
      Endpoint.TRANSFER_FUNDS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#gettransactions
   */
  getTransactions(request: GetTransactionsRequest): Promise<Transactions> {
    return this.#nbPagedRequest(
      Endpoint.GET_TRANSACTIONS,
      RequestType.GET,
      request
    );
  }
}
