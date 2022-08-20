import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { CardCreateAddressComponent } from './components/card-create-address/card-create-address.component';

@NgModule({
  declarations: [AddressesComponent, CardCreateAddressComponent],
  imports: [
    CommonModule,
    AddressesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AddressesModule {}
