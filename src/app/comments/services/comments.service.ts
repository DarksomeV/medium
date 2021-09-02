import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IComment } from '../../shared/types/comment.interface';
import { environment } from '@env/environment';
import { IGetMultipleCommentsResponse, IGetSingleCommentsResponse } from '../types/get-comments-response.interface';

@Injectable()
export class CommentsService {
  constructor(
    private _http: HttpClient
  ) {}

  public getComments(articleSlug: string): Observable<IComment[]> {
    const fullUrl: string = CommentsService.getCommentsUrl(articleSlug);

    return this._http.get<IGetMultipleCommentsResponse>(fullUrl).pipe(
      map(({ comments }: IGetMultipleCommentsResponse) => comments),
    );
  }

  public addComment(articleSlug: string, body: string): Observable<IComment> {
    const fullUrl: string = CommentsService.getCommentsUrl(articleSlug);

    return this._http
      .post<IGetSingleCommentsResponse>(fullUrl, { comment: { body } })
      .pipe(
        map(({ comment }: IGetSingleCommentsResponse) => comment)
      )
  }

  public deleteComment(articleSlug: string, id: number): Observable<void> {
    const fullUrl: string = `${CommentsService.getCommentsUrl(articleSlug)}/${id}`;

    return this._http
      .delete<void>(fullUrl)
  }

  private static getCommentsUrl(articleSlug: string): string {
    return `${environment.apiUrl}/articles/${articleSlug}/comments`;
  }
}
