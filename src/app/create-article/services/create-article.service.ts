import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticleInput } from '../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { IArticle } from '../../shared/types/article.interface';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { ISaveArticleResponse } from '../../shared/types/save-article-response.interface';

@Injectable()
export class CreateArticleService {
  constructor(
    private _http: HttpClient,
  ) {}

  public createArticle(articleInput: IArticleInput): Observable<IArticle> {
    const fullUrl: string = environment.apiUrl + '/articles';

    return this._http
      .post<ISaveArticleResponse>(fullUrl, articleInput)
      .pipe(
        map((response: ISaveArticleResponse) => response.article)
      )
  }

}
