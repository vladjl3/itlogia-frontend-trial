import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AfterOrderSentPopupComponent } from "./components/after-order-sent-popup/after-order-sent-popup.component";
import { AfterPizzaImageClickPopupComponent } from "./components/after-pizza-image-click-popup/after-pizza-image-click-popup.component";

@NgModule({
  declarations: [AfterOrderSentPopupComponent, AfterPizzaImageClickPopupComponent],
  imports: [CommonModule],
  exports: [AfterOrderSentPopupComponent, AfterPizzaImageClickPopupComponent],
})
export class PopupModule {}
