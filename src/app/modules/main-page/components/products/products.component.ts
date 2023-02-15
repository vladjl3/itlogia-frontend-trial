import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
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
}
