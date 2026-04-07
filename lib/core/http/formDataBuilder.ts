import { FormData } from 'formdata-node';

export class FormDataBuilder {
  public static build<T1>(data: {
    fields: [string, string | number | boolean][],
    files: [string, File][],
    message: T1
  }): FormData {
    const formData = new FormData();
    data.fields.map(([fieldName, field]) => {
      typeof field === "string"
        ? formData.append(fieldName, field)
        : formData.append(fieldName, JSON.stringify(field))
    });
    data.files.map(([fileName, file]) => formData.append(fileName, file));
    Object.keys(data.message).map(key => {
      formData.append(key, data.message[key])
    });
    return formData;
  }
}