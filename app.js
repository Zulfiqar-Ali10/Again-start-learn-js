
// var myName = "10";
// console.log(typeof +myName);
// console.log(typeof Number(myName));

// var myName = 5;
// console.log(typeof (myName + ""));
// console.log(typeof String(myName));

// var myName = "42.5"
// var myNumber = parseInt(myName);
// console.log(myNumber);

// var myName = "42.5"
// var myNumber = parseFloat(myName);
// console.log(myNumber);

// console.log(10 + "20");
// console.log(9 - "5");
// console.log("java" + "script");
// console.log("" + 0);
// console.log("vinod" - "thapa");
// console.log(true + true);
// console.log(true + false);
// console.log( false + true);
// console.log( false - true);
// console.log("" + "");


// var myNumber = 0.1 + 0.2;
// console.log(myNumber.toFixed(3));

// var myNumber = "hello" / 5;
// console.log(myNumber);

// console.log(10 <= 10);
// console.log(5 >= 10);


// var num1 = 1;
// var num2 = "1";
// if(num1 === num2){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }

// var x = 5;
// var y = 10;
// console.log(x>0 && y>0);

// var x = 5;
// var y = 10;
// console.log(x>10 || y>0);

// var isOpen = false;
// console.log(!isOpen);

// var age = 18;
// var driviglicene =  true;
// console.log(age >= 18 && driviglicene);

// var age = 15;
// var result = age >= 18? "true" : "false";
// console.log(result);

// var score = 58;
// var result = score >= 69? "pass" : "fail";
// console.log(result);

// var temperature = 22;
// if(temperature >= 30){
//     console.log("let go to beach");
// }else if(temperature >= 20 && temperature < 30){
//     console.log("watch the t.v");
// }else{
//     console.log("you are very small");
// }

// var userAge = 18;
// var isCitizen = false;
// var isRegistered = true;


// if(userAge >= 18){
//   if(isCitizen){
//     if(isRegistered){
//         console.log("You are eligible to vote");
//     }else{
//       console.log("You are not eligible due to registration status");
//     }
//   }else{
//     console.log("You are not eligible due to citizenship status");
//   }
// }else{
//     console.log("you are not eligible to vote");
// }


// var num = 3;
// if(num % 2  == 0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }

// var num = -1;

// if(num === 0){
//     console.log("number is zero");
// } else if(num > 0){
//     console.log("number is postive");
// } else {
//     console.log("number is negative");
// }

// var day = "sunday";
// switch (day) {
//     case "monday":
//         console.log("I am going to park");
//         break;
//     case "tuesday":
//         console.log("I am going to smit");
//         break;
//     case "friday":
//         console.log("I am going to praying namaz");
//         break;
//     case "sunday":
//         console.log("I am going to play cricket");
//         break;
//     default:
//         console.log("I watching t.v");
// }



// var areaofshape = "square";
// var a = 5;
// var b = 10;
// var result;
// switch (areaofshape) {
//     case "square":
//         result =  a * a;
//         console.log(result);
//         break;

//         case "Rectangle":
//             result =  a * b;
//             console.log(result);
//             break;

//             case "circle":
//                 var r = 2;
//                 result =  3.142 * (r*r);
//                 console.log(result);
//                 break;

//     default:
//         console.log("not match the shape");
//         break;
// }

//  while loop
// var num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// do while loop

// var num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num <= 10);

// for loop

// for(var num = 1; num <= 10; num++){
//     console.log(num);
// }

// var num = 1;
// while(num <= 10){
//     console.log("5*" + num + "=" + 5 * num);
//     num++;
// }

// var num = 1;
// do{
//     console.log("6*" + num + " = " + 6 * num);
//     num++;
// }while(num <= 10);


// let userInput;
// let postiveNumber;
// do{
//     userInput = prompt("enter your postive number");
//     postiveNumber = parseFloat(userInput);
// }while(isNaN(postiveNumber) || postiveNumber < 0)
//     console.log("you enteres a valid number:", postiveNumber);

// var num = 12;
// var isPrime = true;

// for(var i = 2; i < num; i++){
//     if(num % i === 0){
//         isPrime = false;
//         break;
//     }
// };

// if(isPrime){
//     console.log("Num is prime");
// }else{
//     console.log("Num is not prime");
// }

// for(num = 1; num <= 10; num++){
//     console.log("5 *" + num + " = " + 5 * num);
// }


// for(num = 1; num <= 10; num++){
//     console.log("11 *" + num + " = " + 11 * num);
// }

// var year = 2024;

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//    console.log(year,"Its a leap year");
// }else{
//     console.log(year, "Its not a leap year");
// }

// for(var i = 1; i <= 5; i++){
//     var pattern = "";
//     for(var j = 1; j <= i; j++){
//         pattern = pattern + "*";
//     }
//     console.log(pattern);
// }

// function sum(a,b){
//     return a + b;
// }
// console.log(sum(5,10));
// console.log(sum(5,20));

// function greet(name){
//     console.log("Hello " + name + " , Welcome to js course");
// }
// greet(prompt(""))


// function sum(a,b,c){
//     console.log(a+b+c);
// }
// console.log(sum(4,5,6));

// var result = function sum(a,b){ ////// it assign varible function call expression//anonymous function ko hum call nahi kar sakta kuka aus ko name nahi data isliye hum var ma function ko assign kar ta hai
//     console.log(a+b);
// }
// console.log(result(4,5));

////  return ka matlab//////
//////agar aap console karka a+b karvaya ga to vo aap ko pala bari ma to answer daga lakin agar jab aap dubara aus ko console karaga to o undefined daga isliye hum return keyword use karta hai taka jab hum function ma dubara jab kisi bi chis ka answer chahiya hoto hum aus asani sa har jaga use kar sak ta hai aur vo hama undefined nahi data 

// var result = function sum(a, b) {
//    return(a + b);
// }
// console.log(result(4, 5));
// console.log(result(4, 6));
// console.log(result(4, 7));



// function sum(a, b) { // ya 1 aur tarika hai function ko use karna ka
//     return(a + b);
//  }
//  var result = sum(4, 5);
//  console.log("the sum of to number is" + " " +result);


// (function (a,b){  // ya jo open tak ha aosa hi immediately function kata hai shur ma open tak lag ta ha aur end me//
// console.log(a+b);
// })(3,3);

//  var result = (function (a,b){  // with expression//
//     console.log(a+b);
//     return a+b
//     })(3,3);

//     console.log("the sum of two number is " + result);

//////     Es 2015 start 4 let and const arrow function templates strings default argurment.////

//  var myName = "ali"; // true
//  myName = "zulfiqar";
//  console.log(myName);


//  let myName = "ali"; // true
//  myName = "zulfiqar";
//  console.log(myName)


//  const myName = "ali"; // false
//  myName = "zulfiqar";
//  console.log(myName)

//// templates string //

// let firstName = "Zulfiqar";
// let lastName = "Ali";
// ///let fullName = firstName + lastName;  old verion
// let fullName = `${firstName} ${lastName}`;  // new verion
// console.log(fullName);

// let age = 40;    
// let message = `I am ${age} years old dear`  // ya tarika kalata hai interpolation string string ka andar back tig use karna
// console.log(message);


//     let muitlineString = `I am 18 years old
//   And I study class 11
//   And my name ali`
//     console.log(muitlineString);


// for(var num = 1; num<=10; num++){
// // console.log(`5 * ${num} = ${5*num}`);// new verion
// //console.log("5*" + num + "=" + 5*num);/// old verion
// }

// function sum(a,b=10){ // jo b ma 10 ha vo default ha agar koi a ki value data ha aur b ki nahi data ha to jo default ha vo value b ma ajaya gi samja dears
//     return a + b;
// }
// console.log(sum(5,30));


// const sum =  function(a,b){ // old verion
//     let result = `the sum of ${a} and ${b} is ${a+b} `;
//     console.log(result);
// }
// sum(5,10)


// const sum =  (a,b) => {  // new verion  arrow function
//    let result = `the sum of ${a} and ${b} is ${a+b} `;
//    console.log(result);
// }
// sum(5,10)


// const sum =  (a,b) => console.log(`the sum of ${a} and ${b} is ${a+b} `);
//  sum(5,20);// new verion  arrow function aur bi zada asan in one line

// const square = (a) => `The square of ${a} is ${a*a}`;  /// default parameter in arrow function
// console.log(square(5));

// const greet = () => console.log("the best course js"); // kali parameter ok dears
// greet();

// complete 5 Es 6 parts////


// function calculator(a, b, operator) {
//     switch (operator) {
//         case "+":
//             result = a + b;
//             return result;
//             break;

//         case "-":
//             result = a - b;
//             return result;
//             break;

//         case "*":
//             result = a * b;
//             return result;
//             break;

//         case "/":
//             if (b === 0) {
//                 return "o is not allowed"
//             } else {
//                 result = a / b;
//                 return result;
//                 break;
//             }

//         default:
//             return ("no operator");
//     }
// }
// console.log(calculator(10, 2, "*"));




// const calculator = (a, b, operator) =>{   /// change arrow function
//     switch (operator) {
//         case "+":
//             result = a + b;
//             return result;
//             break;

//         case "-":
//             result = a - b;
//             return result;
//             break;

//         case "*":
//             result = a * b;
//             return result;
//             break;

//         case "/":
//             if (b === 0) {
//                 return "o is not allowed"
//             } else {
//                 result = a / b;
//                 return result;
//                 break;
//             }

//         default:
//             return ("no operator");
//     }
// }
// console.log(calculator(10, 2, "-"));


// const isReverse = (str) =>{ // is simple method
//     for(let char = 1; char <= str.length; char++){
//         console.log(str[char]);
//     }
// }
// isReverse("Zulfiqar Ali")


// const isReverse = (str) =>{ // is reverse method
//     for(let char = str.length; char >= 0; char--){
//         console.log(str[char]);
//     }
// }
// isReverse("Zulfiqar Ali")


// const isReverse = (str) =>{ // is reverse method -1 karna sa vo undeined nahi aya ga aap auper check kar sakta hai 
//     for(let char = str.length -1; char >= 0; char--){
//         console.log(str[char]);
//     }
// }
// isReverse("Zulfiqar Ali")


// const isReverse = (str) =>{ 
//     let reverse = "" 
//     for(let char = str.length -1; char >= 0; char--){
//         reverse = reverse + (str[char]);
//     }
//     return reverse
// }
// console.log(isReverse("Zulfiqar Ali"));



// const ispalidrome = (str) =>{ 
//     let reverse = "" 
//     for(let char = str.length -1; char >= 0; char--){
//         reverse = reverse + (str[char]);
//     }
//     return str === reverse ? true : false;
// }
// console.log(ispalidrome("level"));



////////////////////// Array /////////////////////////////////////

// let arr = ["Ali", "Ahmed", "Asad", "akbar"];
// console.log(arr);


// let arr = ["Ali", "Ahmed", "Asad", "akbar"];
// console.log(arr[1]);


// let arr = ["Ali", "Ahmed", "Asad"];
// arr[3] = "akbar"
// console.log(arr);


//////////////for of loop array//////////////////

// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];
// for(let item of arr){
//    console.log(item);
// }


/// for in loop///////////////////
// let arr = ["Ali", "Ahmed", "Asad"];
// for(item = 0; item < arr.length; item++){
//     console.log(arr[item]);
// }


// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];
// for(let item in arr){
//    console.log(item);
// }


//////// for each loop ////////////
 
// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];

// arr.forEach((currElem, index, arr) => {
//   console.log(`${currElem} ${index}`);
// });


////////// map //////////////

// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];

// arr.map((currElem, index, arr) => {
//   console.log(`${currElem} ${index}`);
// });


/// defrence between foreach and map method; forreach ma return nahi hota aur map method ma return hoti ha value see examples.


// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];

// const myMaparr = arr.map((currElem, index, arr) => {
//   return (`${currElem} ${index}`);
// });
// console.log(myMaparr);


// const myForEachArr = arr.forEach((currElem, index, arr) => {
//       return (`${currElem} ${index}`);
//     });
//     console.log(myForEachArr);


// const number = ["1","2","3","4","5"];

// number.forEach((currElem) =>{
//     console.log(currElem*2);
// })

// const doubleNum = number.map((currElem) =>{
//     return(currElem*2);
// });
// console.log(doubleNum);



// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];// push
// arr.push("Muhammad");
// console.log(arr);


// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain", "Muhammad"]; // pop
// arr.pop();
// console.log(arr);



// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain"];// unshift
// arr.unshift("Zulfiqar");
// console.log(arr);


// let arr = ["zulfiqar", "Ali", "Ahmed", "Asad", "akbar", "hussain"];// shift
// arr.shift();
// console.log(arr);


// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain", "Muhammad"];// splice method
// console.log(arr);
// arr.splice(1,2,"Zulfiqar bhai")
// console.log(arr);



// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain", "Muhammad"];// splice method
// console.log(arr);
// arr.splice(arr.length, 0,"Zulfiqar bhai")
// console.log(arr);



// let arr = ["Ali", "Ahmed", "Asad", "akbar", "hussain", "Muhammad"];// index of
// console.log(arr.indexOf("akbar"));


// let arr = ["Salman", "Ali", "Ahmed", "Asad", "akbar", "ALi", "hussain", "Muhammad"];// index of
// console.log(arr.lastIndexOf("Ali"));


// let arr = [1,2,3,4,5,6,7,2,8,9];// lastindex of picha sa check karta ha ka agar to number diyo ho aur aap jaha sa aus ko bola ga vo viha sa check karaga aur index aus ka bata daga jo asal index hoga
// console.log(arr.lastIndexOf(2,6));


// includes Method

// let arr = ["Salman", "Ali", "Ahmed", "Asad", "akbar","hussain", "Muhammad"];
// console.log(arr.includes("saria")); // includes method aap ka true ya false data hai.


// let months = ["mango", "orange", "grapes"];

// const upDateFruits = months.indexOf("orange")
// months.splice(1,0,"banana")
// console.log(months);



// let months = ["December", "june", "july"];

// const indextoDelete = months.indexOf("june")
// months.splice(indextoDelete, 1)
// console.log(months);

// Filter Method//// 

// const numbers = [1,2,3,4,5,4,6,8,7,8,9]; // Find method
// const result =  numbers.find((currElement) => {
//   return currElement > 5;
// })
// console.log(result);



// const numbers = [1,2,3,4,5,4,6,8,7,8,9];  /// findindex

// const result1 = numbers.map((currElement)=> currElement * 5);
// const result =  result1.findIndex((currElement) => {
//   return currElement > 20;
// })
// console.log(result);


// const numbers = [1,2,3,4,5,4,6,8,7,8,9]; // filter method
// const result =  numbers.filter((currElement) => {
//   return currElement > 5;
// });
// console.log(result);

// let value = 5;
// const numbers = [1,2,3,4,5,6,7,5,8];

// let addCardto = numbers.filter((currElem) => {
//     return currElem !== value;
// });
// console.log(addCardto);

// const products = [
//     {name: "Laptop", price: 1200},
//     {name: "Phone", price: 800},
//     {name: "Mobile", price: 400},
//     {name: "Tapled", price: 300},
// ];
// const productsFilter = products.filter((currElem) =>{
//     return currElem.price <= 500;
// })
// console.log(productsFilter);


/// javascript methods (push) (pop) (shift) (unshift)  (map) (filter) (includes) (splice)
//  (find) (findindex) (Set) (sort) (touppercase) (tolowercase) (reduce)

// const numbers = [1,2,3,4,5,6,5,7]; // Set method
// console.log(new Set(numbers));
// console.log([...new Set(numbers)]);  // agar array chahiya ho ta vasa hi likna


// const fruits = ["A","C","B","D","B"]; // sort method
// fruits.sort();
// console.log(fruits);

// const numbers = [1,2,4,3,6,7,4,8,9];
// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1
// });
// console.log(numbers);


// const numbers = [1,2,4,3,6,7,4,8,9];
// numbers.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1
// });
// console.log(numbers);


// const numbers = [1,2,3,4,5]; // multip by number in array
// let result = numbers.map((currElem)=> currElem * currElem);
// console.log(result);


// const numbers = ["apples","banana","orange"]; touppercase
//  const result = numbers.map((currElem)=>{
//     return currElem.toUpperCase()
//  });
//  console.log(result);


// const numbers = ["Apples","Banana","Orange"]; 
//  const result = numbers.map((currElem)=>{
//     return currElem.toLowerCase()
//  });
//  console.log(result);


// const numbers = [1,2,3,4,5];  // if stament use

// const result = numbers.map((curElem)=>{
//     if(curElem % 2 === 0){
//         return curElem * curElem;
//     };
// }).filter((curElem) => curElem !== undefined);
// console.log(result);

// const numbers = [1,2,3,4,5];  // use ternari operator
// const evenSquare = numbers.map((currElem)=>(currElem % 2 === 0 ? currElem * currElem : undefined))
// .filter((currElem)=> currElem !== undefined);
// console.log(evenSquare);


// const productsPrice = [100,200,300,400,500];
// const totalPrice = productsPrice.reduce((accum, currElem) => {
//     return accum + currElem;
// }, 0);
// console.log(totalPrice);


// /.////////////////////////////////////string///////////////

// const str = "Hello world";
// console.log(str.length);


// const str = "my name is 'Ali' \n \"Hello world\" ";// \aur n laga na sa next line ma baki text chala jata hai
// console.log(str);

// let text = "Zulfiqar Ali";

// let strArr = Array.from(text);
// console.log(strArr);
// let strMap = strArr.map((currElem, index)=> `${currElem} - ${index}`);
// console.log(strMap);

// let text = "hello java is the best java";
// let text1 = text.indexOf("java");
// let text2 = text.lastIndexOf("java");
// let text3 = text.lastIndexOf("java", 20);
// console.log(text1);
// console.log(text2);
// console.log(text3);


// let text = "hello java is the best java";
// let textSearch = text.search(/jAva/i); // search method i is not see case J big or j small samja
// console.log(textSearch);


/// javascript methods (push) (pop) (shift) (unshift)  (map) (filter) (includes) (splice)
//  (find) (findindex) (Set) (sort) (touppercase) (tolowercase) (reduce) (search) (match)
// (matchAll) (substring) (startwith) (slice) (charcodeAt)(charAt) (AT) (trim) (split)

// let text = "hello java is the best java"; Match method
// // let result = text.match(/java/);
// let result = text.match(/java/g);
// // let result = text.match("java");
// console.log(result);



// let text = "hello java is the best java"; matchAll methid
// let result = text.matchAll("java");
// console.log(...result);



// let text = "hello java is the best java"; // startwith method
// let result = text.startsWith("hello");
// console.log(result);


// let text = "hello java is the best java"; // endwith method
// let result = text.endsWith("java");
// console.log(result);

// let text = "hello java is the best java"; // slice method
// let result = text.slice(6,14);
// console.log(result);


// let text = "hello java is the best java"; // substring method
// let result = text.substring(6,14); ///same work but jab aap koi - value daga to slice sahi chala ga aur substring nahi chala ga.
// console.log(result);


// let text = "hello java is the best java"; // replace method
// // // let result = text.replace("h","");
// // let result = text.replace("java","vinod");
// let result = text.replaceAll("java","vinod");
// console.log(result);


// let text = "hello java is the best java"; // charAt method
// let result = text.charAt(6);
// let result = text.charAt(-4); ////-value give you empty ""
// console.log(result);


// let text = "hello java is the best java"; // charcodeAt  method
// let result = text.charCodeAt(10); // give you char code samja
// console.log(result);


// let text = "hello java is the best java"; // AT  method
// let result = text.at(-6); // charat aur at method dono ka kam sam ha lakin charat negative value nahi data at method data hai samja
// console.log(result);

// let userinput = parseInt(prompt("enter amout"));
// let balance = 10000
// if(isNaN(userinput) || userinput < 500){
//     console.log("please enter amout = 500 or greater");
// }else if(userinput > balance){
//     console.log("you have enter amount more then balance");
// }else if(userinput % 500 !== 0){
//     console.log("please enter amount multiple of 500");
// }else{
//     console.log("transaction success amout = " , (userinput) , "balance = " , (balance - userinput) );
// }

// const myNames =  ["Ali", "Akbar", "Ahmed", "Hussain"]; // reverse method
// console.log(myNames.reverse());


// let  myNames = "             ALi how are you       "; // trim method
// let myTrim = myNames.trim();
// console.log(myTrim);


/// javascript methods (push) (pop) (shift) (unshift)  (map) (filter) (includes) (splice)
//  (find) (findindex) (Set) (sort) (touppercase) (tolowercase) (reduce) (search) (match)
// (matchAll) (substring) (startwith) (slice) (charcodeAt)(charAt) (AT) (trim) (split)
// (pow)


// let  myNames ="apple,banana,orange"; // split method change into array
// let mysplit = myNames.split(",");
// console.log(mysplit);



// let  myNames ="apple,banana,orange"; // reverse method change into reverse
// let mysplit = myNames.split(",").reverse();
// console.log(mysplit);


// let  myNames ="apple,banana,orange"; // join method change array into string
// let mysplit = myNames.split(",").reverse().join();
// console.log(mysplit);

// console.log("a".charCodeAt(0)); // this method create a to z ok
// console.log("z".charCodeAt(0));

// for(let char = 97; char <= 122; char++){
// console.log(String.fromCharCode(char));
// }

// const checkAeiou = (str)=>{ // check aeiou
//     const vowel = "aeiou";
//     for(let char of vowel){
//         if(!str.includes(char)){
//             return false;
//         }
//     }
//     return true
// };

// console.log(checkAeiou("my name u is vinod thapa"));



// const checkVowels = (str)=>{ // check aeiou and count
//     const vowel = "aeiou";
//     let count = 0;
//     for(let char of vowel){
//         if(str.includes(char)){
//           count++;
//         }
//     }
//     return count;
// };

// console.log(checkVowels("my name u is vinod thapa"));


// const checkVowels = (str)=>{ // check aeiou and count
//     const vowel = "aeiou";
//     let count = 0;
//     for(let char of str){
//         if(vowel.includes(char)){
//           count++;
//         }
//     }
//     return count;
// };

// console.log(checkVowels("my name u is vinod thapa"));

// const pangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");

//     const value = inputArr.filter((currElem)=>
//         currElem.charCodeAt() >= "a".charCodeAt() && currElem.charCodeAt() <= "z".charCodeAt()
//     );
//     console.log(value);
//     console.log([... new Set(value)].length);
// };

// console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));   


/// math method ///

// const piValue = Math.PI; get pi valur 3.14
// console.log(piValue); 

// console.log(Math.abs(5));// abs ya check karta ha ka aap ki value kitni dur ha jasa postive doga to vo postive vala number hi daga lakin agar aap negative value doga to vo bata daga
// console.log(Math.abs(-3));// abs ya check karta ha ka aap ki value kitni dur ha jasa postive doga to vo postive vala number hi daga lakin agar aap negative value doga to vo bata daga

// console.log(Math.round(3.4));  // round method
// console.log(Math.round(3.7));  // round method


// console.log(Math.ceil(3.4));  // ceil method 3.4 ho ya 3.7 1 number baradag
// console.log(Math.ceil(3.7));  // ceil method


// console.log(Math.floor(3.4));  // floor method 3.4 ho ya 3.7 1 number kamkardaga
// console.log(Math.floor(3.7));  // floor method

// // const truncValue = Math.trunc(33.7) // trunc kai kar ta ha . sa pala ki value data hai ok
// const truncValue = Math.trunc(3.7) // trunc kai kar ta ha . sa pala ki value data hai ok
// console.log(truncValue);

// const floorValue = Math.floor(-3.7);
// console.log(floorValue);// floor aur trunc ma ya fark ha ka agar aap floor ko negative value doga to vo number baradaga aur agar trunc ko doga to vo nahi barayaga

// const truncValue = Math.trunc(-3.7);
// console.log(truncValue);

// console.log(Math.pow(2,3)); // pow method
// console.log(2 ** 3);


/// javascript methods (push) (pop) (shift) (unshift)  (map) (filter) (includes) (splice)
//  (find) (findindex) (Set) (sort) (touppercase) (tolowercase) (reduce) (search) (match)
// (matchAll) (substring) (startwith) (slice) (charcodeAt)(charAt) (AT) (trim) (split)
// (pow) (sqr) (log) (random)

// const sqaureRoot = Math.sqrt(25);
// console.log(sqaureRoot);

// console.log(Math.log2(8)); log 2 method //

// console.log(Math.random()); random method ////


// console.log(Math.round(Math.random()* 50));
// console.log((Math.random()* 50).toFixed(3));


// ///////////////// Dom and Bom start ///////////////////////////////////////////
alert("hello world")

