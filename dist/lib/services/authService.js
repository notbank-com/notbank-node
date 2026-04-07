var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class AuthService {
    constructor(connection) {
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/?http#webauthenticateuser
     */
    webAuthenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.connection.apRequest(Endpoint.WEB_AUTHENTICATE_USER, RequestType.NONE, params);
        });
    }
    /**
     * https://apidoc.notbank.exchange/?http#logout
     */
    logOut() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.connection.apRequest(Endpoint.LOGOUT, RequestType.POST);
        });
    }
}
