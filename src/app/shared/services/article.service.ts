import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "@env/environment";
import { IGetArticleResponse } from '../types/get-article-response.interface';
import { IArticle } from '../types/article.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleService {
  constructor(
    private _http: HttpClient,
  ) {}

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl: string = `${environment.apiUrl}/articles/${slug}`;

    return this._http.get<IGetArticleResponse>(fullUrl).pipe(
      map(({ article }: IGetArticleResponse) => article),
    );
  }
}
