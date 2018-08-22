import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {PageTreeViewModel} from '../../shared/models';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {

  @Output('routeChanging')
  public routeChanging: EventEmitter<void> = new EventEmitter<void>();

  @Input('displayList')
  displayList: boolean;

  @Input('navItems')
  navItems: PageTreeViewModel[];

  constructor() {
  }

  ngOnInit() {
  }

  onRouteChanging() {
    this.routeChanging.emit();
  }
}
