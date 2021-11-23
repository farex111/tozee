import { Component, OnInit } from '@angular/core';
import { NewsapiserviceComponent } from '../service/newsapiservice/newsapiservice.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private services: NewsapiserviceComponent) {}
  blogposts: any = [];

  ngOnInit(): void {
    this.services.blogPosts().subscribe((result) => {
      this.blogposts = result.articles.slice(0, 3);
    });
  }
}
