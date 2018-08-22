import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageViewModel} from '../shared/models';
import {ContentService} from '../shared/content.service';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  public page: PageViewModel;
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService) {
  }

  ngOnInit() {
    this.subscribeToRouteChanged();
  }

  subscribeToRouteChanged() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      let id = params['pageId'];
      if (id) {
        this.getPage(id);
      }
    });
  }

  getPage(id: string) {
    this.contentService.page(id).pipe(take(1))
      .subscribe((page) => {
        this.page = page;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
