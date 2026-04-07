var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from "assert";
import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { TestHelper } from "./TestHelper.js";
describe("wallet service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    var credentials = TestHelper.getCredentials();
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.authenticateUser(credentials);
    }));
    const service = client.getWalletService();
    describe("getBanks", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.getBanks({ country: "AR" });
            console.log(response);
            assert.ok(Array.isArray(response.data), "Response should be an array");
        }));
    });
    describe("createBankAccount", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const clBankId = '72d3e264-2473-41fb-b3ca-a08231de05e2';
            const coBankId = '5f77181f-b66d-44b4-b692-eccfc54ba0f3';
            const arBankId = 'c19456ee-cb59-4f3f-8580-f13878e96b6a';
            const account = yield service.AddClientBankAccount({
                country: "AR",
                bank: arBankId,
                number: "2850320040095190840828",
                kind: "ar_cbu"
            });
            console.log(account);
            assert.ok(account);
        }));
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const brBankId = '7dc214ac-608b-42a1-9d01-0f78108d2989';
            const account = yield service.AddClientBankAccount({
                country: "BR",
                bank: brBankId,
                agency: "14325343",
                dv: "2",
                number: "1112321",
                kind: "br_corriente_fisica",
            });
            console.log(account);
            assert.ok(account);
        }));
    });
    describe("getBankAccount", () => {
        const bankAccountId = 'fb963f6e-9258-4616-a25e-8967422b966d';
        const brBankAccountId = '6dedbef2-ade3-456c-ad9e-a81a3cf57f92';
        const coBankAccountId = 'cb54ca55-10ef-4584-9f87-e5f3b1ecf7b6';
        const arBankAccoutnId = '4d677d9c-81e1-45d2-9903-43fd599b6599';
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const account = yield service.getClientBankAccount({ bankAccountId: arBankAccoutnId });
            console.log("account:", account);
            assert.ok(account);
        }));
    });
    describe("getClientBankAccounts", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const account = yield service.getClientBankAccounts({});
            console.log(account);
            assert.ok(account);
        }));
    });
    describe("deleteClientBankAccounts", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const bankAccountId = '4172acac-f18e-41e2-8423-94e1c7feeebf';
            const account = yield service.deleteClientBankAccount({ bankAccountId: bankAccountId });
            assert.ok(account);
        }));
    });
    describe("getNetworksTemplates", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const networks = yield service.getNetworksTemplates({ currency: "USDT" });
            console.log(JSON.stringify(networks, null, 2));
            assert.ok(networks);
        }));
    });
    describe("getDepositAddresses", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const networks = yield service.getDepositAddresses({
                account_id: 235,
                currency: "USDT",
                network: "USDT_BSC_TEST"
            });
            console.log(networks);
            assert.ok(networks);
        }));
    });
    describe("createDepositAddress", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const alreadyExistingDeposit = yield service.createDepositAddress({
                account_id: 235,
                currency: "USDT",
                network: "USDT_BSC_TEST"
            });
            assert.ok(alreadyExistingDeposit);
            assert.equal(alreadyExistingDeposit, "0xD9aF4Be918e2AE1302f37C11939bE3b41A88F23c");
        }));
    });
    describe("getWhitelistedAddresses", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.getWhitelistedAddresses({
                account_id: 235,
                search: "USDT"
            });
            console.log(response);
            assert.ok(response);
        }));
    });
    describe("addWhitelistedAddress", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.addWhitelistedAddress({
                account_id: 235,
                currency: "USDT",
                network: "USDT_BSC_TEST",
                address: "12345555",
                label: "test label",
                otp: "719247"
            });
            console.log(response);
            assert.ok(response);
        }));
    });
    describe("deleteWhitelistedAddress", () => {
        it("should not reject", () => __awaiter(void 0, void 0, void 0, function* () {
            yield assert.doesNotReject(() => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield service.deleteWhitelistedAddress({
                    account_id: 235,
                    whitelistedAddressId: "6a36bdf4-cf21-42ce-9945-6008b0485969",
                    otp: "849886"
                });
                console.log(response);
            }));
        }));
    });
    describe("confirmWhitelistedAddress", () => {
        it("should not reject", () => __awaiter(void 0, void 0, void 0, function* () {
            yield assert.doesNotReject(() => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield service.confirmWhitelistedAddress({
                    account_id: 235,
                    whitelistedAddressId: "3ea209e0-2511-4121-b502-efbd37ae1cf6",
                    sms_code: "7489181"
                });
                console.log(response);
            }));
        }));
    });
    describe("resendVerificationCodeWhitelistedAddress", () => {
        it("should not reject", () => __awaiter(void 0, void 0, void 0, function* () {
            yield assert.doesNotReject(() => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield service.resendVerificationCodeWhitelistedAddress({
                    account_id: 235,
                    whitelistedAddressId: "054c1888-b682-4a86-b19c-c375e27d5316",
                });
                console.log(response);
            }));
        }));
    });
    describe("updateOneStepWithdraw", () => {
        it("should not reject", () => __awaiter(void 0, void 0, void 0, function* () {
            yield assert.doesNotReject(() => __awaiter(void 0, void 0, void 0, function* () {
                yield service.updateOneStepWithdraw({
                    account_id: 235,
                    action: "disable",
                    otp: "694981"
                });
            }));
        }));
    });
    describe("createCryptoWithdraw", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.createCryptoWithdraw({
                account_id: 235,
                currency: "USDT",
                network: "USDT_BSC_TEST",
                address: "0x019d9fd2549235105c6C7fd406dF6E08Fd832d61",
                amount: "0.2",
                otp: "922687",
            });
            console.log(response);
            assert.ok(response);
        }));
    });
    describe("createFiatDeposit", () => {
        it("should not reject", () => __awaiter(void 0, void 0, void 0, function* () {
            const bankAccountId = 'fb963f6e-9258-4616-a25e-8967422b966d';
            const coBankAccountId = 'cb54ca55-10ef-4584-9f87-e5f3b1ecf7b6';
            yield assert.doesNotReject(() => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield service.createFiatDeposit({
                    account_id: 235,
                    payment_method: 1,
                    currency: "COP",
                    amount: "150000",
                    bank_account_id: coBankAccountId,
                    voucher: ""
                });
                console.log(response);
            }));
        }));
    });
    describe("getOwnersFiatWithdraw", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.getOwnersFiatWithdraw({
                cbu: "2850320040095190840828"
            });
            console.log(response);
            assert.ok(response);
        }));
    });
    describe("createFiatWithdraw", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const bankAccountId = 'fb963f6e-9258-4616-a25e-8967422b966d';
            const arBankAccoutnId = '4d677d9c-81e1-45d2-9903-43fd599b6599';
            const response = yield service.createFiatWithdraw({
                account_id: 235,
                payment_method: 1,
                currency: "ARS",
                amount: "123232",
                bank_account_id: arBankAccoutnId,
                cbu: "2850320040095190840828",
                person_type: "F",
                cuit: "2033898390",
                name: "Marcelo test",
            });
            console.log(response);
            assert.ok(response);
        }));
    });
    describe("confirmFiatWithdraw", () => {
        it("should not reject", () => __awaiter(void 0, void 0, void 0, function* () {
            yield assert.doesNotReject(() => __awaiter(void 0, void 0, void 0, function* () {
                yield service.confirmFiatWithdraw({
                    withdrawal_id: '6e28b646-d3f6-45e6-bcc1-84da17db2a40',
                    attempt_code: "527005",
                });
            }));
        }));
    });
    describe("transferFunds", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.transferFunds({
                sender_account_id: 235,
                receiver_account_id: 13,
                currency_name: "CLP",
                amount: "12",
            });
            console.log(response);
            assert.ok(response);
        }));
    });
    describe("getTransactions", () => {
        it("should work", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield service.getTransactions({
                page: 2
            });
            assert.ok(response);
        }));
    });
});
