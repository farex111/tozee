import { Component, OnInit } from '@angular/core';
import { NewsapiserviceComponent } from '../service/newsapiservice/newsapiservice.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private services: NewsapiserviceComponent) {}

  blogposts: any = [];

  ngOnInit(): void {
    this.services.blogPosts().subscribe((result) => {
      console.log(result);
      this.blogposts = result.articles;
    });
  }
}
