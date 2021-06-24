import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { IGetFeedResponse } from "../types/get-feed-response.interface";
import { environment } from "@env/environment";

@Injectable()
export class FeedService {
  constructor(
    private _http: HttpClient,
  ) {}

  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl: string = environment.apiUrl + url;

    return this._http.get<IGetFeedResponse>(fullUrl);
  }
}
