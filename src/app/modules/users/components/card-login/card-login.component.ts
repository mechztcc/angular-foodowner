import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Login } from "../../shared/types/login.interface";
import { User } from "../../shared/types/user.interface";

@Component({
  selector: "card-login",
  templateUrl: "./card-login.component.html",
  styleUrls: ["./card-login.component.css"],
})
export class CardLoginComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;
  login: Login;

  errors: boolean[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  validateForm() {
    if (!this.form.invalid) {
      this.login = {
        email: this.form.controls["email"].value,
        password: this.form.controls["password"].value,
      };
      console.log(this.login);
    }
  }
}
