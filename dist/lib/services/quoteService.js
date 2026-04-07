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
export class QuoteService {
    constructor(connection) {
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getquotes
     */
    getQuotes(request) {
        return this.connection.nbRequest(Endpoint.QUOTES, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#createdirectquote
     */
    createDirectQuote(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.connection.nbRequest(Endpoint.QUOTES_DIRECT, RequestType.POST, request)).id;
        });
    }
    /**
     * https://apidoc.notbank.exchange/#createinversequote
     */
    createInverseQuote(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.connection.nbRequest(Endpoint.QUOTES_INVERSE, RequestType.POST, request)).id;
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getquote
     */
    getQuote(request) {
        return this.connection.nbRequest(Endpoint.QUOTES + "/" + request.quote_id, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#executequote
     */
    executeQuote(request) {
        return this.connection.nbRequest(Endpoint.QUOTES + "/" + request.quote_id, RequestType.POST, request);
    }
}
