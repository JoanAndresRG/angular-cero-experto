import { Component, Input } from '@angular/core';
import { ModelDbz } from 'src/app/models/dbz.models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent  {

  @Input() characterts: ModelDbz [] = [];
}
