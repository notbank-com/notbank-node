import { readFileSync } from 'fs';


import "mocha";
import { FormDataBuilder } from '../../../lib/core/http/formDataBuilder';
import { FormDataRequester } from '../../../lib/core/http/formDataRequester';

describe("form data", () => {
  it("", async () => {
    let file = new File(["some text"], "file.txt")
    let file2 = new File([readFileSync('LICENSE')], "some");
    const formData = FormDataBuilder.build({
      fields: [["aKey", "a value"], ["a number", 23], ["a boolean", true]],
      files: [["file[]", file], ["file[]", file2]],
      message: { anotherField: false }
    })
    var response = await FormDataRequester.post({
      url: "http://localhost:8000",
      formData: formData
    })
  })
});