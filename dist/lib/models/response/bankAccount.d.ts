import { ArgentinaBankAccountKind, BrazilBankAccountKind, ChileBankAccountKind, ColombiaBankAccountKind, PeruBankAccountKind } from "../enums/bankAccounts.js";
import { SupportedCountry } from "../enums/countries.js";
import { PixType } from "../enums/pixType.js";
import { Bank } from "./bank.js";
interface BaseBankAccount {
    id: string;
    bank: Bank;
    number: string;
    currency: string;
}
interface ArgentinaBankAccount extends BaseBankAccount {
    country: SupportedCountry.AR;
    kind: ArgentinaBankAccountKind;
}
interface BrazilBankAccount extends BaseBankAccount {
    country: SupportedCountry.BR;
    kind: BrazilBankAccountKind;
    agency: string;
    dv: string;
    pix_type?: PixType;
}
interface ChileBankAccount extends BaseBankAccount {
    country: SupportedCountry.CL;
    kind: ChileBankAccountKind;
}
interface PeruBankAccount extends BaseBankAccount {
    country: SupportedCountry.PE;
    kind: PeruBankAccountKind;
    province: string;
}
interface ColombiaBankAccount extends BaseBankAccount {
    country: SupportedCountry.CO;
    kind: ColombiaBankAccountKind;
}
export type BankAccount = ArgentinaBankAccount | BrazilBankAccount | ChileBankAccount | PeruBankAccount | ColombiaBankAccount;
export interface BankAccounts {
    total: number;
    data: BankAccount[];
}
export {};
