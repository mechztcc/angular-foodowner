import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../shared/services/users.service";

@Component({
  selector: "card-create-account",
  templateUrl: "./card-create-account.component.html",
  styleUrls: ["./card-create-account.component.css"],
})
export class CardCreateAccountComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  createAccount() {
    // this.isLoading = true;
    // this.usersService
    //   .createAccount()
    //   .subscribe((data: any) => {})
    //   .add(() => {
    //     this.isLoading = false;
    //   });
  }
}
