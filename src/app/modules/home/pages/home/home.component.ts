import { Component, OnInit } from '@angular/core';
import { AddressesService } from 'src/app/modules/stores/shared/services/addresses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  address: any[] = [];
  constructor(private addressesService: AddressesService) {}

  ngOnInit(): void {
    this.findAddressByLoggedUser();
  }

  findAddressByLoggedUser() {
    this.addressesService.findByLoggedUser().subscribe((data: any) => {
      this.address = data;
      console.log(data);
    });
  }
}
