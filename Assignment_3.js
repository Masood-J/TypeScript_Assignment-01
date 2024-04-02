"use strict";
//String Variable
let greeting = "Hello, World";
//Basic Math
let num1 = 5, num2 = 5;
let product = num1 * num2, addition = num1 + num2, division = num1 / num2, subtraction = num1 - num2;
let result = `Product is ${product}, Addition Is ${addition}, Division Is ${division}, Subtraction Is ${subtraction}`;
//Swap Variables
let a = 5;
let b = 8;
let c;
console.log(`Value Before Swap a=${a}, b=${b}`);
c = b;
b = a;
a = c;
console.log(`Value After Swap a=${a}, b=${b}`);
//Type Annotations
/*let name:string=15*/
console.log("Console Shows Error With Type Annotations");
//Modulus Operator
let num3 = 10, num4 = 2;
let mod_num = num3 % num4;
console.log(`Modulus Of Number 1 =${num3} By Number 2 =${num4} Is ${mod_num}`);
//Value Increment
let num5 = 5;
num5++;
num5 = num5 + 1;
console.log(num5);
//Gate Operators
let a1 = true, b2 = false, c3 = true;
const orgate = a1 || b2;
const andgate = a1 && b2;
const notgate = !c3;
console.log(`OR-Gate=${orgate} AND-Gate=${andgate} NotGAte=${notgate}`);
//Compound Operators
let num = 10;
console.log(`Product Operator num*=5 gives ${(num *= 5)} Addition Operator num+=5 gives ${(num *= 5)} Subraction Operator num-=5 gives ${(num -= 5)} Division Operator num/=5 gives ${(num /= 5)} `);
//Even Or Odd
let number = 10;
if (number % 2 == 0) {
    console.log("Give Number Is Even");
}
else {
    console.log("Written Number Is Odd");
}
//Age
let age = 19;
if (age > 18) {
    console.log("You Are Eligible For Voting");
}
else {
    console.log("You Are Not Eligible For Voting");
}
//Grades
let score = 80;
if (score >= 90) {
    console.log("You Got An A");
}
else if (score >= 80) {
    console.log("You Got An B");
}
else if (score >= 70) {
    console.log("You Got An C");
}
else if (score >= 60) {
    console.log("You Got An D");
}
else if (score >= 50) {
    console.log("You Failed");
}
//Maximum Number
let n1 = 6, n2 = 7, n3 = 9;
if (n1 > n2 && n1 > n3) {
    console.log(`${n1} Is The Greatest`);
}
else if (n2 > n1 && n2 > n3) {
    console.log(`${n2} Is The Greatest`);
}
else if (n3 > n1 && n3 > n2) {
    console.log(`${n3} Is The Greatest`);
}
//Leap Year Check
let year_days = 366;
if (year_days > 355) {
    console.log("Its A Leap Year");
}
else {
    console.log("Its Not An Leap Year");
}
//Farenheit To Celcius
let temp_f = 98;
let temp_cal = ((temp_f - 32) * 5) / 9;
console.log(`Temp Converted From ${temp_f}F* To ${temp_cal}C*`);
//Check number
let number3 = 3;
if (number3 > 0) {
    console.log("Number Is Positive");
}
else if (number3 == 0) {
    console.log("Number Is Zero");
}
else if (number3 < 0) {
    console.log("Number Is Negative");
}
//Multiplication Table
let number5 = 7;
let limit = 10;
let multiply_addon = 1;
while (limit > 0) {
    console.log(`7 * ${multiply_addon} = ${7 * multiply_addon}`);
    multiply_addon++;
    limit--;
}
