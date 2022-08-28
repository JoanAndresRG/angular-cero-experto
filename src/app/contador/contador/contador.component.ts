import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
    title: string = 'Contador App';
    number: number = 0;
    base: number = 5;

    acumular(value: number) {
        this.number += value;
    }
}