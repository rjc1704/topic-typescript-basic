"use strict";
{
    function makeSound(animal) {
        if ("bark" in animal) {
            animal.bark();
        }
        else {
            animal.meow();
        }
    }
    const dog = { bark: () => console.log("Woof!") };
    const cat = { meow: () => console.log("Meow!") };
    makeSound(dog); // Woof!
    makeSound(cat); // Meow!
}
