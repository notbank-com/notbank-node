import { AxiosResponse } from 'axios';
export declare class NbResponseHandler {
    static handle<T>(response: AxiosResponse<any>, paged: boolean): Promise<T>;
}
