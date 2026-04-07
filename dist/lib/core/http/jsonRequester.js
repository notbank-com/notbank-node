import { RequestType } from "../serviceClient.js";
import { Requester } from "./Requester.js";
export class JsonRequester {
    static request(config) {
        const isPostOrDeleteRequest = [
            RequestType.POST, RequestType.DELETE
        ].includes(config.requestType);
        var url = isPostOrDeleteRequest
            ? config.url
            : JsonRequester.getUrlWithSearchParams(config.url, config.params);
        var data = isPostOrDeleteRequest
            ? config.params :
            null;
        var requestConfig = {
            method: config.requestType,
            headers: JsonRequester.getHeaders(config.extraHeaders, isPostOrDeleteRequest),
            validateStatus: status => true,
        };
        return Requester.getFunction(config.requestType)(url, data, requestConfig);
    }
    static getHeaders(extraHeaders, withJsonData = false) {
        var headers = {
            charset: "UTF-8"
        };
        if (withJsonData) {
            headers["Content-type"] = "application/json";
        }
        if (extraHeaders) {
            return Object.assign(Object.assign({}, headers), extraHeaders);
        }
        return headers;
    }
    static getUrlWithSearchParams(endpoint, params) {
        return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
    }
}
