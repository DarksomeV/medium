import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IComment } from '../../types/comment.interface';

@Component({
  selector: 'mc-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() public comment: IComment;

  @Output() public deleteComment: EventEmitter<number> = new EventEmitter<number>();

  deleteClicked() {
    this.deleteComment.emit(this.comment.id);
  }
}
