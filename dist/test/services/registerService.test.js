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
import { Gender, IdentityType, Profession, BRState } from "../../lib/models/enums/index.js";
describe("account service", () => {
    const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
    describe("registerUser", () => {
        it("should register a new user", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getRegisterService().registerUser({
                first_name: "Millaray",
                last_name: "Villanueva",
                email: "ismael+15@dysopsis.com"
            });
            console.log("user registration:", response);
            assert.ok(response, "Response should not be null");
        }));
    });
    describe("registerBasicCaasUser", () => {
        it("should register a basic CaaS user", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getRegisterService().registerBasicCaasUser({
                first_name: "Juan",
                last_name: "Perez",
                phone_number: "+56911111111",
                profession: Profession.TRADER,
                gender: Gender.MAN,
                birthdate: "01/01/1990",
                citizenship: "BR",
                identity_type: IdentityType.DNI,
                identity_number: "55330450314",
                identity_country: "BR",
                address_country: "BR",
                address_city: "São Paulo",
                address_street: "Calle 1",
                address_postal_code: "123456",
                address_district: "Distrito 1",
                address_number: "1234",
                address_state: BRState.SAO_PAULO
            });
            assert.ok(response, "Response should not be null");
            assert.ok(response.userId, "Response should contain userId");
            assert.ok(response.token, "Response should contain token");
        }));
    });
    describe("registerAdvancedCaasUser", () => {
        it("should register an advanced/trader CaaS user", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield client.getRegisterService().registerAdvancedCaasUser({
                first_name: "Juan",
                last_name: "Perez",
                phone_number: "+56911111111",
                profession: Profession.TRADER,
                gender: Gender.MAN,
                birthdate: "01/01/1990",
                citizenship: "BR",
                identity_type: IdentityType.DNI,
                identity_number: "55330450314",
                identity_country: "BR",
                address_country: "BR",
                address_city: "São Paulo",
                address_street: "Calle 1",
                address_postal_code: "123456",
                address_district: "Distrito 1",
                address_number: "1234",
                address_state: BRState.SAO_PAULO,
                pep: false,
                subject_comply: false,
                is_public_servant: false
            });
            assert.ok(response, "Response should not be null");
            assert.ok(response.userId, "Response should contain userId");
            assert.ok(response.token, "Response should contain token");
        }));
    });
});
