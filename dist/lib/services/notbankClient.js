import { NotbankError } from "../models/index.js";
import { HttpServiceFactory } from "./httpServiceFactory.js";
import { WebsocketServiceFactory } from "./websocketServiceFactory.js";
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class NotbankClient {
    constructor(params) {
        this.connection = params.connection;
        this.accountService = params.accountService;
        this.authService = params.authService;
        this.feeService = params.feeService;
        this.instrumentService = params.instrumentService;
        this.productService = params.productService;
        this.reportService = params.reportService;
        this.getSubscriptionService = () => params.getSubscriptionService();
        this.systemService = params.systemService;
        this.tradingService = params.tradingService;
        this.userService = params.userService;
        this.walletService = params.walletService;
        this.quoteService = params.quoteService;
        this.registerService = params.registerService;
        this.verificationService = params.verificationService;
        this.savingsService = params.savingsService;
        this.subAccountService = params.subAccountService;
        this.authenticateUser = params.authenticate;
        this.updateSessionToken = params.updateSessionToken;
        this.connect = params.connect;
        this.close = params.close;
    }
    getAccountService() {
        return this.accountService;
    }
    getAuthService() {
        return this.authService;
    }
    getFeeService() {
        return this.feeService;
    }
    getInstrumentService() {
        return this.instrumentService;
    }
    getProductService() {
        return this.productService;
    }
    getReportService() {
        return this.reportService;
    }
    getSystemService() {
        return this.systemService;
    }
    getTradingService() {
        return this.tradingService;
    }
    getUserService() {
        return this.userService;
    }
    getWalletService() {
        return this.walletService;
    }
    getQuoteService() {
        return this.quoteService;
    }
    getRegisterService() {
        return this.registerService;
    }
    getVerificationService() {
        return this.verificationService;
    }
    getSavingsService() {
        return this.savingsService;
    }
    getSubAccountService() {
        return this.subAccountService;
    }
    getConnection() {
        return this.connection;
    }
}
NotbankClient.Factory = class Factory {
    static createRestClient(domain) {
        var factory = new HttpServiceFactory(domain);
        return new NotbankClient({
            connection: factory.getConnection(),
            accountService: factory.newAccountService(),
            authService: factory.newAuthService(),
            feeService: factory.newFeeService(),
            instrumentService: factory.newInstrumentService(),
            productService: factory.newProductService(),
            reportService: factory.newReportService(),
            getSubscriptionService: () => { throw new NotbankError("NotbankError. subcription service only exists for websocket connection", -1); },
            systemService: factory.newSystemService(),
            tradingService: factory.newTradingService(),
            userService: factory.newUserService(),
            walletService: factory.newWalletService(),
            quoteService: factory.newQuoteService(),
            registerService: factory.newRegisterService(),
            verificationService: factory.newVerificationService(),
            savingsService: factory.newSavingsService(),
            subAccountService: factory.newSubAccountService(),
            authenticate: params => factory.authenticateUser(params),
            updateSessionToken: token => factory.updateSessionToken(token),
            connect: () => Promise.resolve(undefined),
            close: () => Promise.resolve(undefined)
        });
    }
    static createWebsocketClient(configuration) {
        var factory = new WebsocketServiceFactory(configuration);
        return new NotbankClient({
            connection: factory.getConnection(),
            accountService: factory.newAccountService(),
            authService: factory.newAuthService(),
            feeService: factory.newFeeService(),
            instrumentService: factory.newInstrumentService(),
            productService: factory.newProductService(),
            reportService: factory.newReportService(),
            getSubscriptionService: () => factory.getSubscriptionService(),
            systemService: factory.newSystemService(),
            tradingService: factory.newTradingService(),
            userService: factory.newUserService(),
            walletService: factory.newWalletService(),
            quoteService: factory.newQuoteService(),
            registerService: factory.newRegisterService(),
            verificationService: factory.newVerificationService(),
            authenticate: params => factory.authenticateUser(params),
            updateSessionToken: token => factory.updateSessionToken(token),
            savingsService: factory.newSavingsService(),
            subAccountService: factory.newSubAccountService(),
            connect: () => factory.connect(),
            close: () => factory.close()
        });
    }
};
