import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FeedComponent} from './feed/feed.component';
import {FeedItemComponent} from './feed-item/feed-item.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PageComponent} from './page/page.component';
import {ContentComponent} from './content/content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MaterialModule} from './shared/material.module';
import {FlexLayoutModule, FlexModule, LayoutConfigOptions} from '@angular/flex-layout';
import {NavigationListComponent} from './navigation/navigation-list/navigation-list.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ContentService} from './shared/content.service';
import {NoSanitizePipe} from './shared/no-sanitize.pipe';
import { FeedItemPreviewCollectionComponent } from './feed-item-preview-collection/feed-item-preview-collection.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { CommentItemComponent } from './comment/comment-item/comment-item.component';

export const appRoutes: Routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: ':pageId', component: PageComponent},
      {path: ':pageId/:feedItemId', component: FeedItemComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    FeedItemComponent,
    NavigationComponent,
    PageComponent,
    ContentComponent,
    PageNotFoundComponent,
    NavigationListComponent,
    MainContainerComponent,
    NoSanitizePipe,
    FeedItemPreviewCollectionComponent,
    CommentComponent,
    CommentFormComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

