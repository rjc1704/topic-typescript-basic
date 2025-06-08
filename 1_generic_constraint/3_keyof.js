"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const person = {
    name: "John",
    age: 30,
    location: "New York",
};
const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");
// const personHeight = getProperty(person, "height");
