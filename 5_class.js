"use strict";
{
    class Employee {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    const aEmployee = new Employee("james");
    aEmployee.greet();
}
