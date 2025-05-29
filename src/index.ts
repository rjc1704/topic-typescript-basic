// TODO: sampleUser, samplePosts 타입 명시적으로 정의하세요
// src/types.ts 파일에 타입 정의하고 import 해서 사용하세요

const sampleUser = {
  id: 1,
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
};

const samplePosts = [
  {
    id: 1,
    title: "Hello World",
    content: "This is a sample post",
    authorId: sampleUser.id,
    tags: ["typescript", "javascript"],
    status: "published",
  },
  {
    id: 2,
    title: "Hello World 2",
    content: "This is a sample post 2",
    authorId: sampleUser.id,
    tags: ["typescript", "javascript"],
    status: "published",
  },
];

console.log("sampleUser", sampleUser);
console.log("samplePosts", samplePosts);
