import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { map, range } from 'lodash';
import { withLatestFrom, zip } from 'rxjs';

import { People, Starship } from '@rx-example/types';

// This creates an array of Promises that will call SWAPI to get people
const getNPeoplePromises = (n) =>
  map(range(1, n), async (i) => {
    console.warn(i, 'getting person...');
    const response = await axios.get<People>(
      `https://swapi.dev/api/people/${i}`,
    );
    console.warn(i, '...person got');
    return response.data;
  });

// This creates a single Promise that will get a starship
const getMyStarship = () =>
  new Promise<Starship>(async (resolve) => {
    console.warn('Getting our starship...');
    const response = await axios.get<Starship>(
      'https://swapi.dev/api/starships/10/',
    );
    const starship = response.data;
    console.warn('...starship got');
    resolve(starship);
  });

const transform = (people: People[], starship: Starship): Starship => ({
  ...starship,
  passengers: people,
});

export const getCraftAndCrew = () =>
  new Promise((resolve) => {
    // 1. We zip all our promises up to create one Observable
    zip(...getNPeoplePromises(10))
      .pipe(
        // 2. we operate over the Observables
        withLatestFrom(getMyStarship()), // 3. Waits to finish until it gets the latest from this call
      )
      .subscribe(([people, starship]: [People[], Starship]) => {
        // 4. Now we have everything we need
        const starshipWithCrew = transform(people, starship);
        resolve(starshipWithCrew);
      });
  });

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const craftAndCrew = await getCraftAndCrew();

  return {
    statusCode: StatusCodes.OK,
    body: JSON.stringify(craftAndCrew),
  };
};
