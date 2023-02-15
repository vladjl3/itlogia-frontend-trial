import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Pizza } from "../types/pizza.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private PRODUCTS_URL = "api/products";

  public getProducts(): Observable<Pizza[]> {
    let url = this.PRODUCTS_URL;
    return this.http
      .get<Pizza[]>(url)
      .pipe(catchError(this.handleError<Pizza[]>("getProducts", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
