import { AxiosResponse } from "axios";
import { RequestType } from "../serviceClient.js";
export declare class JsonRequester {
    static request<T1>(config: {
        url: string;
        requestType: RequestType;
        params?: T1;
        extraHeaders?: any;
    }): Promise<AxiosResponse<any>>;
    private static getHeaders;
    private static getUrlWithSearchParams;
}
