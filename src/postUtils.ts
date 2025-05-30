import { Post } from "./types";

export function printPostStatus(post: Post) {
  console.log("Post ID:", post.id);
  console.log("Post Title:", post.title);

  switch (post.status) {
    case "draft":
      console.log("Status: Draft post");
      break;
    case "published":
      console.log("Status: Published post");
      break;
    case "archived":
      console.log("Status: Archived post");
      break;
    default:
      console.log("Status: Unknown post");
      break;
  }
}
