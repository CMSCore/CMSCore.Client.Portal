import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FeedItemModel} from '../shared/feed-item.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('feedItems')
   feedItemsObservable:  FeedItemModel[] ;

  constructor() {
  }

  ngOnInit() {
  }

}
