import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]>{
    //of(HEROES) returns an Observable<Hero[]> 
    //that emits a single value, the array of mock heroes.
    const heroes = of(HEROES);
    //send message when the heroes are fetched
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
