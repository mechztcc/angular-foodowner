import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidenavComponent, AppBarComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, SidenavComponent],
})
export class CoreModule {}
