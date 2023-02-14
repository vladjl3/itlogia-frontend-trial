import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "itlogia-frontend-trial";
  isActive: boolean = false;

  onClick(): void {
    this.isActive = !this.isActive;
  }
}
