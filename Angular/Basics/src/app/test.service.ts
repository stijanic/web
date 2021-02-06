import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private gitUrl: string = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient) { }

  printToConsole(arg: string) {
    console.log(arg);
  }

  getResponse(userName: string): Observable<Response> {
    return this.httpClient.get<Response>(this.gitUrl + userName);
  }
}
