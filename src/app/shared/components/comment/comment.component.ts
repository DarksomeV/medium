import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../types/comment.interface';

@Component({
  selector: 'mc-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
