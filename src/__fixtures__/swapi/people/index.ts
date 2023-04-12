import { transformSwapiPeopleResponse } from '@rx-example/transform/swapi';
import { People } from '@rx-example/types';
import LarsOwenJSON from './lars-owen.json';

export const LarsOwen: People = transformSwapiPeopleResponse(LarsOwenJSON);
