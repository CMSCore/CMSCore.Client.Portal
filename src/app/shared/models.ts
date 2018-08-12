
export interface CommentViewModel {
  CommentId: string;
  Created: Date | string;
  FullName: string;
  Text: string;
}

export interface ContentViewModel {
  ContentId: string;
  VersionId: string;
  VersionNumber: number;
  Value: string;
}

export interface FeedItemPreviewViewModel {
  Id: string;
  Title: string;
  NormalizedTitle: string;
  Description: string;
  Created: Date | string;
  Modified: Date | string;
  Tags: TagViewModel[];
}

export interface FeedItemViewModel {
  Id: string;
  Title: string;
  NormalizedTitle: string;
  CommentsEnabled: boolean;
  Description: string;
  FeedId: string;
  Created: Date | string;
  Modified: Date | string;
  Comments: CommentViewModel[];
  Content: ContentViewModel;
  Tags: TagViewModel[];
}

export interface FeedItemViewModel {
  Id: string;
  Title: string;
  NormalizedTitle: string;
  CommentsEnabled: boolean;
  Description: string;
  FeedId: string;
  Created: Date | string;
  Modified: Date | string;
  Comments: CommentViewModel[];
  Content: ContentViewModel;
  Tags: TagViewModel[];
}

export interface FeedViewModel {
  Date: Date | string;
  FeedItems: FeedItemPreviewViewModel[];
  Id: string;
  Modified: Date | string;
  Name: string;
  NormalizedName: string;
}

export interface PageTreeViewModel {
  Date: Date | string;
  Id: string;
  Name: string;
  NormalizedName: string;
}

export interface PageViewModel {
  Id: string;
  Name: string;
  NormalizedName: string;
  Created: Date | string;
  Modified: Date | string;
  Content: ContentViewModel;
  Feed: FeedViewModel;
}

export interface TagViewModel {
  Id: string;
  Name: string;
  NormalizedName: string;
}

export interface UserViewModel {
  Created: Date | string;
  Email: string;
  FirstName: string;
  Id: string;
  IdentityUserId: string;
  LastName: string;
  Modified: Date | string;
}

