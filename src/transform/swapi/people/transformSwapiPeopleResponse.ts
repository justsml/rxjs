import { transformAllFieldNamesToCamel } from 'field-caser';

import { People } from '@slicing/types';

export const transformSwapiPeopleResponse = (response: any) =>
  <People>transformAllFieldNamesToCamel(response);
