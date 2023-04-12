import { handler } from "./multiSourceExample";

jest.setTimeout(60000);

describe(handler, () => {
  it('parallelizes all the calls', async () => {
    const result = await handler();
    console.warn('RESULT', result);
  })
});