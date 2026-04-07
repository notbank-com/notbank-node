import axios from "axios";
import { RequestType } from "../serviceClient.js";
export class FormDataRequester {
    static post(config) {
        const requestData = {
            method: RequestType.POST,
            headers: FormDataRequester.getHeaders(config.extraHeaders),
        };
        return axios.post(config.url, config.formData, requestData);
    }
    static getHeaders(extraHeaders) {
        var headers = {
            charset: "UTF-8",
            "Content-Type": "multipart/form-data"
        };
        if (extraHeaders) {
            return Object.assign(Object.assign({}, headers), extraHeaders);
        }
        return headers;
    }
}
