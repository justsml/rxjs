import axios from 'axios';
import { getHttpResponse } from '@rx-example/__fixtures__/io/http';

import { get } from "./get";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValueOnce(getHttpResponse)

describe(get, () => {
  it('uses axios to perform an http get', (done) => {
    get('https://swapi.dev/api/people/1').subscribe(
      result => {
        expect(result).toEqual(getHttpResponse);
        done();
      }
    )
  })
})