import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from './store/actions/add-to-favorites.action';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') public isFavoritedProps: boolean;
  @Input() public articleSlug: string;
  @Input('favoritesCount') public favoritesCountProps: number;

  public favoritesCount: number;
  public isFavorited: boolean;

  constructor(
    private _store: Store,
  ) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  public handleLike(): void {
    this._store.dispatch(addToFavoritesAction({isFavorited: this.isFavorited, slug: this.articleSlug}))
    if (this.isFavorited) {
      this.favoritesCount -= 1;
    } else {
      this.favoritesCount += 1;
    }

    this.isFavorited = !this.isFavorited;
  }

}
