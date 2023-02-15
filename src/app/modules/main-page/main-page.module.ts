import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { PopupModule } from "@app/ui/popup/popup.module";
import { HeroComponent } from "./components/hero/hero.component";
import { OrderFormComponent } from "./components/order-form/order-form.component";
import { ProductsComponent } from "./components/products/products.component";
import { MainPageRoutingModule } from "./main-page-routing.module";
import { MainPageComponent } from "./main-page.component";

@NgModule({
  declarations: [MainPageComponent, HeroComponent, ProductsComponent, OrderFormComponent],
  imports: [CommonModule, MainPageRoutingModule, ReactiveFormsModule, PopupModule],
})
export class MainPageModule {}
