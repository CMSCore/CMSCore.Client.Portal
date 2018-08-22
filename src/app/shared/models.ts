export interface CommentViewModel {
  commentId: string;
  created: Date | string;
  fullName: string;
  text: string;
}

export interface ContentViewModel {
  contentId: string;
  versionId: string;
  versionNumber: number;
  value: string;
}

export interface FeedItemPreviewViewModel {
  id: string;
  title: string;
  normalizedTitle: string;
  description: string;
  created: Date | string;
  modified: Date | string;
  tags: TagViewModel[];
}

//
// export interface FeedItemViewModel {
//   id: string;
//   title: string;
//   normalizedTitle: string;
//   commentsEnabled: boolean;
//   description: string;
//   feedId: string;
//   created: Date | string;
//   modified: Date | string;
//   comments: CommentViewModel[];
//   content: ContentViewModel;
//   tags: TagViewModel[];
// }

export interface FeedItemViewModel {
  id: string;
  title: string;
  normalizedTitle: string;
  commentsEnabled: boolean;
  description: string;
  feedId: string;
  created: Date | string;
  modified: Date | string;
  comments: CommentViewModel[];
  content: ContentViewModel;
  tags: TagViewModel[];
}

export interface FeedViewModel {
  date: Date | string;
  feedItems: FeedItemPreviewViewModel[];
  id: string;
  modified: Date | string;
  name: string;
  normalizedName: string;
}

export interface PageTreeViewModel {
  date: Date | string;
  id: string;
  name: string;
  normalizedName: string;
}

export interface PageViewModel {
  id: string;
  name: string;
  normalizedName: string;
  created: Date | string;
  modified: Date | string;
  content: ContentViewModel;
  feed: FeedViewModel;
}

export interface TagViewModel {
  id: string;
  name: string;
  normalizedName: string;
}

export interface UserViewModel {
  created: Date | string;
  email: string;
  firstName: string;
  id: string;
  identityUserId: string;
  lastName: string;
  modified: Date | string;
}

export interface CreateCommentViewModel {
  feedItemId: string,
  fullName: string,
  text: string
}


