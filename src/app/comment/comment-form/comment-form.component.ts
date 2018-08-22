import {Component, Input, OnInit} from '@angular/core';
import {CommentViewModel, CreateCommentViewModel} from '../../shared/models';
import {FormControl, Validators} from '@angular/forms';
import {ContentService} from '../../shared/content.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input('feedItemId')
  public feedItemId: string;

  public comment: CreateCommentViewModel = {feedItemId: this.feedItemId, fullName: '', text: ''};

  textFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(500)
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(100)
  ]);

  public commentMaxLength: number = 500;
  public commentMinLength: number = 3;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
  }

  submitComment() {
       this.comment.feedItemId = this.feedItemId;
     this.contentService.createComment(this.comment).pipe(take(1)).subscribe(x => console.log(x), error1 => console.log(error1));

  }
}
