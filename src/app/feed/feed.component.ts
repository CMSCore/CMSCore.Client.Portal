import {Component, Input, OnInit} from '@angular/core';
import {FeedItemPreviewViewModel, FeedViewModel} from '../shared/models';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('feedItems')
  feedItems: FeedViewModel;

  constructor() {
  }

  ngOnInit() {
  }

}
