import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

export interface HttpRequestGetFunction<
  T = any,
  R = AxiosResponse<T>,
  D = any,
> {
  (url: string, config?: AxiosRequestConfig<D>): Observable<R>;
}

export const httpRequestGet: HttpRequestGetFunction = <
  T = any,
  R = AxiosResponse<T>,
  D = any,
>(
  url: string,
  config?: AxiosRequestConfig<D>,
): Observable<R> => from(axios.get<T, R>(url, config));
