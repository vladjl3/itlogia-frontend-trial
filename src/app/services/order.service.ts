import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateOrderResponse } from "@app/types/create-order-response.interface";
import { Order } from "@app/types/order.interface";
import { Pizza } from "@app/types/pizza.interface";
import { catchError, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private ORDERS_URL = "/orders";

  constructor(private http: HttpClient) {}

  public createOrder(data: Order): Observable<CreateOrderResponse> {
    let url = this.ORDERS_URL;
    return this.http.post<CreateOrderResponse>(url, data);
  }
}
