import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  isOpened: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }
}
