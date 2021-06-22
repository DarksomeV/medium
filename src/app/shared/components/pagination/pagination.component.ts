import { Component, Input, OnInit } from '@angular/core';

import { UtilsService } from "../../services/utils.service";

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public total: number;
  @Input() public limit: number;
  @Input() public url: string;
  @Input() public currentPage: number;

  public pagesCount: number;
  public pages: number[];

  constructor(
    private _utilsService: UtilsService
  ) {}

  public ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this._utilsService.range(1, this.pagesCount);
  }
}
