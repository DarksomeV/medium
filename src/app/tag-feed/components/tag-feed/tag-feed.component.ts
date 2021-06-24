import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {
  public apiUrl: string;
  public tagName: string;

  constructor(
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.tagName = params['slug'];
        this.apiUrl = `/articles?tag=${this.tagName}`;
      })
  }
}
