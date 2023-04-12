import { APIGatewayProxyEvent } from 'aws-lambda';
import { flow } from 'lodash';
import { get as getFP } from 'lodash/fp';

export const getPathParamFromAPIGatewayProxyEvent = <T>(
  name: string,
  conversionFunction?: (string) => T,
): ((event: APIGatewayProxyEvent) => T) =>
  flow(getFP(`pathParameters.${name}`), (value) =>
    conversionFunction ? conversionFunction(value) : value,
  );
