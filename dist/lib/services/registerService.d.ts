import { ServiceConnection } from "../core/serviceClient.js";
import { RegisterNotbankUserRequest, RegisterBasicCaasUserRequest, RegisterAdvancedCaasUserRequest, UserRegistration } from "../models/index.js";
export declare class RegisterService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    registerUser(request: RegisterNotbankUserRequest): Promise<UserRegistration>;
    registerBasicCaasUser(request: RegisterBasicCaasUserRequest): Promise<UserRegistration>;
    registerAdvancedCaasUser(request: RegisterAdvancedCaasUserRequest): Promise<UserRegistration>;
}
