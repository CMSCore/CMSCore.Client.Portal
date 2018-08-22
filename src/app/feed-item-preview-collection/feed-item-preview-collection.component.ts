import {Component, Input, OnInit} from '@angular/core';
import {FeedItemPreviewViewModel} from '../shared/models';

@Component({
  selector: 'app-feed-item-preview-collection',
  templateUrl: './feed-item-preview-collection.component.html',
  styleUrls: ['./feed-item-preview-collection.component.scss']
})
export class FeedItemPreviewCollectionComponent implements OnInit {

  @Input('feedItems')
  public feedItems: FeedItemPreviewViewModel[];

  constructor() { }

  ngOnInit() {
  }

}
