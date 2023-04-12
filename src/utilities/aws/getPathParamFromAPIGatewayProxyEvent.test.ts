import { apiGatewayEvent } from '@slicing/__fixtures__/aws';
import { parseInt } from 'lodash';
import { getPathParamFromAPIGatewayProxyEvent } from './getPathParamFromAPIGatewayProxyEvent';

describe(getPathParamFromAPIGatewayProxyEvent, () => {
  it('returns the type you want after conversion', () => {
    const value = getPathParamFromAPIGatewayProxyEvent(
      'n',
      parseInt,
    )(apiGatewayEvent);
    expect(value).toEqual(2);
  });
});
