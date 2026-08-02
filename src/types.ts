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
  meta: { publishedDate: Date };
}
export interface ArchivedPost extends PostBase {
  status: "archived";
  meta: { archivedDate: Date };
}
export type Post = { id: number } & (DraftPost | PublishedPost | ArchivedPost);

export type GetPostsFunc = (authorId?: number) => Post[];
export type GetPostByIdFunc = (id: number) => Post | undefined;

export type AddPostFunc = (postData: PostBase) => Post;

// TODO-1: 적절한 유틸리티타입을 사용해서 UpdatePostFunc의 updateData 타입을 수정해보세요
export type UpdatePostFunc = (
  id: number,
  updateData: {
    title?: string;
    content?: string;
    authorId?: number;
    tags?: string[];
    meta?: { publishedDate: Date };
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

export type PostSummary = {
  [K in "id" | "title" | "authorId" | "status"]: Post[K];
};

export type Optional<T> = {
  [K in keyof T]?: T[K];
};

export type StatusMeta<T, S extends Post["status"]> = T extends {
  status: S;
  meta: infer M;
}
  ? M
  : never;

export type PublishedMeta = StatusMeta<Post, "published">; // { publishedDate: Date }              ✅
export type ArchivedMeta = StatusMeta<Post, "archived">; // { archivedDate: Date; reason: string } ✅
export type DraftMeta = StatusMeta<Post, "draft">; // never
