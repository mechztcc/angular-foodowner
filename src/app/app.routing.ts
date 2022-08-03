import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "users",
    loadChildren: () =>
      import("./modules/users/users.module").then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
