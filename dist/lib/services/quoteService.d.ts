import { ServiceConnection } from "../core/serviceClient.js";
import { CreateDirectQuoteRequest } from "../models/request/createDirectQuote.js";
import { CreateInverseQuoteRequest } from "../models/request/createInverseQuote.js";
import { ExecuteQuoteRequest } from "../models/request/executeQuote.js";
import { GetQuoteRequest } from "../models/request/getQuote.js";
import { GetQuotesRequest } from "../models/request/getQuotes.js";
import { Quote } from "../models/response/quote.js";
export declare class QuoteService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getquotes
     */
    getQuotes(request: GetQuotesRequest): Promise<Quote[]>;
    /**
     * https://apidoc.notbank.exchange/#createdirectquote
     */
    createDirectQuote(request: CreateDirectQuoteRequest): Promise<String>;
    /**
     * https://apidoc.notbank.exchange/#createinversequote
     */
    createInverseQuote(request: CreateInverseQuoteRequest): Promise<String>;
    /**
     * https://apidoc.notbank.exchange/#getquote
     */
    getQuote(request: GetQuoteRequest): Promise<Quote>;
    /**
     * https://apidoc.notbank.exchange/#executequote
     */
    executeQuote(request: ExecuteQuoteRequest): Promise<Quote>;
}
