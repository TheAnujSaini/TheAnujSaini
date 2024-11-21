// console.log("hello");


// //variable:-
// let x = 10;
// x = 12;
// console.log(x);


// var a = 15;

// a = 18;
// console.log(a)

// const y = 20;

// console.log(y);
// //string:- strings are used to store the textual value.
// let name = "         Mudit"
// console.log(name);

// //Methods of string:-
// //trim():- this method is used to remove empty space from string.

// console.log(name.trim());
// //charAt():- this  method is used to find the character from an string.
// let str = "Bareilly"
// console.log(str.charAt(3));

// //indexOf():- this method is used to find the index of an string.
// console.log(str.indexOf("r"));

// //toupercase:- this method is used to convert string small to capital.
// console.log(str.toUpperCase());

// //tolowercase:- this method is used to convert string capital to small.
// console.log(str.toLowerCase());

// //Array:- array is the collection of the items.
// let data = [10, 20, 30, "anuj", true]
// console.log(data)


// //Methods of array:-
// //Push():- This method is use to add a new element in the  last of an array.
// data.push(50);
// console.log(data);
// //pop():- this method is use to remove the last element from an array.
// data.pop();
// console.log(data);
// //unshift:- this method is use to add new element in the starting in the array.
// data.unshift(5);
// console.log(data);
// // shift():- This method is used to remove the first element in the array.
// data.shift()
// console.log(data);
// //filter:- this method is used to filter the value.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16]
// let filterArr = arr.filter((item) => item % 2 == 0)
// console.log(filterArr);
// //Array Destructing:- it is use to distriuted  the arrays value in string.
// //spread operator:- is use to expand the array value.

// let [arr1, arr2, ...arr3] = arr;
// console.log(arr1);
// console.log(arr3);

// //object:- object is a collection of key and value pair.

// let person = {
//   name: "Anuj",
//   email: "sainianuj1235@gmail.com",
//   add: "Bareilly",

// };
// //console.log(person.name);

// //nested object:- an object have inside the another object is called nested object.
// let empData = {
//   empName: {
//     1: "aman",
//     2: "sam",
//     3: "bhim",
//   },
//   empEmail: {
//     1: "aman@email.com",
//     2: "sam123@gmail.com",
//     3: "bhim@gmail.com",
//   },
//   empAdd: {
//     1: "noida",
//     2: "gurugram",
//     3: "bilsanda",
//   },
//   empDesignation: {
//     1: "Graphics designer",
//     2: "software engineer",
//     3: "ML engineer",
//   },
// };
// console.table(empData);

// console.log(empData.empName[1]);

// // Array of Object: An array have inside the multiple object is called array of object.

// let userData = [
//   {
//     name: "anuj",
//     email: "anujsaini@gmail.com",
//   },
//   {
//     name: "aman",
//     email: "amna@gmail.com",

//   },
// ]
// // console.table(userData);


// userData[0].age = 24;

// console.log(userData);

// // operator: operator are used to perform operations.
// // Arithmetic operator: this operator is used to perform the mathmatic operations.
// // Addition (+) :

// let c = 10;
// let b = 5;
// console.log(c + b);

// // substraction(-):

// console.log(c - b);

// // divison:
// console.log(c/b);

// console.log(c%b);

// // Assigment operator:
// // addition equal:
// let e = 10;
// let f = 5;
// x += y;
// e = e+f;
// console.log((e += f));

// == : it will compare the two value and ignore data type.
//  let a = 10;
//  let b = "10";
//  console.log(a == b);

// let age = 16;
// age >= 18 ?
// console.log("you can play") : console.log("you can not play");

// if else : 
// let value = {
//     userName: "anuj",
//     password: "1234",
// };
// if (!value.userName) {
//     console.log("userName is required");
// }
// else if (value.userName != "anujsaini@gmail.com") {
// alert("user not found")
// }


// else if (!value.password) {
//     console.log("password is required");
// }
// else {
//     console.log(value);
// }
// switch case: Switch case is used to perform the different action based on different condition. It is alternate of If-Else condition.
// let day = prompt("Enter day");
// day = parseInt(day);
// console.log(typeof day);
// let dayName;
// switch(day){
//     case 1:
//         dayName = "Monday";
//         break
//         case 2:
//             dayName = "Tuesday";
//             break
//             case 3:
//                 dayName = "wednesday";
//                 break
//                 case 4:
//                     dayName = "Thursday";
//                     break
//                     case 5:
//                         dayName = "Friday";
//                         break
//                         case 6:
//                             dayName = "Saturday";
//                             case 7:
//                             dayName = "Sunday";
//                             break
//                     }
//                     console.log(dayName);

// create a simple calculator:
// let num1 = prompt("enter num");
// let num2 = prompt("enter num");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// console.log(typeof num);
// let op= prompt("enter the operator");
// let result
// switch (op) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//          result = num1 / num2;
//         break;
//     default:
//         result = "Error: Invalid operator!";
// }
// console.log(result)

// Loops: loops are used to execute the block of code an specific condition.
// For loop:
//  let num = 10;
//  for (let i = 0; i<num; i++){
//     console.log(i);
//  }
//let data = [1, 2, 3, 4, 55, 66, 77, 88, 99];
//for (let i = 0; i<=5; i++){
// console.log(data[i]);
// }
// while loop - while loop is use to repeteadly execute the block 

// let a = 10;
// while (a < 15) {
//     console.log(a);
//     a++;


// }
// let data = [1, 2, 3, 4, 55, 66, 77, 88, 99];
// while(data.length>5){
// data.pop();
// }
// console.log(data);

// do while loop - do while loop is similar to while loop but main deference is it will execute 
// let data = [1, 2, 3, 4, 55, 66, 77, 88, 99];
// do{
//     data.pop()
//  } while(data.length>5);

// console.log(data);``

// Break statement: break statement is use to stop the loop on a specific condition.

// let num = 20;

// for (let i = 0;i<=20;i++){
//     if(i==6){
//         break;
//     }
//     console.log(i);
// }
// // continue statement: continue statement is use to skip specific condition.
//  for( let i = 0; i<=num; i++){
//     if (i%2== 0){
//         continue;
//     }
//     console.log(i);
//  }


// Function: function is a block of code. that are use to write a specific code.

// function person(name, age) {
//     console.log("I am a person function");
//     console.log(`My name is: ${name}`);
// }
// person("anuj", 21);

// // Rest operator: rest operator is use to expand parameter value in function.

// function Rest(...num1) {----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//     console.log(num1);
// }
// Rest(11, 22, 23, 4343, 453);

// Calculate Sum of numbers from 1 to 100.
// const number = parseInt(prompt('enter a positive num:'));
// let sum =0;
// for(i=1; i<=number;i++){
//     sum += i;
// }
// console.log("sum of the natural number ",sum);

// Calculate sum of all the numbers divisble by 5 from 1 to 500.
// let sum = 0;
// for(let i=1; i<=500; i++){
//     if(i%5==0){
//     sum+=i;
//     }
// }
// console.log(sum)

// Calculate Sum of all 3 and 5 multiples under 1000.

// let sum = 0;
// for(let i = 0; i<=1000;i++){
//     if(i%3==0 && i%5==0){
//         sum = sum +i
//     }
// }

// console.log(sum)


// Arrow function: arrow is similar to the anonyms function it is a ES6 module.
// let Person=(name)=>{
//     console.log("i am person function");
//     console.log(name);
// };
// Person("Anuj");

// Callback Function: A function pass a argument to the another function is calleback function.
//  let parent=(child)=>{
//     console.log("I am parent function");
//     child();
//  };
//  let child=()=>{
//     console.log("I am child function");
//  };
//  parent(child);

// setTimeOut: it is a callback function that is used call the function on a specific time.
// let parent=()=>{
//         console.log("I am parent function");
//         child();
//      };
//      let child=()=>{
//         console.log("I am child function");
//      };
//      parent();
//  setTimeout(()=>{
//     child();

//  } ,2000);

// setInterval: It is a callback funtion that is used to repeately call the funtion on specific time.
// let parent=()=>{
//     console.log("I am parent function");
//     child();
//  };
//  let child=()=>{
//     console.log("I am child function");
//  };
//  parent();
//  setInterval(()=>{
//     child();
// },2000);

// Date: Date is object which helps us work with time and date.
// new: new keyword is a instance of the object.

let date = new Date();

// getDate:-This method is use to find the date.
// toDateString: this method is to find the date with month and year.
// toLocalDateString : this method use to find month and year in number form.
// toLocalString: This method is use to find the data with time.
// getHours: this method is use to find the hours.
// getMinutes: this method is use to find the minute.
// getSeconds: this method is use to find the Seconds.



console.log(date.getSeconds());

const Watch = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(`hours :${hours} ,minutes :${minutes},second :${seconds}`)
};

setInterval(() => {
  Watch()

}, 1000);
