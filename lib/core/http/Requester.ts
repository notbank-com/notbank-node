import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { RequestType } from "../serviceClient"

export type RequestFunction = (url: string, data: any, config?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any>>

export class Requester {
  static requestMethodMapping: { [key in RequestType]: RequestFunction } = {
    [RequestType.POST]: (url, data, config) => axios.post(url, data, config),
    [RequestType.GET]: (url, data, config) => axios.get(url, { data: data, ...config }),
    [RequestType.DELETE]: (url, data, config) => axios.delete(url, { data: data, ...config }),
    [RequestType.NONE]: (url, data, config) => { throw new Error('invalid request, no request type') }
  }

  static getFunction(requestType: RequestType): RequestFunction {
    try {
      return Requester.requestMethodMapping[requestType]
    } catch (error) {
      throw new Error('invalid request type: ' + requestType)
    }
  }
}