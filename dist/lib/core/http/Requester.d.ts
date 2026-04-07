import { AxiosResponse, AxiosRequestConfig } from "axios";
import { RequestType } from "../serviceClient.js";
export type RequestFunction = (url: string, data: any, config?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any>>;
export declare class Requester {
    static requestMethodMapping: {
        [key in RequestType]: RequestFunction;
    };
    static getFunction(requestType: RequestType): RequestFunction;
}
