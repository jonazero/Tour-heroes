import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', puntaje: 10},
      { id: 12, name: 'Narco', puntaje: 9},
      { id: 13, name: 'Bombasto', puntaje: 8},
      { id: 14, name: 'Celeritas', puntaje: 7},
      { id: 15, name: 'Magneta', puntaje: 6},
      { id: 16, name: 'RubberMan', puntaje: 5},
      { id: 17, name: 'Dynama', puntaje: 4},
      { id: 18, name: 'Dr IQ', puntaje: 3},
      { id: 19, name: 'Magma', puntaje: 2},
      { id: 20, name: 'Tornado', puntaje: 1}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
