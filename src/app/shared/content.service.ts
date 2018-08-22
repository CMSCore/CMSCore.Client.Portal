import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Endpoints} from './enpoints/metadataEndpoint';
import {CreateCommentViewModel, FeedItemViewModel, PageTreeViewModel, PageViewModel} from './models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {
  }

  pageLinks(): Observable<PageTreeViewModel[]> {
     let url = Endpoints.baseUrl + Endpoints.metadata.links;
    // let url = "assets/pageTree.json";
    return this.http.get<PageTreeViewModel[]>(url);
  }

  page(id: string): Observable<PageViewModel> {
     let url = Endpoints.baseUrl + Endpoints.page.get(id);
    // let url = "assets/page1.json";
    return this.http.get<PageViewModel>(url);
  }

  feedItem(id: string): Observable<FeedItemViewModel> {
     let url = Endpoints.baseUrl + Endpoints.feedItem.get(id);
    // let url = "assets/feedItem.json";
    return this.http.get<FeedItemViewModel>(url);
  }

  createComment(comment: CreateCommentViewModel){
    let url = "http://localhost:5002/api/v1/comment";
    return this.http.post(url, comment);
  }

}
