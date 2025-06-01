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

// TODO-1:조건부 타입을 사용하여 Post 타입에서 특정 상태(status)에 해당하는 추가 데이터 타입만 추출하는 제네릭 타입을 완성하세요
// 예: ExtractStatusData<Post, 'published'>는 { publishedDate: Date } 가 되어야 함
// (infer 사용해보세요)

// export type ExtractStatusData<T, Status extends Post["status"]> =

// export type PublishedPostData = ExtractStatusData<Post, "published">; // { publishedDate: Date }
// export type ArchivedPostData = ExtractStatusData<Post, "archived">; // { archivedDate: Date }
// export type DraftPostData = ExtractStatusData<Post, "draft">; // never
