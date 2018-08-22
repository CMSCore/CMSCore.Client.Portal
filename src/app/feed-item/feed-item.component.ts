import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContentService} from '../shared/content.service';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {FeedItemViewModel, PageViewModel} from '../shared/models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit, OnDestroy {

  public feedItem: FeedItemViewModel;
  private subscription: Subscription;

  constructor(private contentService: ContentService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeToRouteChanged();
  }

  subscribeToRouteChanged() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      let id = params['feedItemId'];
      if (id) {
        this.getPage(id);
      }
    });
  }

  getPage(id: string) {
    this.contentService.feedItem(id).pipe(take(1))
      .subscribe((feedItem) => {
        this.feedItem = feedItem;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
