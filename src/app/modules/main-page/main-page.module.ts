import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [
    MainPageComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
