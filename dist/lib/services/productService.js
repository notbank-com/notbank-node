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
import { completeParams } from "../utils/completeParams.js";
import { NotbankError } from "../models/notbankError.js";
export class ProductService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
        this.productCache = {};
    }
    /**
     * https://apidoc.notbank.exchange/#getproduct
     */
    getProduct(params) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GET_PRODUCT, RequestType.POST, paramsWithOMSId);
    }
    /**
     * https://apidoc.notbank.exchange/#getproducts
     */
    getProducts() {
        return __awaiter(this, arguments, void 0, function* (params = {}) {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return this.connection.apRequest(Endpoint.GET_PRODUCTS, RequestType.POST, paramsWithOMSId);
        });
    }
    getProductBySymbol(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(params.symbol in this.productCache)) {
                var products = yield this.getProducts();
                products.map(product => this.productCache[product.Product] = product);
            }
            if (params.symbol in this.productCache) {
                return Promise.resolve(this.productCache[params.symbol]);
            }
            else {
                throw new NotbankError("no product found for symbol " + params.symbol, -1);
            }
        });
    }
    /**
     * https://apidoc.notbank.exchange/#getverificationlevelconfig
     */
    getVerificationLevelConfig(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return yield this.connection.apRequest(Endpoint.GET_VERIFICATION_LEVEL_CONFIG, RequestType.POST, paramsWithOMSId);
        });
    }
}
