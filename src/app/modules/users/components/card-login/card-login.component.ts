import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "card-login",
  templateUrl: "./card-login.component.html",
  styleUrls: ["./card-login.component.css"],
})
export class CardLoginComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: [""],
      password: [""],
    });
  }
}
