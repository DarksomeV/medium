import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticleInput } from '../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { IArticle } from '../../shared/types/article.interface';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { ISaveArticleResponse } from '../../shared/types/save-article-response.interface';

@Injectable()
export class EditArticleService {
  constructor(
    private _http: HttpClient,
  ) {}

  public updateArticle(
    slug: string,
    articleInput: IArticleInput,
  ): Observable<IArticle> {
    const fullUrl: string = `${environment.apiUrl}/articles/${slug}`;

    return this._http
      .put<ISaveArticleResponse>(fullUrl, articleInput)
      .pipe(
        map((response: ISaveArticleResponse) => response.article)
      )
  }

}
