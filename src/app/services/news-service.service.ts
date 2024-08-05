import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  _baseUrl: string = 'http://localhost:5122';
  constructor(private _http: HttpClient) {
    //this._baseUrl = baseUrl;
  }

  getArticle() {
    return this._http.get(this._baseUrl + '/api/news/articles');
  }
}
