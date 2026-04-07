import { getNonce, sign } from "../core/hmac";
import { ServiceConnection } from "../core/serviceClient";
import { Restarter } from "../core/websocket/restarter";
import { RestartingWebsocketConnection } from "../core/websocket/restartingWebsocketConnection";
import { WebsocketConnection } from "../core/websocket/websocketConnection";
import { WebsocketConnectionConfiguration } from "../core/websocket/websocketConnectionConfiguration";
import { AccountService } from "./accountService";
import { AuthService } from "./authService";
import { FeeService } from "./feeService";
import { InstrumentService } from "./instrumentService";
import { ProductService } from "./productService";
import { QuoteService } from "./quoteService";
import { RegisterService } from "./registerService";
import { ReportService } from "./reportService";
import { SavingsService } from "./savingsService";
import { SubAccountService } from "./subAccountService";
import { SubscriptionService } from "./subscriptionService";
import { SystemService } from "./systemService";
import { TradingService } from "./tradingService";
import { UserService } from "./userService";
import { VerificationService } from "./verificationService";
import { WalletService } from "./walletService";


export class WebsocketServiceFactory {
  private serviceConnection: ServiceConnection;
  private getReadyState: () => number

  constructor(configuration: WebsocketConnectionConfiguration) {
    var connection = configuration?.withReconnect
      ? new RestartingWebsocketConnection({
        restarter: new Restarter({ connectionConfiguration: configuration || {} })
      })
      : new WebsocketConnection(configuration);
    this.serviceConnection = connection
    this.getReadyState = () => connection.readyState
  }

  connect(): Promise<void> {
    return this.serviceConnection.connect();
  }

  close(): Promise<void> {
    return this.serviceConnection.close();
  }

  get isConnecting(): boolean {
    return this.getReadyState() === WebSocket.CONNECTING;
  }

  get isConnected(): boolean {
    return this.getReadyState() === WebSocket.OPEN;
  }

  get isClosing(): boolean {
    return this.getReadyState() === WebSocket.CLOSING;
  }

  get isClosed(): boolean {
    return this.getReadyState() === WebSocket.CLOSED;
  }

  async authenticateUser(params: {
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
    await this.serviceConnection.authenticateUser({
      APIKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  updateSessionToken(aptoken: string) {
    return this.serviceConnection.updateSessionToken(aptoken)
  }

  getConnection(): ServiceConnection {
    return this.serviceConnection
  }

  newAccountService(): AccountService {
    return new AccountService(this.serviceConnection);
  }

  newAuthService(): AuthService {
    return new AuthService(this.serviceConnection);
  }

  newFeeService(): FeeService {
    return new FeeService(this.serviceConnection);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.serviceConnection);
  }

  newProductService(): ProductService {
    return new ProductService(this.serviceConnection);
  }

  newReportService(): ReportService {
    return new ReportService(this.serviceConnection);
  }

  newSystemService(): SystemService {
    return new SystemService(this.serviceConnection);
  }

  getSubscriptionService(): SubscriptionService {
    return new SubscriptionService(this.serviceConnection);
  }

  newTradingService(): TradingService {
    return new TradingService(this.serviceConnection);
  }

  newUserService(): UserService {
    return new UserService(this.serviceConnection);
  }

  newWalletService(): WalletService {
    return new WalletService(this.serviceConnection);
  }

  newQuoteService(): QuoteService {
    return new QuoteService(this.serviceConnection);
  }

  newRegisterService(): RegisterService {
    return new RegisterService(this.serviceConnection);
  }

  newVerificationService(): VerificationService {
    return new VerificationService(this.serviceConnection);
  }

  newSavingsService(): SavingsService {
    return new SavingsService(this.serviceConnection);
  }

  newSubAccountService(): SubAccountService {
    return new SubAccountService(this.serviceConnection);
  }
}
