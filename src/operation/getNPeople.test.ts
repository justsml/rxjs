import { LarsOwen } from '@slicing/__fixtures__/swapi/people';
import { getNPeople } from './getNPeople';

describe(getNPeople, () => {
  it('returns n people', async () => {
    const mockGetPeople = jest.fn().mockResolvedValue(LarsOwen);
    const n = 10;
    const people = await getNPeople(n, mockGetPeople);
    expect(people.length).toEqual(n);
    expect(mockGetPeople).toHaveBeenCalledTimes(n);
    expect(people).toMatchSnapshot();
  });
});
