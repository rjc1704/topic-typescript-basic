import { BlogService } from "./BlogService";
import { isPublishedPost, printPostStatus } from "./postUtils";
import { User, Post } from "./types";

const sampleUser: User = {
  id: 1,
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
};

const updatedSamplePosts: Post[] = [
  {
    id: 101,
    title: "새로운 기능 아이디어 (초안)",
    content: "사용자 프로필 편집 기능 개선 방안...",
    authorId: sampleUser.id,
    tags: ["feature", "draft", "ui"],
    status: "draft",
  },
  {
    id: 102,
    title: "타입스크립트 유틸리티 타입 활용법",
    content: "Pick, Omit, Partial 등 유용한 유틸리티 타입을 알아봅시다!",
    authorId: sampleUser.id,
    tags: ["typescript", "utility-types", "guide"],
    status: "published",
    publishedDate: new Date(),
  },
  {
    id: 103,
    title: "주간 회의 미팅 요약",
    content: "이번 주 회의에서 다룬 주요 안건 및 결정 사항입니다.",
    authorId: sampleUser.id,
    tags: ["meeting", "summary"],
    status: "published",
    publishedDate: new Date(),
  },
  {
    id: 104,
    title: "지난 분기 업데이트 요약 (보관용)",
    content: "지난 분기의 주요 업데이트를 정리했습니다.",
    authorId: sampleUser.id,
    tags: ["update", "archive"],
    status: "archived",
    archivedDate: new Date(),
  },
];

// updatedSamplePosts.forEach(printPostStatus);

updatedSamplePosts.forEach((post) => {
  if (isPublishedPost(post)) {
    console.log(`Title: ${post.title}`);
  }
});

const blogService = new BlogService();
async function testBlogService() {
  try {
    // 모든 포스트 가져와서 콘솔로그 찍으세요. 로그 예시: "모든 포스트 조회 결과: {success: true, data: [...]}"
    let allPostsResponse = await blogService.getAllPosts();
    console.log("모든 포스트 조회 결과:", allPostsResponse);

    // 새 포스트 추가히고 콘솔로그 찍으세요. 로그 예시: "새 포스트 추가 결과: {success: true, data: {...}}"
    const newPost = {
      title: "새로운 블로그 포스트",
      content: "이것은 테스트 포스트입니다.",
      authorId: 1,
      tags: ["test", "blog"],
    };
    const addPostResponse = await blogService.addPost(newPost);
    console.log("새 포스트 추가 결과:", addPostResponse);

    allPostsResponse = await blogService.getAllPosts();
    console.log("모든 포스트 재조회 결과:", allPostsResponse);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

// testBlogService();

// TODO-3: getProperty 함수를 import 하여 Post 객체와 속성 이름('title', 'status', 등)을 인자로 넘겨 함수가 잘 동작하는지 콘솔로그를 찍어 테스트하세요
// 테스트
const post = { id: 1, title: "Test Post", authorId: 101, status: "draft" };
console.log(); // "Test Post"
console.log(); // "draft"

// TODO-5: src/types.ts에 정의한 Optional<T> 타입을 import 하여 옵셔널이 동작하는 지 속성을 빼보면서 확인해 보세요
// const optionalPost: Optional<Post> = { id: 1, title: "Test Post", authorId: 101, status: "draft" };
