// objects related questions part 1

// question1
// Create an empty object named person
let person1 = {};
console.log(person1);

// question 2
// Create object with properties and a method
let person9= {
  name: "John",
  age: 25,
  IntroduceYou: function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
};


// question 3
let person2= {
  name: "John",
  greetStudent: function(student) {
    console.log(`Hello ${student}, Welcome to the Coding School!`);
  }
};


// question 4
let person3 = { name: "John", age: 25 };

// Dot notation
console.log(person3.name);

// Bracket notation
console.log(person3["age"]);

// question 5
let person4 = { name: "John", age: 25 };

// Add new property
person4.email = "shan@gmail.com";

console.log(person4);

// question 6
let person5 = { name: "John", age: 25, email: "shan@example.com" };

// Remove property
delete person5.email;

console.log(person5);

// question 7
let person6 = { name: "John", age: 25 };

console.log("name" in person6);          // true
console.log(person6.hasOwnProperty("age")); // true

// question 8
let student1 = { name: "Alex", age: 20 };
let course1 = { subject: "JavaScript", duration: "3 months" };

// object.assign method
let studentCourse = Object.assign({}, student1, course1);

console.log(studentCourse);

// question 9


let person7= { name: "John", age: 25 };

if ("address" in person7) {
  console.log("Address is there");
} else {
  console.log("Address not found");
}

// question 10
let book = {
  title: "The power of subconscious mind",
  author: "joseph Murphy",
  year: 1925
};

// Convert object to JSON string
let  = JSON.stringify(book);
console.log(book);

// array part 2 questions

// question 1
const student = {
  name: "Thivya",
  age: 22,
  course: "web development",
};

// Destructuring
const { name, age,course } = student;

console.log(`Student Name: ${name}`)
console.log(`Age: ${age}`);

// question 2
function createUser(name, age) {
  return { name, age };
}

const user = createUser("Alex", 25);
console.log(user);


// question 3
const person = { name: "Thivi", age: 22 };
const updatedPerson = { ...person, age: 23, city: "Jaffna" };

console.log(updatedPerson);

// question 4
const car = { brand: "Tesla", model: "Model 3", year: 2025 };

const carArray = Object.entries(car); // Object → Array
console.log("As Array:", carArray);

const newCarObject = Object.fromEntries(carArray); // Array → Object
console.log("Back to Object:", newCarObject);

// question 5
const employee = {
  name: "ashwin",
  salary: 50000,
  calculateTax() {
    return this.salary * 0.1; // 10% tax
  }
};

console.log(`${employee.name}'s tax is Rs ${employee.calculateTax()}`);

// question 6
const userProfile = {
  name: "Thivi",
  contact: {
    email: "thivi@gmail.com"
    // phone not added here
  }
};

console.log(userProfile.contact?.phone); // undefined (no error!)

// question 7
const userInfo = { name: "Thivya", age: 22 };
const contactInfo = { email: "thivi@gmail.com", phone: "1234567890" };

const mergedUser = { ...userInfo, ...contactInfo };
console.log(mergedUser);