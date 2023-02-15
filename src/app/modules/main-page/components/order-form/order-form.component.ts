import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent {
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  orderFormGroup!: FormGroup;

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
      return;
    }
  }

  onInput(inputValue: string): void {
    let patchedValue = inputValue.replace(".", "");
    this.orderFormGroup.patchValue({ name: patchedValue });
  }
}
