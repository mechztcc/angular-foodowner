import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CardButtonsComponent } from './components/card-buttons/card-buttons.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardButtonsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
