import { Component, OnInit } from '@angular/core';

interface logos {
  img: string;
  title: string;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  logos: logos[] = [
    { img: '../../assets/img/logos/13.png', title: 'investment partners' },
    { img: '../../assets/img/logos/14.png', title: 'development partners' },
    { img: '../../assets/img/logos/15.png', title: 'construction partners' },
    { img: '../../assets/img/logos/2.png', title: ' construction partners' },
    { img: '../../assets/img/logos/4.png', title: 'investment partners' },
    { img: '../../assets/img/logos/3.png', title: 'development partners' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
