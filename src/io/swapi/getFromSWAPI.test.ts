import { from } from 'rxjs';

import { getFromSWAPI } from './getFromSWAPI';
import { LarsOwen } from '@rx-example/__fixtures__/swapi/people';
import { People } from '@rx-example/types';

describe(getFromSWAPI, () => {
  it('gets a request from SWAPI', (done) => {
    const getFn = jest
      .fn()
      .mockReturnValueOnce(from(Promise.resolve({ data: LarsOwen })));
    const observable = getFromSWAPI<People>('https://swapi.dev/api/')(
      'people',
      getFn,
    )(1);
    observable.subscribe((result) => {
      expect(result).toEqual(LarsOwen);
      done();
    });
  });
});
