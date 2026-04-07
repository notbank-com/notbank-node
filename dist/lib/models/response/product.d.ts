import { ProductType } from "../enums/productType.js";
export interface Product {
    OMSId: number;
    ProductId: number;
    Product: string;
    ProductFullName: string;
    MasterDataUniqueProductSymbol: string;
    ProductType: ProductType;
    DecimalPlaces: number;
    TickSize: number;
    DepositEnabled: boolean;
    WithdrawEnabled: boolean;
    NoFees: boolean;
    IsDisabled: boolean;
    MarginEnabled: boolean;
}
