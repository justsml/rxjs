import { Observable } from 'rxjs';
import { HttpRequestConfig, HttpResponse } from 'rxjs-http-client';

/**
 * Separate because config is optional
 */
export interface GetHttpRequestFunction {
  (url: string, config?: Partial<HttpRequestConfig>): Observable<HttpResponse>;
}

interface BaseHttpRequestFunction {
  (url: string, config: Partial<HttpRequestConfig>): Observable<HttpResponse>;
}

export type DeleteHttpRequestFunction = BaseHttpRequestFunction;
export type PatchHttpRequestFunction = BaseHttpRequestFunction;
export type PostHttpRequestFunction = BaseHttpRequestFunction;
export type PutHttpRequestFunction = BaseHttpRequestFunction;