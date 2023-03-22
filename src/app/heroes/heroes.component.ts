import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/heroService/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroSevice: HeroService) {}

  getHeroes(): void {
    this.heroSevice.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
