import { GetHttpRequestFunction } from '@slicing/types';
import { Observable } from 'rxjs';
import { HttpResponse, RxJSHttpClient } from 'rxjs-http-client';
import { http } from './http';
import fetch, {
  Headers,
  Request,
  Response,
} from 'node-fetch'

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
  globalThis.Request = Request
  globalThis.Response = Response
}

export interface Getter {
  (path: string): (index: number) => Observable<HttpResponse>;
}

export const getFromSWAPI =
  (
    baseUrl: string = 'https://swapi.dev/api/',
    getFn: GetHttpRequestFunction = http.get,
  ): Getter =>
    (path) =>
      (index) =>
        new RxJSHttpClient().get(`${baseUrl}${path}/${index}/`);
