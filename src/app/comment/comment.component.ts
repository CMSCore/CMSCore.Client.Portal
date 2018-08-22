import {Component, Input, OnInit} from '@angular/core';
import {CommentViewModel} from '../shared/models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input('feedItemId')
  public feedItemId: string;

  @Input('comments')
  public comments: CommentViewModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
