import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent {
    title: string = 'Heroes DC vs Marvel';

    name: string = 'IroMan';
    age: number = 45;
    birthYear?: number;
    currentYear: number = 2022;

    get lengthName (): number {
        let nameCusrsive = this.name.length;
        return nameCusrsive;
    }

    getBirthYear(): string {
        this.birthYear = this.currentYear - this.age;
        return `Year birth is: ${this.birthYear} th.`;
    };

    changeNameHero(): void {
        this.name = 'SpiderMan'
    };
    changeAgeHero(): void {
        this.age = 34;
    };

}