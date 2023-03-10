import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchHeroes();
  }
  fetchHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
      this.messageService.add('HeroService: fetched heroes');
    });
  }
  clickHero(id: number): void {
    console.log('hero clicked ', id);
  }
}
