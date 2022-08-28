import { Component } from '@angular/core';
import { ModelDbz } from 'src/app/models/dbz.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  title: string = 'Dragon Ball Z';
  characterNew: ModelDbz = {};
  characterts: ModelDbz[] = [
    {
      name: 'Krilin',
      power: 1800
    },
    {
      name: 'Goku',
      power: 17200
    },
    {
      name: 'Vegeta',
      power: 15200
    }
  ];

}
