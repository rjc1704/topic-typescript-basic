"use strict";
{
    function isDog(animal) {
        return "bark" in animal;
    }
    const makeSound = (animal) => {
        if (isDog(animal)) {
            animal.bark();
        }
        else {
            animal.meow();
        }
    };
    const dog = { bark: () => console.log("Woof!") };
    const cat = { meow: () => console.log("Meow!") };
    makeSound(dog); // Woof!
    makeSound(cat); // Meow!
}
