import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class RegisterService {
    constructor(connection) {
        this.connection = connection;
    }
    registerUser(request) {
        return this.connection.nbRequest(Endpoint.REGISTER, RequestType.POST, request);
    }
}
