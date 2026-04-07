import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { RegisterNotbankUserRequest, UserRegistration } from "../models";

export class RegisterService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  registerUser(request: RegisterNotbankUserRequest): Promise<UserRegistration> {
    return this.connection.nbRequest(
      Endpoint.REGISTER,
      RequestType.POST,
      request
    );
  }
}
