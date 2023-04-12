import { People } from "@rx-example/types";
import { getFromSWAPI } from "./getFromSWAPI";

export const getPeopleFromSWAPI = getFromSWAPI<People>()('people');