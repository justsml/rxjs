import { People } from "@rx-example/types";
import axios from "axios";
import { get, map, range } from "lodash";
import { combineLatest, from, map as mapRX, merge, mergeMap, of, switchMap, withLatestFrom, zip } from "rxjs";
import { getDelayedEvent } from "./getDelayedEvent";
import { getPeopleFromSWAPI } from "./getPeopleFromSWAPI";
jest.setTimeout(20000);

describe(getDelayedEvent, () => {
  it('keeps getting people until it gets another event', (done) => {
    const getPeopleEvents = map(
      range(1, 10),
      i => axios.get<People>(`https://swapi.dev/api/people/${i}`)
    );



    const getMyStarship = () => new Promise(resolve => {
      setTimeout()
    });


    zip(...getPeopleEvents).pipe(
      mergeMap(response => response),
      mergeMap(async response => response.data),
      withLatestFrom(getDelayedEvent())
    ).subscribe(result => {
      console.warn(result);
      done();
    });
  })
})