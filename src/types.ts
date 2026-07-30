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

// TODO-1: 조건부타입과 infer 를 사용해 StatusMeta 를 완성하세요

// export type StatusMeta<T, S extends Post["status"]> = // 여기에 작성

// type PublishedMeta = StatusMeta<Post, "published">; // { publishedDate: Date }              ✅
// type ArchivedMeta = StatusMeta<Post, "archived">; // { archivedDate: Date; reason: string } ✅
// type DraftMeta = StatusMeta<Post, "draft">; // never                                 ✅
