import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @ContentChild('appHeader') headerElement: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.headerElement);
  }
}
