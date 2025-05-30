export type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
};

type DraftPost = {
  status: "draft";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
};
type PublishedPost = {
  status: "published";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  publishedDate: Date;
};
type ArchivedPost = {
  status: "archived";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  archivedDate: Date;
};
export type Post = { id: number } & (DraftPost | PublishedPost | ArchivedPost);

// export type Post = {
//   id: number;
//   title: string;
//   content: string;
//   authorId: number;
//   tags: string[];
//   status: "draft" | "published" | "archived";
// };
