import { Component } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent  {

  title: string = 'Heroes List';

  heroDel: string = '';
  heroes: string[] = ['Iroman','Spiderman','Batman','Superman','Thork'];

  deleteHero() {
    this.heroDel = this.heroes.pop() || '';
    console.log(`Hero delete ${ this.heroDel }`);
  }
}
