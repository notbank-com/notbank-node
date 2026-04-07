import { FormData } from 'formdata-node';
export declare class FormDataBuilder {
    static build<T1>(data: {
        fields: [string, string | number | boolean][];
        files: [string, File][];
        message: T1;
    }): FormData;
}
