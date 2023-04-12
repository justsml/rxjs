import { getCraftAndCrew } from '.';

describe(getCraftAndCrew, () => {
  it('parallelizes all the calls', async () => {
    const result = await getCraftAndCrew();
    console.warn('RESULT', result);
    expect(result).toMatchSnapshot();
  });
});
