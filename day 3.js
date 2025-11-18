function Volume(radius, height) {
   return  Math.PI *(radius**2) *height ;

}

let calculated=Volume(3,5)
console.log(calculated)

const multiple= function(n){
    return n*n
}

console.log(multiple(5));

// arrow function (short form)
const square = (n) => n*n;
console.log(square(5)); 

// mutible function
function add(a, b) {
    return a + b;
}

function displaysum(){
    let result = add(3,7);
    console.log("sum is: "+ result);
}
displaysum()


// exercise question 
function addSalaries(salary1, salary2) {
    return salary1 + salary2;
}
function bonus(){
const totalCombinedSalary = addSalaries(50000, 75000);
let bonus=totalCombinedSalary*0.1
let totalwithbonus=bonus+totalCombinedSalary;
console.log("The total combined salary is: $" + totalCombinedSalary);
console.log(totalwithbonus);
}
bonus();

// arrow function

const addSalariess = (salary1, salary2) => salary1 + salary2;

const bonuss = () => {
  const totalCombinedSalary = addSalariess(50000, 75000);
  let bonus = totalCombinedSalary * 0.1;
  let totalwithbonus = bonus + totalCombinedSalary;
  console.log("The total combined salary is: $" + totalCombinedSalary);
  console.log(totalwithbonus);
}

bonuss();
