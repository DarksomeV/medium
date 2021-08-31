import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

import { IArticle } from '../../../types/article.interface';
import { IGetArticleResponse } from '../../../types/get-article-response.interface';

@Injectable()
export class AddToFavoritesService {
  constructor(
    private _http: HttpClient,
  ) {}

  public addToFavorites(slug: string): Observable<IArticle> {
    const url: string = this.getUrl(slug);

    return this._http.post(url, {}).pipe(map(this.getArticle))
  }

  public removeFromFavorites(slug: string): Observable<IArticle> {
    const url: string = this.getUrl(slug);

    return this._http.delete(url, {}).pipe(map(this.getArticle))
  }

  private getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  private getArticle(response: IGetArticleResponse): IArticle {
    return response.article;
  }
}
