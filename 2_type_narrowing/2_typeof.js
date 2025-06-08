"use strict";
{
    function printValue(value) {
        if (typeof value === "string") {
            console.log(`String: ${value.toUpperCase()}`);
        }
        else {
            console.log(`Number: ${value.toFixed(2)}`);
        }
    }
    // 테스트 코드
    printValue("Hello"); // String: HELLO
    printValue(42); // Number: 42.00
    // printValue([1,2,3]]); // Type Error
}
