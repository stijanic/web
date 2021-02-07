import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterContentInit {
  @ContentChild('appHeader') headerElement: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.headerElement);
  }
}
