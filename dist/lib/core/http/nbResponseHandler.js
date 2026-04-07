var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NotbankError } from "../../models/notbankError.js";
export class NbResponseHandler {
    static handle(response, paged) {
        return __awaiter(this, void 0, void 0, function* () {
            var jsonResponse = response.data;
            if (!jsonResponse) {
                throw new NotbankError("http error. (status=" + response.status + ")", -1);
            }
            var nbResponse = jsonResponse;
            if ((nbResponse === null || nbResponse === void 0 ? void 0 : nbResponse.status) === 'success') {
                return paged ? jsonResponse : nbResponse.data;
            }
            throw NotbankError.Factory.createFromNbResponse(nbResponse, response.status);
        });
    }
}
