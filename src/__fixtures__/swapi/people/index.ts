import { transformSwapiPeopleResponse } from '@slicing/transform/swapi';
import { People } from '@slicing/types';
import LarsOwenJSON from './lars-owen.json';

export const LarsOwen: People = transformSwapiPeopleResponse(LarsOwenJSON);
