import { Component, OnInit } from '@angular/core';
import { AddressesService } from '../../shared/services/addresses.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
})
export class AddressesComponent implements OnInit {
  address: any = [];
  constructor(private addressesService: AddressesService) {}

  ngOnInit(): void {
    this.findAddresses();
  }

  findAddresses() {
    this.addressesService.findAddresByLoggedUser().subscribe((data: any) => {
      this.address = data;
    });
  }
}
