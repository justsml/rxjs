import { People } from './People';

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string | People[];
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  mglt: string;
  starshipClass: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
