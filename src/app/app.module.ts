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
 import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MaterialModule} from './shared/material.module';
import {FlexLayoutModule, FlexModule, LayoutConfigOptions} from '@angular/flex-layout';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':pageId', component: PageComponent},
  {path: ':pageId/:feedItemId', component: FeedItemComponent},
  {path: '**', component: PageNotFoundComponent}
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

