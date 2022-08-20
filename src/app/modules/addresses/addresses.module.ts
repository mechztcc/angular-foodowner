import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './pages/addresses/addresses.component';


@NgModule({
  declarations: [
    AddressesComponent
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule
  ]
})
export class AddressesModule { }
