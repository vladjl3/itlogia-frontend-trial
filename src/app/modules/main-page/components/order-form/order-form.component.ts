import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "@app/services/order.service";
import { CreateOrderResponse } from "@app/types/create-order-response.interface";
import { Order } from "@app/types/order.interface";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent {
  constructor(private formBuilder: FormBuilder, private orderService: OrderService) {
    this.createForm();
  }

  order!: Order;
  orderFormGroup!: FormGroup;

  @Output() createOrderResponse = new EventEmitter<CreateOrderResponse>();

  createForm(): void {
    this.orderFormGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      phone: ["", Validators.required],
    });
  }

  get name() {
    return this.orderFormGroup.get("name");
  }

  get address() {
    return this.orderFormGroup.get("address");
  }

  get phone() {
    return this.orderFormGroup.get("phone");
  }

  sendForm(): void {
    if (!this.orderFormGroup.valid) {
      this.orderFormGroup.markAllAsTouched();
      return;
    }
    this.order = this.orderFormGroup.value;
    this.orderService.createOrder(this.order).subscribe((res: CreateOrderResponse) => {
      console.log(res);
      this.createOrderResponse.emit(res);
    });
  }

  onInput(inputValue: string): void {
    let patchedValue = inputValue.replace(".", "");
    this.orderFormGroup.patchValue({ name: patchedValue });
  }
}
