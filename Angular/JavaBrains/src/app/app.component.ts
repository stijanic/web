import { Component } from '@angular/core';
import { User } from './address-card/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Test';
  user: User;

  constructor() {
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.title = 'Software Developer';
    this.user.address = '1234 Main St, City, State, 100010';
    this.user.phone = [
      '123-123-1234',
      '456-456-4567',
      '789-789-8790'
    ]
  }

}
