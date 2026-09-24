import assert from "assert";
import "mocha";

import { readFileSync } from 'fs';
import { DocumentAdressType, Gender, Profession } from "../../lib/models/enums";
import { NotbankClient } from "../../lib/services/notbankClient";
import { TestHelper } from "./TestHelper";

describe("verification service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange", request=>{console.log(request.url)}, response => {console.log(response)});
  client.updateSessionToken("e613604a-4359-cded-096f-0f343674b9ae")


  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await client.authenticateUser(TestHelper.getCredentials());
  });


  describe("verifyBasic", () => {
    it("should verify an user to basic level", async () => {
      const response = await client.getVerificationService().verifyBasic({
        is_business: true,
        profession: Profession.ACCOUNTANT,
        gender: Gender.MAN,
        city: "Novosibirsk",
        street: "1",
        country: "RU"
      });
      console.log("basic verification:", response);
      assert.ok(response, "Response should not be null");
    });
  });

  it("should verify an user to trader level", async () => {
    const image = new File([readFileSync("image.png")], "image.png");
    await client.getVerificationService().verifyTrader({
      user_id: "ac77a800-7914-4d04-ba3b-8f66c5b4968d",
      pep: false,
      subject_comply: false,
      is_public_servant: false,
      document_address_file: image,
      document_address_type: DocumentAdressType.CREDIT_CARD_BILL
    });
  });

  it("should fetch the schemas for trader plus verification", async () => {
    const response = await client.getVerificationService().getTraderPlusVerificationSchemas({
      country: "AR",
    });
    console.log("trader plus verification schemas:", JSON.stringify(response));
    assert.ok(response, "Response should not be null");
  });

  it("should verify an user to trader plus level", async () => {
    const image_1 = new File([readFileSync("./image.png")], "");
    const image_2 = new File([readFileSync("./image.png")], "");
    await client.getVerificationService().verifyTraderPlus({
      country: "AR",
      declaration_template_id: 92,
      declaration_id: 96,
      fields: [
        ["asset_11_435_amount", 10.000],
        ["asset_11_435_currency", "ARS"],
        ["asset_11_435_company_name", "notbank"],
        ["asset_11_435_work_longevity", "less_than_a_year"]],
      files: [
        ["asset_11_435_file[]", image_1],
        ["asset_11_435_file[]", image_2]],
    });
  });

  it("should start the institutional verification and return sumsub credentials", async () => {
    const response = await client
      .getVerificationService()
      .startInstitutionalVerification();
    console.log("institutional verification:", response);
    assert.ok(response, "Response should not be null");
    assert.ok("link" in response, "Response should carry the sumsub link");
    assert.ok(response.user_id, "Response should carry the user id");
  });

  it("should fetch the user current verification level and status", async () => {
    const response = await client.getVerificationService().getVerificationStatus();
    console.log("user verification level and state:", response);
    assert.ok(response, "Response should not be null");
  });
});
