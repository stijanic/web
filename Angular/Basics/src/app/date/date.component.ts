import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit {
  date: string = "";
  time: string = "";
  number: number = 5;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();

      this.date = currentDate.toDateString();
      this.time = currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

  pow(number: number) {
    return Math.pow(number, number);
  }
}
