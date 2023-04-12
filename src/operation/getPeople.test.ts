import { LarsOwen } from '@rx-example/__fixtures__/swapi/people';
import { getPeople } from './getPeople';

describe(getPeople, () => {
  it('makes a complete people request', async () => {
    const getter = jest.fn().mockResolvedValue({
      data: LarsOwen,
    });

    const getterFn = () => getter;

    expect(await getPeople(6, getterFn)).toEqual(LarsOwen);
  });
});
