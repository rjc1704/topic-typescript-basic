"use strict";
{
    const UserA = {
        name: "User A",
        userKey: "123",
    };
    const UserB = {
        name: "User A",
        userKey: 123,
    };
    const UserC = {
        name: "User A",
        userKey: true,
    };
    const UserD = {
        name: "User A",
        userKey: ["123", 123],
    };
    // length 속성을 갖는 객체만 매개변수로 받는 함수 정의
    function logLength(item) {
        console.log(item.length);
    }
    logLength("Hello, world!"); // 문자열은 length 속성을 가짐
    logLength([1, 2, 3, 4, 5]); // 배열은 length 속성을 가짐
    logLength({ length: 10, name: "Alice" }); // 객체는 length 속성을 가짐
    // logLength(123); // 오류: number 타입은 length 속성을 가지지 않음
}
