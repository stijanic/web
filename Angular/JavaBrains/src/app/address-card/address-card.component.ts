import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.sass']
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input("userName") userName!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone: [
        '123-123-1234',
        '456-456-4567',
        '789-789-8790'
      ]
    };
  }

}
