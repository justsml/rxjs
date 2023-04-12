import { getFromSWAPI, Getter } from '@rx-example/io/swapi';
import { transformSwapiPeopleResponse } from '@rx-example/transform/swapi';
import { People } from '@rx-example/types';

export interface GetPeople {
  (index: number, getFn?: Getter): Promise<People>;
}

export const getPeople: GetPeople = async (index, getFn = getFromSWAPI()) => {
  const response = await getFn('people')(index);
  return transformSwapiPeopleResponse(response.data);
};
