import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { peopleHandler } from './peopleHandler';

const event = {} as unknown as APIGatewayProxyEvent;
const context = {} as unknown as Context;
const callback = jest.fn();

describe(peopleHandler, () => {
  it('returns a response', async () => {
    expect(await peopleHandler(event, context, callback)).toMatchSnapshot();
  });
});
