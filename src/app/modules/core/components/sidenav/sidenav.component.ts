import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  stateSideNav: string = 'visible'
  constructor() { }

  ngOnInit(): void {
  }

  toggleSide() {
    if(this.stateSideNav == 'collapse') {
      this.stateSideNav = 'visible'
    }

    if(this.stateSideNav == 'visible') {
      this.stateSideNav = 'collapse'
    }
  }
  
}
