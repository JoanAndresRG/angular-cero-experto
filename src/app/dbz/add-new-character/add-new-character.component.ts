import { Component, Input } from '@angular/core';
import { ModelDbz } from 'src/app/models/dbz.models';

@Component({
  selector: 'app-add-new-character',
  templateUrl: './add-new-character.component.html',
  styleUrls: ['./add-new-character.component.css']
})
export class AddNewCharacterComponent  {

  @Input() characterts: ModelDbz[] = []; 
  
  @Input() characterNew: ModelDbz = {};

  

  addCharacter() {
    if (this.characterNew.name?.trim().length === 0) {
      return;
    }
    this.characterts.push(this.characterNew); 
    this.characterNew = { name: '', power: 0 }
  };
}
