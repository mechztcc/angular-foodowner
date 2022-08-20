import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
})
export class AddressesComponent implements OnInit {
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
