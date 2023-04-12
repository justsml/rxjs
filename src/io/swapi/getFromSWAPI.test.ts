import LarsOwenJSON from '@slicing/__fixtures__/swapi/people/lars-owen.json';

import { getFromSWAPI } from './getFromSWAPI';

describe(getFromSWAPI, () => {
  it('gets a request from SWAPI', (done) => {
    const getter = jest.fn().mockResolvedValue({
      data: LarsOwenJSON,
    });
    getFromSWAPI('https://swapi.dev/api/')('people')(1).pipe().subscribe(console.warn);
  });
});
