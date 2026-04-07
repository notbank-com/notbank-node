import { AxiosResponse } from 'axios';
export declare class ApResponseHandler {
    #private;
    static handle<T>(response: AxiosResponse<any>): Promise<T>;
}
