import { getFromSWAPI, Getter } from '@slicing/io/swapi';
import { transformSwapiPeopleResponse } from '@slicing/transform/swapi';
import { People } from '@slicing/types';

export interface GetPeople {
  (index: number, getFn?: Getter): Promise<People>;
}

export const getPeople: GetPeople = async (index, getFn = getFromSWAPI()) => {
  const response = await getFn('people')(index);
  return transformSwapiPeopleResponse(response.data);
};
