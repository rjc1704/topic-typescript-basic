export interface User {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
}

interface PostBase {
  title: string;
  content: string;
  authorId: number;
  tags: string[];
}

export interface DraftPost extends PostBase {
  status: "draft";
}
export interface PublishedPost extends PostBase {
  status: "published";
  publishedDate: Date;
}
export interface ArchivedPost extends PostBase {
  status: "archived";
  archivedDate: Date;
}
export type Post = { id: number } & (DraftPost | PublishedPost | ArchivedPost);

export type GetPostsFunc = (authorId?: number) => Post[];
export type GetPostByIdFunc = (id: number) => Post | undefined;
export type AddPostFunc = (postData: PostBase) => Post;
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
  getAllPosts: () => Promise<ApiResponse<Post[]>>;
  getPostById: (id: number) => Promise<ApiResponse<Post | undefined>>;
  addPost: (postData: Omit<DraftPost, "status">) => Promise<ApiResponse<Post>>;
  updatePost: (
    id: number,
    updateData: Partial<Omit<Post, "id" | "status">>,
  ) => Promise<ApiResponse<Post | undefined>>;
  deletePost: (id: number) => Promise<ApiResponse<boolean>>;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// TODO-1: Post 인터페이스에서 일부 속성(id, title, authorId, status)만 추출하여 PostSummary 타입을 맵드 타입으로 정의하세요.

// TODO-4: 제네릭 맵드 타입 Optional<T> 정의하고 export 하세요
// { [P in keyof T]?: T[P] }
