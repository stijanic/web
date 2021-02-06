import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.sass']
})
export class AddressCardComponent implements OnInit {
  @Input("user") user!: User;
  isCollapsed: boolean = true;
  buttonText: string = "Expand";

  constructor() {
  }

  toggle() {
    this.isCollapsed = ! this.isCollapsed;
    if (this.isCollapsed)
      this.buttonText = "Expand";
    else
      this.buttonText = "Collapse";
  }

  ngOnInit(): void {
  }

}
