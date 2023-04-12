import { transformAllFieldNamesToCamel } from 'field-caser';

import { People } from '@rx-example/types';

export const transformSwapiPeopleResponse = (response: any) =>
  <People>transformAllFieldNamesToCamel(response);
