export interface User {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
}

export interface DraftPost {
  status: "draft";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
}
export interface PublishedPost {
  status: "published";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  publishedDate: Date;
}
export interface ArchivedPost {
  status: "archived";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  archivedDate: Date;
}
export type Post = { id: number } & (DraftPost | PublishedPost | ArchivedPost);

export type GetPostsFunc = (authorId?: number) => Post[];
export type GetPostByIdFunc = (id: number) => Post | undefined;
export type AddPostFunc = (postData: {
  title: string;
  content: string;
  authorId: number;
  tags: string[];
}) => Post;
export type UpdatePostFunc = (
  id: number,
  updateData: {
    title?: string;
    content?: string;
    authorId?: number;
    tags?: string[];
    publishedDate?: Date;
  },
) => Post | undefined;
export type DeletePostFunc = (id: number) => boolean;

export interface Author extends User {
  bio?: string;
  posts: Post[];
}

// TODO-5: IBlogService 인터페이스를 정의하세요.
export interface IBlogService {}
