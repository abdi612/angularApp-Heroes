import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent 
  implements OnInit {
    heroes : Hero[] = [];
    selectedHero?: Hero ;
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  //original
  // assigns an array of heroes to the component's heroes property
  //he assignment occurs synchronously, as if the server could return heroes instantly
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // observable
  //waits for the Observable to emit the array of heroes
  getHeroes() : void{
    //The subscribe() method passes the emitted array to the callback, 
    //which sets the component's heroes property.
   this.heroService.getHeroes().subscribe(
     heroes => this.heroes = heroes
   );
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
