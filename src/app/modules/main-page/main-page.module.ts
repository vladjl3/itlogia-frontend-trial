import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderFormComponent } from './components/order-form/order-form.component';


@NgModule({
  declarations: [
    MainPageComponent,
    HeroComponent,
    ProductsComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
