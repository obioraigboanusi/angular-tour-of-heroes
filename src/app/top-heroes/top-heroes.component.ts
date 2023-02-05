import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.scss'],
})
export class TopHeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesService: HeroService) {}

  ngOnInit() {
    this.fetchHeroes();
  }

  fetchHeroes(): void {
    this.heroesService.getHeroes().subscribe((heroes: Hero[]): void => {
      this.heroes = heroes.slice(1, 5);
      
    });
  }
}
