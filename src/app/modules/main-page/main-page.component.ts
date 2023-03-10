import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductsService } from "@app/services/products.service";
import { CreateOrderResponse } from "@app/types/create-order-response.interface";
import { Pizza } from "@app/types/pizza.interface";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "main-page.component.html",
  styleUrls: ["main-page.component.scss"],
})
export class MainPageComponent implements OnInit, OnDestroy {
  constructor(private productsService: ProductsService) {}

  pizzzaList: Pizza[] = [];
  pizzaSubscription: Subscription = new Subscription();

  popupAfterPizzaImageClick: boolean = false;
  popupAfterOrderSent: boolean = false;
  responseMessage: string = "";
  pizzaImage: string = "";

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.pizzaSubscription.unsubscribe();
  }

  private fetchProducts(): void {
    this.pizzaSubscription = this.productsService.getProducts().subscribe((products) => {
      this.pizzzaList = products;
    });
  }

  onOrderSent(event: CreateOrderResponse): void {
    this.responseMessage = event.message;
    this.popupAfterOrderSent = true;
  }

  onPizzaImageClick(event: string): void {
    this.popupAfterPizzaImageClick = true;
    this.pizzaImage = event;
  }

}
