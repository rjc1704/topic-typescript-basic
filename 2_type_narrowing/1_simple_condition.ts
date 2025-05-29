// 단순 조건문을 사용해서 런타임에서 타입 좁히기
{
  type User = {
    name: string;
    age?: number | null;
  };

  function printUserAge(user: User) {
    if (user.age) {
      // falsy 값들을 모두 체크
      console.log(`User's age is ${user.age}`);
    } else {
      console.log("User's age is not provided");
    }
  }

  // 테스트 케이스
  printUserAge({ name: "abc" }); // age undefined
  printUserAge({ name: "abc", age: null }); // age null
  printUserAge({ name: "abc", age: 30 }); // age 30
  printUserAge({ name: "abc", age: 0 }); // age 0 (주의: falsy값)
}
