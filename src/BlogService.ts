import { DraftPost, IBlogService, Post } from "./types";

export class BlogService implements IBlogService {
  private posts: Post[] = [];
  private nextPostId: number = 1;

  // TODO-3: 아래 메서드들의 타입이 실제 API호출처럼 비동기적으로 동작한다고 가정합니다.
  // 각 메서드들의 리턴타입을 Promise<ApiResponse<T>> 형태로 수정하세요
  // 메서드들을 async 함수로 수정하세요.

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  addPost(postData: Omit<DraftPost, "status">): Post {
    const post: Post = {
      ...postData,
      status: "draft",
      id: this.nextPostId++,
    };
    this.posts.push(post);
    return post;
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
