var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getNonce, sign } from "../core/hmac.js";
import { Restarter } from "../core/websocket/restarter.js";
import { RestartingWebsocketConnection } from "../core/websocket/restartingWebsocketConnection.js";
import { WebsocketConnection } from "../core/websocket/websocketConnection.js";
import { AccountService } from "./accountService.js";
import { AuthService } from "./authService.js";
import { FeeService } from "./feeService.js";
import { InstrumentService } from "./instrumentService.js";
import { ProductService } from "./productService.js";
import { QuoteService } from "./quoteService.js";
import { RegisterService } from "./registerService.js";
import { ReportService } from "./reportService.js";
import { YieldService } from "./yieldService.js";
import { SubAccountService } from "./subAccountService.js";
import { SubscriptionService } from "./subscriptionService.js";
import { SystemService } from "./systemService.js";
import { TradingService } from "./tradingService.js";
import { UserService } from "./userService.js";
import { VerificationService } from "./verificationService.js";
import { WalletService } from "./walletService.js";
export class WebsocketServiceFactory {
    constructor(configuration) {
        var connection = (configuration === null || configuration === void 0 ? void 0 : configuration.withReconnect)
            ? new RestartingWebsocketConnection({
                restarter: new Restarter({ connectionConfiguration: configuration || {} })
            })
            : new WebsocketConnection(configuration);
        this.serviceConnection = connection;
        this.getReadyState = () => connection.readyState;
    }
    connect() {
        return this.serviceConnection.connect();
    }
    close() {
        return this.serviceConnection.close();
    }
    get isConnecting() {
        return this.getReadyState() === WebSocket.CONNECTING;
    }
    get isConnected() {
        return this.getReadyState() === WebSocket.OPEN;
    }
    get isClosing() {
        return this.getReadyState() === WebSocket.CLOSING;
    }
    get isClosed() {
        return this.getReadyState() === WebSocket.CLOSED;
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var nonce = getNonce();
            var signature = sign(params.ApiPublicKey, params.ApiSecretKey, params.UserId, nonce);
            yield this.serviceConnection.authenticateUser({
                APIKey: params.ApiPublicKey,
                Signature: signature,
                UserId: params.UserId,
                Nonce: nonce
            });
        });
    }
    updateSessionToken(aptoken) {
        return this.serviceConnection.updateSessionToken(aptoken);
    }
    getConnection() {
        return this.serviceConnection;
    }
    newAccountService() {
        return new AccountService(this.serviceConnection);
    }
    newAuthService() {
        return new AuthService(this.serviceConnection);
    }
    newFeeService() {
        return new FeeService(this.serviceConnection);
    }
    newInstrumentService() {
        return new InstrumentService(this.serviceConnection);
    }
    newProductService() {
        return new ProductService(this.serviceConnection);
    }
    newReportService() {
        return new ReportService(this.serviceConnection);
    }
    newSystemService() {
        return new SystemService(this.serviceConnection);
    }
    getSubscriptionService() {
        return new SubscriptionService(this.serviceConnection);
    }
    newTradingService() {
        return new TradingService(this.serviceConnection);
    }
    newUserService() {
        return new UserService(this.serviceConnection);
    }
    newWalletService() {
        return new WalletService(this.serviceConnection);
    }
    newQuoteService() {
        return new QuoteService(this.serviceConnection);
    }
    newRegisterService() {
        return new RegisterService(this.serviceConnection);
    }
    newVerificationService() {
        return new VerificationService(this.serviceConnection);
    }
    newYieldService() {
        return new YieldService(this.serviceConnection);
    }
    newSubAccountService() {
        return new SubAccountService(this.serviceConnection);
    }
}
