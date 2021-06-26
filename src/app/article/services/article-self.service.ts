import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class ArticleSelfService {
  constructor(
    private _http: HttpClient,
  ) {}

  public deleteArticle(slug: string): Observable<{}> {
    const url: string = `${environment.apiUrl}/articles/${slug}`;

    return this._http.delete<{}>(url);
  }
}
