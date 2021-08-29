import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  public handleLike(): void {
    if (this.isFavorited) {
      this.favoritesCount -= 1;
    } else {
      this.favoritesCount += 1;
    }

    this.isFavorited = !this.isFavorited;
  }

}
