import { ServiceConnection } from "../core/serviceClient.js";
import { RegisterNotbankUserRequest, UserRegistration } from "../models/index.js";
export declare class RegisterService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    registerUser(request: RegisterNotbankUserRequest): Promise<UserRegistration>;
}
