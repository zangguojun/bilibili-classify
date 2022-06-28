import axios, { AxiosRequestConfig, Method } from "axios"
import _ from "lodash"
import qs from "qs"

import Singleton from "./singleton"

export default class Request extends Singleton {
  protected baseUrl!: string

  protected async request(options: AxiosRequestConfig): Promise<any> {
    const isGet = options.method?.toLocaleUpperCase() === "GET"

    const headers: { [key: string]: any } = isGet
      ? {}
      : {
          "content-type": "application/x-www-form-urlencoded"
        }

    if (_.get(chrome, "tabs.sendMessage", null) !== null) {
      return await axios({
        method: options.method,
        baseURL: this.baseUrl,
        url: options.url,
        ...(isGet
          ? { params: options.data }
          : { data: qs.stringify(options.data) }),
        headers
      })
        .then((response) => {
          return response.data.data
        })
        .catch(() => {
          return false
        })
    }

    return new Promise((resolve, reject) => {
      chrome.runtime
        .sendMessage({
          type: options.method,
          baseUrl: this.baseUrl,
          url: options.url,
          ...(isGet
            ? { params: options.data }
            : { data: qs.stringify(options.data) }),
          headers
        })
        .then((json) => {
          if (!json) reject(new Error("error"))
          resolve(json)
        })
    })
  }
}
