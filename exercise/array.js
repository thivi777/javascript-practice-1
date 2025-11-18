// array methods related questions part 1
// question 1
let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);
 console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

// question2
let numberr = [10, 20, 30, 40, 50];
numbers.push(60);  // adds 60 at the end
console.log("Array after push:", numberr);

numbers.unshift(5);  // adds 5 at the start
console.log("Array after unshift:", numberr);

// question3
let numberss = [5, 10, 20, 30, 40, 50, 60];

numberss.shift(); 
numberss.pop();   

console.log(numberss); 

// question4
let numbersss = [5, 10, 20, 30, 40, 50, 60];

for (let i = 0; i < numbersss.length; i++) {
    console.log(numbersss[i]);
}

// question5
let numbers1 = [5, 10, 20, 30, 40, 50, 60];

numbers1.forEach(element => {
  console.log(element);
});

// question 6
let numbers2 = [5, 10, 20, 30, 40, 50, 60];

let max = Math.max(...numbers2);
let min = Math.min(...numbers2);

console.log("Maximum:", max);
console.log(" Minimum:", min);

// question7
let numbers3 = [10, 15, 20, 25, 35, 45, 55];

if (numbers3.includes(36)) {
    console.log("36 exists in the array");
} else {
    console.log("36 does not exist in the array");
}

// question8
let sum = 0;
let numbers4 = [10, 20, 30, 40, 50];
numbers4.forEach(num => sum += num);
console.log("Sum:", sum);

// question9
let numbers5 = [10, 5, 20, 15];  

numbers5.sort((a, b) => a - b);   
console.log(numbers5);          

// question10
let numbers6 = [10, 5, 20, 15];  
numbers6.sort((a, b) => a - b); 
numbers6.reverse() 
console.log(numbers6);     

// question11
let numbers7 = [2, 5, 8, 10, 3];

let filtered = numbers7.filter(num => num > 5);
console.log(filtered); 