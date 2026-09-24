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
import { readFileSync } from 'fs';
import { DocumentAdressType, Gender, Profession } from "../../lib/models/enums/index.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { TestHelper } from "./TestHelper.js";
describe("verification service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange", request => { console.log(request.url); }, response => { console.log(response); });
    client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae");
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        // Autenticación previa a todas las pruebas en este bloque, http only
        yield client.authenticateUser(TestHelper.getCredentials());
    }));
    describe("verifyBasic", () => {
        it("should verify an user to basic level", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getVerificationService().verifyBasic({
                is_business: true,
                profession: Profession.ACCOUNTANT,
                gender: Gender.MAN,
                city: "Novosibirsk",
                street: "1",
                country: "RU"
            });
            console.log("basic verification:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
    it("should verify an user to trader level", () => __awaiter(void 0, void 0, void 0, function* () {
        const image = new File([readFileSync("image.png")], "image.png");
        yield client.getVerificationService().verifyTrader({
            user_id: "ac77a800-7914-4d04-ba3b-8f66c5b4968d",
            pep: false,
            subject_comply: false,
            is_public_servant: false,
            document_address_file: image,
            document_address_type: DocumentAdressType.CREDIT_CARD_BILL
        });
    }));
    it("should fetch the schemas for trader plus verification", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getTraderPlusVerificationSchemas({
            country: "AR",
        });
        console.log("trader plus verification schemas:", JSON.stringify(response));
        assert.ok(response, "Response should not be null");
    }));
    it("should verify an user to trader plus level", () => __awaiter(void 0, void 0, void 0, function* () {
        const image_1 = new File([readFileSync("./image.png")], "");
        const image_2 = new File([readFileSync("./image.png")], "");
        yield client.getVerificationService().verifyTraderPlus({
            country: "AR",
            declaration_template_id: 92,
            declaration_id: 96,
            fields: [
                ["asset_11_435_amount", 10.000],
                ["asset_11_435_currency", "ARS"],
                ["asset_11_435_company_name", "notbank"],
                ["asset_11_435_work_longevity", "less_than_a_year"]
            ],
            files: [
                ["asset_11_435_file[]", image_1],
                ["asset_11_435_file[]", image_2]
            ],
        });
    }));
    it("should start the institutional verification and return sumsub credentials", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client
            .getVerificationService()
            .startInstitutionalVerification();
        console.log("institutional verification:", response);
        assert.ok(response, "Response should not be null");
        assert.ok("link" in response, "Response should carry the sumsub link");
        assert.ok(response.user_id, "Response should carry the user id");
    }));
    it("should fetch the user current verification level and status", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield client.getVerificationService().getVerificationStatus();
        console.log("user verification level and state:", response);
        assert.ok(response, "Response should not be null");
    }));
});
