import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { MessageService } from '../messageService/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes!');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`HeroService: fetched ID: ${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) {}
}
