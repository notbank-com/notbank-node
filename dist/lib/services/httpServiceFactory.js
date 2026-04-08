var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HttpServiceFactory_httpConnection;
import { getNonce, sign } from "../core/hmac.js";
import { HttpConnection } from "../core/http/httpConnection.js";
import { AccountService } from "./accountService.js";
import { AuthService } from "./authService.js";
import { FeeService } from "./feeService.js";
import { InstrumentService } from "./instrumentService.js";
import { ProductService } from "./productService.js";
import { ReportService } from "./reportService.js";
import { SystemService } from "./systemService.js";
import { TradingService } from "./tradingService.js";
import { UserService } from "./userService.js";
import { WalletService } from "./walletService.js";
import { QuoteService } from "./quoteService.js";
import { VerificationService } from "./verificationService.js";
import { RegisterService } from "./registerService.js";
import { YieldService } from "./yieldService.js";
import { SubAccountService } from "./subAccountService.js";
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class HttpServiceFactory {
    constructor(domain) {
        _HttpServiceFactory_httpConnection.set(this, void 0);
        const finalDomain = domain || DEFAULT_DOMAIN;
        __classPrivateFieldSet(this, _HttpServiceFactory_httpConnection, new HttpConnection(finalDomain), "f");
    }
    authenticateUser(params) {
        var nonce = getNonce();
        var signature = sign(params.ApiPublicKey, params.ApiSecretKey, params.UserId, nonce);
        return __classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f").authenticateUser({
            APIKey: params.ApiPublicKey,
            Signature: signature,
            UserId: params.UserId,
            Nonce: nonce
        });
    }
    updateSessionToken(sessionToken) {
        this.getConnection().updateSessionToken(sessionToken);
    }
    getConnection() {
        return __classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f");
    }
    newAccountService() {
        return new AccountService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newAuthService() {
        return new AuthService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newFeeService() {
        return new FeeService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newInstrumentService() {
        return new InstrumentService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newProductService() {
        return new ProductService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newReportService() {
        return new ReportService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newSystemService() {
        return new SystemService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newTradingService() {
        return new TradingService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newUserService() {
        return new UserService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newWalletService() {
        return new WalletService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newQuoteService() {
        return new QuoteService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newRegisterService() {
        return new RegisterService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newVerificationService() {
        return new VerificationService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newYieldService() {
        return new YieldService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
    newSubAccountService() {
        return new SubAccountService(__classPrivateFieldGet(this, _HttpServiceFactory_httpConnection, "f"));
    }
}
_HttpServiceFactory_httpConnection = new WeakMap();
