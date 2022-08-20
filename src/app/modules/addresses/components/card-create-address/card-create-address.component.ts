import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-create-address',
  templateUrl: './card-create-address.component.html',
  styleUrls: ['./card-create-address.component.css'],
})
export class CardCreateAddressComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

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
    console.log(this.form);
  }
}
