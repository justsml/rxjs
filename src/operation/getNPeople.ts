import { flow, range } from 'lodash';
import { map as mapFP } from 'lodash/fp';

import { People } from '@slicing/types';

import { GetPeople, getPeople } from './getPeople';

export interface GetNPeople {
  (n: number, getPeopleFn?: GetPeople): Promise<People[] | unknown[]>;
}

export const getNPeople: GetNPeople = (
  numberOfPeople,
  getPeopleFn = getPeople,
) =>
  flow(
    (n) => range(0, n),
    mapFP((i) => getPeopleFn(i)),
    (promises: Promise<People>[]) => Promise.all(promises),
  )(numberOfPeople);
