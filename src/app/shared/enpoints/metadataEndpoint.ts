export class MetadataEndpoint {
  public links: string = '/api/v1/Metadata/links';
  public tags: string = '/api/v1/Metadata/tags';
}

export class PageEndpoint {
  public get(id: string) {
    return '/api/v1/Page/' + id;
  }
}

export class FeedItemEndpoint {
  public get(id: string) {
    return '/api/v1/FeedItem/' + id;
  }
}

export const Endpoints = {

  baseUrl: 'http://localhost:5001',
  metadata: new MetadataEndpoint(),
  page: new PageEndpoint(),
  feedItem: new FeedItemEndpoint()

};

