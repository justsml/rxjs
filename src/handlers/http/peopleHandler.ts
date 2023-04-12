import { APIGatewayProxyHandler } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

import { GetNPeople, getNPeople } from '@rx-example/operation';
import { getPathParamFromAPIGatewayProxyEvent } from '@rx-example/utilities/aws';

export const handler =
  (getNPeopleFn: GetNPeople = getNPeople): APIGatewayProxyHandler =>
  async (event, _context) => {
    const n = getPathParamFromAPIGatewayProxyEvent('n', parseInt)(event);
    const people = await getNPeopleFn(n);
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(people),
    };
  };

export const peopleHandler = handler();
