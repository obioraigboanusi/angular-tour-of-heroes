import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.fetchHero();
  }
  fetchHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.heroService.getHero(+id).subscribe((hero) => {
      this.messageService.add(`HeroesComponent: Selected hero id=${hero?.id}`);
      this.hero = hero;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
