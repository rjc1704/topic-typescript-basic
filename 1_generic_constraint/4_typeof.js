"use strict";
{
    const person = {
        name: "John",
        age: 30,
        email: "john@example.com",
    };
    // 제네릭 함수를 사용하여 객체의 특정 속성에 접근
    const getProperty = (obj, key) => {
        return obj[key];
    };
    // 함수 사용 예시
    const name = getProperty(person, "name"); // "John"
    const age = getProperty(person, "age"); // 30
    const email = getProperty(person, "email"); // "john@example.com"
    // const height = getProperty(person, "height"); // type error
}
