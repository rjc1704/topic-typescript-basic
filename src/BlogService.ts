import { DraftPost, Post } from "./types";

export class BlogService {
  // TODO-1: posts 속성과 nextPostId 속성을 추가하세요.

  getAllPosts(): Post[] {
    // TODO-2: posts 속성을 반환하는 메서드를 작성하세요.
  }

  getPostById(id: number): Post | undefined {
    // TODO-3: id를 기반으로 포스트를 조회하는 메서드를 작성하세요.
  }

  addPost(postData: Omit<DraftPost, "status">): Post {
    // TODO-4: 새로운 포스트를 추가하는 메서드를 작성하세요. id 는 nextPostId 속성을 증가시키면서 할당하세요.
  }

  updatePost(
    id: number,
    updateData: Partial<Omit<Post, "id" | "status">>,
  ): Post | undefined {
    const post = this.getPostById(id);
    if (!post) return undefined;
    const updatedPost = { ...post, ...updateData };
    this.posts = this.posts.map((p) => (p.id === id ? updatedPost : p));
    return updatedPost;
  }

  deletePost(id: number): boolean {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) return false;
    this.posts.splice(index, 1);
    return true;
  }
}
