import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-newsapiservice',
  templateUrl: './newsapiservice.component.html',
  styleUrls: ['./newsapiservice.component.scss'],
})
export class NewsapiserviceComponent implements OnInit {
  newsApi_URL =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=6688a3033db74f91baaf35d56b0114b9';

  constructor(private http: HttpClient) {}

  blogPosts(): Observable<any> {
    return this.http.get(this.newsApi_URL);
  }

  ngOnInit(): void {}
}
