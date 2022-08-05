import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-buttons',
  templateUrl: './card-buttons.component.html',
  styleUrls: ['./card-buttons.component.css']
})
export class CardButtonsComponent implements OnInit {

  @Input()
  label: string = ''

  @Input()
  icon: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
