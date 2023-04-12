import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { map, range } from 'lodash';
import { withLatestFrom, zip } from 'rxjs';

import { People, Starship } from '@rx-example/types';

// This creates an array of Promises that will call SWAPI to get people
const getNPeoplePromises = (n) => range(1, n).map(getPerson);

const getPerson = (i) => {
  console.warn(i, 'getting person...');
  return axios.get<People>(
    `https://swapi.dev/api/people/${i}`,
  ).then(response => response.data)
}

// This creates a single Promise that will get a starship
const getMyStarship = () => {
  console.warn('Getting our starship...');
  return axios.get<Starship>('https://swapi.dev/api/starships/10/')
    .then(({data}) => {
      console.warn('...starship got');
      return data;
    })
});

const transform = (people: People[], starship: Starship): Starship => ({
  ...starship,
  passengers: people,
});

export const getCraftAndCrew = () => Promise.all([
    getMyStarship(),
    ...getNPeoplePromises(10)
  ])
  .then(([starship, ...people]: [Starship, People[]]) => transform(people, starship));

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const craftAndCrew = await getCraftAndCrew();

  return {
    statusCode: StatusCodes.OK,
    body: JSON.stringify(craftAndCrew),
  };
};
