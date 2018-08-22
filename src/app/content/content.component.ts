import {Component, Input, OnInit} from '@angular/core';
import {ContentViewModel} from '../shared/models';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input('content')
  public content: ContentViewModel;

  constructor() { }

  ngOnInit() {
  }

}
