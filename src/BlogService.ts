import { ApiResponse, DraftPost, IBlogService, Post } from "./types";

export class BlogService implements IBlogService {
  private posts: Post[] = [];
  private nextPostId: number = 1;

  async getAllPosts(): Promise<ApiResponse<Post[]>> {
    return {
      success: true,
      data: this.posts,
    };
  }

  async getPostById(id: number): Promise<ApiResponse<Post | undefined>> {
    return {
      success: true,
      data: this.posts.find((post) => post.id === id),
    };
  }

  // TODO-2: addPost, updatePost 메서드의 postData 에 적용되어 있는 유틸리티타입을 보고 스스로 납득되는 지 확인해봅시다
  // 별도의 추가 코딩은 없습니다. 눈으로만 보고 확인해 보세요
  async addPost(
    postData: Omit<DraftPost, "status">,
  ): Promise<ApiResponse<Post>> {
    const post: Post = {
      ...postData,
      status: "draft",
      id: this.nextPostId++,
    };
    this.posts.push(post);
    return {
      success: true,
      data: post,
    };
  }

  async updatePost(
    id: number,
    updateData: Partial<Omit<Post, "id" | "status">>,
  ): Promise<ApiResponse<Post | undefined>> {
    const post = await this.getPostById(id);
    if (!post.data)
      return {
        success: false,
        data: undefined,
        error: "Post not found",
      };
    const updatedPost = { ...post.data, ...updateData };
    this.posts = this.posts.map((p) => (p.id === id ? updatedPost : p));
    return {
      success: true,
      data: updatedPost,
    };
  }

  async deletePost(id: number): Promise<ApiResponse<boolean>> {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1)
      return {
        success: false,
        data: false,
        error: "Post not found",
      };
    this.posts.splice(index, 1);
    return { success: true, data: true };
  }
}
