console.log("Assignment - 1")
let fruits = [];
fruits.push("apple", "banana", "orange");
console.log("Added the fruit to the fruits Array:");
console.log(fruits);
console.log("Removing the first element from array");
let removedFirstFruit =  fruits.shift();
console.log(fruits);
console.log("Adding Grape to the end of the fruits array");
let addingGrape = fruits.push("grape");
console.log(fruits);
console.log("update the second fruit with pear");
fruits[1] = 'pear';
console.log(fruits);

// Assignment - 2
// Objects are variables too. But objects can contain many values.
console.log("Assignment - 2")
console.log("Creating an empty object called person")
const person = {};
console.log(person);
console.log("Adding properties name, age, city to the person object");
person["name"] = "John";
person["age"] = 30;
person["city"] = "New York";
console.log(person);
console.log("Remove age property from 'person' object")
delete person.age
console.log(person)
console.log("Adding new property called job");
person["job"] = "engineer";
console.log(person);
console.log("Update the city property to san francisco");
person["city"] = "san francisco";
console.log(person);

// Assignment 3: Array of Objects Operations
console.log("Create an empty array car");
let car = [];
console.log(car);
console.log("Add three car object make, model, year");
const toyota = {"make": "Toyota", "model": "Camry", "year": 2018};
car.push(toyota);
console.log(car);
console.log("Remove the first car object from the array");
car.shift();
console.log(car);
console.log("Add new car object make, model, year");
const honda = {"make": "Honda", "model": "Civic", "year": 2020};
car.push(toyota, honda);
console.log(car);
console.log("Update the model property of the second car object in the array to Accord");
car[1].model = "Accord";
console.log(car);





