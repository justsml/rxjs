import { get as getFP } from 'lodash/fp';
import { map, Observable } from 'rxjs';

import { HttpRequestGetFunction, httpRequestGet } from '../http';

export interface Getter<T extends any> {
  (path: string, getFn?: HttpRequestGetFunction<T>): (
    index: number,
  ) => Observable<T>;
}

export const getFromSWAPI =
  <T>(baseUrl: string = 'https://swapi.dev/api/'): Getter<T> =>
  (path, httpRequestGetFN = httpRequestGet) =>
  (index) =>
    httpRequestGetFN(`${baseUrl}${path}/${index}/`).pipe(
      map(getFP('data')),
    ) as Observable<T>;
