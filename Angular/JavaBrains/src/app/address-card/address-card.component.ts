import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.sass']
})
export class AddressCardComponent implements OnInit {
  @Input("user") user!: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
