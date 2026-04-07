import axios from "axios";
import { RequestType } from "../serviceClient.js";
export class Requester {
    static getFunction(requestType) {
        try {
            return Requester.requestMethodMapping[requestType];
        }
        catch (error) {
            throw new Error('invalid request type: ' + requestType);
        }
    }
}
Requester.requestMethodMapping = {
    [RequestType.POST]: (url, data, config) => axios.post(url, data, config),
    [RequestType.GET]: (url, data, config) => axios.get(url, Object.assign({ data: data }, config)),
    [RequestType.DELETE]: (url, data, config) => axios.delete(url, Object.assign({ data: data }, config)),
    [RequestType.NONE]: (url, data, config) => { throw new Error('invalid request, no request type'); }
};
