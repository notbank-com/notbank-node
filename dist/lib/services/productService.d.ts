import { ServiceConnection } from "../core/serviceClient.js";
import { GetProductRequest } from "../models/request/getProduct.js";
import { GetProductsRequest } from "../models/request/getProducts.js";
import { GetVerificationLevelConfigRequest } from "../models/request/getVerificationLevelConfig.js";
import { Product } from "../models/response/product.js";
import { VerificationLevelConfig } from "../models/response/getVerificationLevelConfig.js";
export declare class ProductService {
    connection: ServiceConnection;
    private productCache;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getproduct
     */
    getProduct(params: GetProductRequest): Promise<Product>;
    /**
     * https://apidoc.notbank.exchange/#getproducts
     */
    getProducts(params?: GetProductsRequest): Promise<Product[]>;
    getProductBySymbol(params: {
        symbol: string;
    }): Promise<Product>;
    /**
     * https://apidoc.notbank.exchange/#getverificationlevelconfig
     */
    getVerificationLevelConfig(params: GetVerificationLevelConfigRequest): Promise<VerificationLevelConfig>;
}
