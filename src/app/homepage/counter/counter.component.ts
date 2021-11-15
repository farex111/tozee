import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  yearscount: number = 0;
  yearscountstop: any = setInterval(() => {
    this.yearscount++;
    if (this.yearscount == 35) {
      clearInterval(this.yearscountstop);
    }
  }, 80);
  projectcounts: number = 0;
  projectscountstop: any = setInterval(() => {
    this.projectcounts++;
    if (this.projectcounts == 120) {
      clearInterval(this.projectscountstop);
    }
  }, 20);
  combuildingscount: number = 0;
  combuildingscountstop: any = setInterval(() => {
    this.combuildingscount++;
    if (this.combuildingscount == 350) {
      clearInterval(this.combuildingscountstop);
    }
  }, 10);
  resbuildingscount: number = 0;
  resbuildingscountstop: any = setInterval(() => {
    this.resbuildingscount++;
    if (this.resbuildingscount == 1300) {
      clearInterval(this.resbuildingscountstop);
    }
  }, 0);
  constructor() {}

  ngOnInit(): void {}
}
