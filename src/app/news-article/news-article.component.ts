import { Component } from '@angular/core';
import { NewsService } from '../services/news-service.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent {
  newsData: any[] = [];
  page = 1;
  pageSize = 4;
  contectLength: number = 0;
  constructor(private service: NewsService) {

  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.service.getArticle().subscribe((res: any) => {
      console.log("res", res);
      this.newsData = res?.['news'];
      this.contectLength = this.newsData?.length;
    })
  }
}
