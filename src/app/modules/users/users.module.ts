import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CardCreateAccountComponent } from './components/card-create-account/card-create-account.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateAccountComponent,
    CardCreateAccountComponent,
    CardLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,

  ]
})
export class UsersModule { }
