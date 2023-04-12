import { APIGatewayProxyEvent } from 'aws-lambda';
import Event from './apiGatewayEvent.json';

export const apiGatewayEvent: APIGatewayProxyEvent =
  Event as unknown as APIGatewayProxyEvent;
