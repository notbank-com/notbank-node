import { getNonce, sign } from "../core/hmac";
import { HttpConnection } from "../core/http/httpConnection";
import { AccountService } from "./accountService";
import { AuthService } from "./authService";
import { FeeService } from "./feeService";
import { InstrumentService } from "./instrumentService";
import { ProductService } from "./productService";
import { ReportService } from "./reportService";
import { SystemService } from "./systemService";
import { TradingService } from "./tradingService";
import { UserService } from "./userService";
import { WalletService } from "./walletService";
import { QuoteService } from "./quoteService";
import { ServiceConnection } from "../core/serviceClient";
import { VerificationService } from "./verificationService";
import { RegisterService } from "./registerService";
import { YieldService } from "./yieldService";
import { SubAccountService } from "./subAccountService";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class HttpServiceFactory {
  #httpConnection: HttpConnection;

  constructor(domain?: string) {
    const finalDomain = domain || DEFAULT_DOMAIN;
    this.#httpConnection = new HttpConnection(finalDomain);
  }

  authenticateUser(params: {
    ApiPublicKey: string;
    ApiSecretKey: string;
    UserId: number;
  }): Promise<void> {
    var nonce = getNonce();
    var signature = sign(
      params.ApiPublicKey,
      params.ApiSecretKey,
      params.UserId,
      nonce
    );
    return this.#httpConnection.authenticateUser({
      APIKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  updateSessionToken(sessionToken: string) {
    this.getConnection().updateSessionToken(sessionToken);
  }

  getConnection(): ServiceConnection {
    return this.#httpConnection;
  }

  newAccountService(): AccountService {
    return new AccountService(this.#httpConnection);
  }

  newAuthService(): AuthService {
    return new AuthService(this.#httpConnection);
  }

  newFeeService(): FeeService {
    return new FeeService(this.#httpConnection);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.#httpConnection);
  }

  newProductService(): ProductService {
    return new ProductService(this.#httpConnection);
  }

  newReportService(): ReportService {
    return new ReportService(this.#httpConnection);
  }

  newSystemService(): SystemService {
    return new SystemService(this.#httpConnection);
  }

  newTradingService(): TradingService {
    return new TradingService(this.#httpConnection);
  }

  newUserService(): UserService {
    return new UserService(this.#httpConnection);
  }

  newWalletService(): WalletService {
    return new WalletService(this.#httpConnection);
  }

  newQuoteService(): QuoteService {
    return new QuoteService(this.#httpConnection);
  }

  newRegisterService(): RegisterService {
    return new RegisterService(this.#httpConnection);
  }
  newVerificationService(): VerificationService {
    return new VerificationService(this.#httpConnection);
  }
  newYieldService(): YieldService {
    return new YieldService(this.#httpConnection);
  }
  newSubAccountService(): SubAccountService {
    return new SubAccountService(this.#httpConnection);
  }
}
