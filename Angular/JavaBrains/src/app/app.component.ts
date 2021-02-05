import { Component } from '@angular/core';
import { User } from './address-card/user';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Test';
  user: User;
  inputText: string = 'Initial value';
  userName!: string;
  response!: any;

  constructor(private svc: TestService, private http: HttpClient) { // dependency injection
    this.svc.printToConsole("Got the service in AppComponent!");

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

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log("Got the response from GIT! => ", response);
    });
  }
  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/stijanic');
    obs.subscribe((response) => console.log("Got the response from GIT! => ", response))
  }
}
