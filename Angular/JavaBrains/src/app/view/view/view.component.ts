import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {

  constructor(private svc: TestService) {
    this.svc.printToConsole("Got the service in ViewComponent!");
  }

  ngOnInit(): void {
  }

}
