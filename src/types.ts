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

export interface IBlogService {
  getAllPosts: () => Post[];
  getPostById: (id: number) => Post | undefined;
  addPost: (postData: Omit<DraftPost, "status">) => Post;
  updatePost: (
    id: number,
    updateData: Partial<Omit<Post, "id" | "status">>,
  ) => Post | undefined;
  deletePost: (id: number) => boolean;
}

// TODO-1:src/types.ts에 제네릭 인터페이스 ApiResponse<T>
// 속성:
//   success:
//   boolean,
//   data: T,
//   error?: string
//   비동기 API 호출 결과를 객체형태의 표준 응답 형태로 사용하기 위해 정의

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
