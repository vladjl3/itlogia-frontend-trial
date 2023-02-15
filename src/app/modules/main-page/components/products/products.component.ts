import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Pizza } from "@app/types/pizza.interface";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  @Input("products")
  productsProps: Pizza[] = [];

  @Output("pizzaImage")
  pizzaImageEmitter = new EventEmitter<string>();

  onImageClick(image_url: string): void {
    this.pizzaImageEmitter.emit(image_url);
  }
}
