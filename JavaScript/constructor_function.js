function Dog(name,breed,age,weight){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;

    // adding method to the object
    this.eat = function() {
        console.log("Chomp");
    };

    this.bark = function() {
        console.log("Woof!!");
    };
}

const dogMarley = new Dog("Marley","Pit",3,30);
dogMarley.eat()