import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "../../shared/services/users.service";
import { User } from "../../shared/types/user.interface";

@Component({
  selector: "card-create-account",
  templateUrl: "./card-create-account.component.html",
  styleUrls: ["./card-create-account.component.css"],
})
export class CardCreateAccountComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;
  user: User;

  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [""],
      email: [""],
      password: [""],
      confirmPass: [""],
    });
  }

  validateForm() {
    if (this.form.invalid) {
    }

    this.user = {
      name: this.form.controls["name"].value,
      email: this.form.controls["email"].value,
      password: this.form.controls["password"].value,
    };
  }

  createAccount() {
    this.isLoading = true;
    this.usersService
      .createAccount(this.user)
      .subscribe((data: any) => {})
      .add(() => {
        this.isLoading = false;
      });
  }
}
