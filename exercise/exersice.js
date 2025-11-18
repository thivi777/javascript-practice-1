// numbersystem 
// quesrtion 1
let price = 45.687;
let roundedPrice = price.toFixed(2);
console.log(`The total price is RS${roundedPrice}`);

// question 2
let fullname = "thivya sathananthan";
console.log( fullname.toUpperCase());

// question 3
let item = "Keyboard";
let price1= 250.0;
console.log("Receipt:");
console.log("Item:".padEnd(5) +":"+ item, "price" .padEnd(10) +":"+ price1.toFixed(2));

// question 4
let value = "123abc";
let number = Number(value);

if (Number.isNaN(number)) {
  console.log("Invalid number input!");
} else {
  console.log("Converted Number:", number);
}

// question 5
let  prices = [500, 1234.56, 299.99]; // list of product prices

let total = prices.reduce((sum, price) => sum + price, 0); // add them all
let formattedTotal = total.toLocaleString("en-IN", { minimumFractionDigits: 2 }); // add commas + 2 decimals

console.log("Total Price: Rs", formattedTotal);


// question 6
let text = "hello@@world@@!";
let cleanedText = text.replace(/@@/g, " ");
console.log(cleanedText);




