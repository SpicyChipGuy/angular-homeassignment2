import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "All Might" },
      { id: 12, name: "Endeavor" },
      { id: 13, name: "Deku" },
      { id: 14, name: "Bakugo" },
      { id: 15, name: "Eraser Head" },
      { id: 16, name: "Hawks" },
      { id: 17, name: "Gran Torino" },
      { id: 18, name: "Mirko" },
      { id: 19, name: "Ryukyu" },
      { id: 20, name: "Gang Orca" }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
