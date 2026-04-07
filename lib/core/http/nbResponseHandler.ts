import { NbResponse } from "../../models/nbResponse";
import { NotbankError } from "../../models/notbankError";
import { AxiosResponse } from 'axios';


export class NbResponseHandler {
  public static async handle<T>(response: AxiosResponse<any>, paged: boolean): Promise<T> {
    var jsonResponse = response.data;
    if (!jsonResponse) {
      throw new NotbankError("http error. (status=" + response.status + ")", -1)
    }
    var nbResponse = jsonResponse as NbResponse;
    if (nbResponse?.status === 'success') {
      return paged ? jsonResponse as T : nbResponse.data as T
    }
    throw NotbankError.Factory.createFromNbResponse(nbResponse, response.status);
  }
}
