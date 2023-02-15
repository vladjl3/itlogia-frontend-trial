import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class OrderInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === "POST" && request.url === "/orders") {
      return of(
        new HttpResponse({
          status: 201,
          body: { message: "Заказ успешно создан" },
        }),
      );
    }
    return next.handle(request);
  }
}
