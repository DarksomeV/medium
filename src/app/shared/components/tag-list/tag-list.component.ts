import { Component, Input } from '@angular/core';
import { TPopularTag } from "../../types/popular-tag.type";

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() public tags: TPopularTag[];
}
