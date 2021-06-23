import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment }  from "@env/environment";
import { IGetTagsResponse } from "../types/get-tags-response.interface";

@Injectable()
export class TagsService {
  constructor(
    private _http: HttpClient,
  ) {}

  getPopularTags(): Observable<IGetTagsResponse> {
    const url: string = environment.apiUrl + '/tags';

    return this._http.get<IGetTagsResponse>(url);
  }
}
