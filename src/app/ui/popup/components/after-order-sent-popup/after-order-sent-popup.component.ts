import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output, Renderer2 } from "@angular/core";

@Component({
  selector: "app-after-order-sent-popup",
  templateUrl: "./after-order-sent-popup.component.html",
  styleUrls: ["./after-order-sent-popup.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfterOrderSentPopupComponent implements OnDestroy {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, "modal-open");
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, "modal-open");
  }
  @Input("popupMessage")
  popupMessageProps: string = "";

  @Input("popupVisibleProps")
  popupVisible: boolean = false;

  @Output()
  popupClosed = new EventEmitter<boolean>();

  onClose(): void {
    this.popupVisible = false;
    this.popupClosed.emit(this.popupVisible);
  }
}
