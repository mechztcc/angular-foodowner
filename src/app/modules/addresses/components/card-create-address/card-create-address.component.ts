import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressesService } from '../../shared/services/addresses.service';
import { Address } from '../../shared/types/address.interface';

@Component({
  selector: 'app-card-create-address',
  templateUrl: './card-create-address.component.html',
  styleUrls: ['./card-create-address.component.css'],
})
export class CardCreateAddressComponent implements OnInit {
  form: FormGroup;
  address: any;
  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private addressesService: AddressesService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      zip: ['', Validators.required],
      city: ['', Validators.required],
      number: ['', Validators.required],
      state: ['', Validators.required],
      complement: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  validateForm() {
    if (this.form.invalid) {
      this.toastrService.error('Formulário incompleto', 'Error');
    } else {
      this.prepareToSubmit();
      this.submit();
    }
  }

  prepareToSubmit() {
    this.address = {
      zip: this.form.controls['zip'].value,
      city: this.form.controls['city'].value,
      number: this.form.controls['number'].value,
      state: this.form.controls['state'].value,
      complement: this.form.controls['complement'].value,
      street: this.form.controls['street'].value,
    };
  }

  submit() {
    this.addressesService
      .createAddress(this.address)
      .subscribe((data: Address) => {
        console.log(data);
        this.clearForm();
      });
  }

  clearForm() {
    this.form.reset();
  }
}
