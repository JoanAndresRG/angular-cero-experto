import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListHeroComponent } from "./list-hero/list-hero.component";



@NgModule ({
    declarations: [
        HeroComponent,
        ListHeroComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroComponent,
        ListHeroComponent
    ],
})

export class HeroesMudule { }