import { Injectable } from '@angular/core';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from "rxjs";


@Injectable()
export class IexQuoteService {

  constructor(
    private axios: AxiosInstance,
    private axiosRequestConfig: AxiosRequestConfig,
    private axiosResponse: Promise<AxiosResponse<any>>
  ) { }

  getStockQuote(): String {
    var responseJson = "";
    const options = {
      method: 'GET',
      url: 'https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread',
      headers: {
        'x-rapidapi-key': 'IEX_RAPIDAPI_KEY',
        'x-rapidapi-host': 'investors-exchange-iex-trading.p.rapidapi.com'
      }
    };
    this.axiosRequestConfig.url = options.url;
    this.axiosRequestConfig.method = "GET";
    this.axiosRequestConfig.headers = options.headers;

    this.axiosResponse = this.axios.request(this.axiosRequestConfig);
    this.axiosResponse.then(function (response) {
      responseJson = response.data;
    });
    return responseJson;
  }

}
