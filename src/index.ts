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
