import { NbResponse } from "./nbResponse.js";
import { StandardResponse as StandardApResponse } from "./standardResponse.js";
export declare class NotbankError extends Error {
    code: number;
    constructor(message: string, code: number);
    static Factory: {
        new (): {};
        createFromApResponse(standardResponse: StandardApResponse): NotbankError;
        createFromNbResponse(standardResponse: NbResponse, httpStatus: number): NotbankError;
    };
}
