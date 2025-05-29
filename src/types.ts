export type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
};

// TODO-1: status 속성을 판별자로 판별 유니온 타입을 사용해서 Post 타입을 구체화하세요
// type DraftPost = {};
// type PublishedPost = {};
// type ArchivedPost = {};
// export Post = {id: number} & (DraftPost | PublishedPost | ArchivedPost)

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  status: "draft" | "published" | "archived";
};
