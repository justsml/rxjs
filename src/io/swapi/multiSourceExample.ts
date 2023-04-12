import { People, Starship } from "@rx-example/types";
import axios from "axios";
import { map, range } from "lodash";
import { mergeMap, withLatestFrom, zip } from "rxjs";

// This creates an array of Promises that will call SWAPI to get people
const getNPeoplePromises = (n) => map(
  range(1, n),
  async i => {
    console.warn(i, 'getting person...');
    const response = await axios.get<People>(`https://swapi.dev/api/people/${i}`)
    console.warn(i, '...person got');
    return response.data;
  });

// This creates a single Promise that will get a starship  
const getMyStarship = () => new Promise<Starship>(async resolve => {
  console.warn('Getting our starship...');
  const response = await axios.get<Starship>('https://swapi.dev/api/starships/10/');
  const starship = response.data;
  console.warn('...starship got');
  resolve(starship);
});

export const handler = () => new Promise(resolve => {

  // 1. We zip all our promises up to create one Observable
  zip(...getNPeoplePromises(10)).pipe(
    mergeMap(people => people),
    mergeMap(async person => {
      console.warn('WTF', person);
      return person
    }),
    withLatestFrom(getMyStarship())
  ).subscribe(result => {
    console.warn(result);
    resolve(result);
  });
}); 