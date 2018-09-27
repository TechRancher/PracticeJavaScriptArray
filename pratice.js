/*
  I wrote this to give examples of the different types of functions/methods that can be done with Arrays in JavaScript.
  Author: Jason Sikes
  Date: 09/27/2018
  It is not set to use strict.
*/

var fruits = ["Apple", "Banana", "Orange", "Lemon", "Apple", "Mango"];
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var points = [40, 100, 1, 5, 25, 10];
var cars = [
  {type: "Volvo", year: 2016},
  {type: "Saab", year: 2001},
  {type: "BMW", year: 2010}
];
var numbers = [45, 4, 9, 16, 25];
var myChildren;
var citrus;
const btn = document.querySelector("button");
// Added an eventlistener to the btn
btn.addEventListener("click", myFunction);
// document.getElementById("demo").innerHTML =  `The array  fruits contains: ${fruits}`;
// document.getElementById("demo2").innerHTML = `The JavaScript method toString() converts an array to a string of (comma separated) array values. ${fruits.toString()}`;
// document.getElementById("demo3").innerHTML = `The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator: ${fruits.join("|")}`;
// document.getElementById("demo4").innerHTML = `The pop() method returns the value that was "popped out": The pop() method removes the last element from an array: ${fruits.pop()}`;
// document.getElementById("demo5").innerHTML = `The push() method returns the new array length: The push() method adds a new element to an array (at the end): ${fruits.push("Kiwi")}`;
// document.getElementById("demo6").innerHTML = `This will display everything in the array. ${fruits}`;
// document.getElementById("demo").innerHTML = `The shift() method returns the string that was "shifted out": The shift() method removes the first array element and "shifts" all other elements to a lower index. ${fruits.shift()}`;
// document.getElementById("demo2").innerHTML = `This displays the array content. ${fruits}`;
// document.getElementById("demo3").innerHTML = `The unshift() method returns the new array length. The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: ${fruits.unshift("Lemon")}`;
// document.getElementById("demo4").innerHTML = `This returns the content of the array: ${fruits}`;
// document.getElementById("demo5").innerHTML = `Array elements are accessed using their index number and is displayed: ${fruits[0]}`;
// document.getElementById("demo6").innerHTML = `The length property provides an easy way to append a new element to an array: ${fruits[fruits.length] = "Kiwi"}`;
// document.getElementById("demo").innerHTML = `Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete: the out put is true if it deleted the index item. ${delete fruits[0]}  Using delete may leave undefined holes in the array. Use pop() or shift() instead.`;
// document.getElementById("demo2").innerHTML = `The splice() method can be used to add new items to an array: ${fruits.splice(2,0,"Lemon","Kiwi")}`;
// document.getElementById("demo3").innerHTML = `With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: ${fruits.splice(0,1)}`;
// document.getElementById("demo4").innerHTML = `The concat() method can take any number of array arguments. The concat() method can also take values as arguments. The concat() method creates a new array by merging (concatenating) existing arrays: ${myChildren = myGirls.concat(myBoys).join(", ")}`;
// document.getElementById("demo5").innerHTML = `The slice() method slices out a piece of an array into a new array. ${citrus = fruits.slice(1).join(", ")}`;
// document.getElementById("demo6").innerHTML = `The slice() method can take two arguments like slice(1, 3). ${citrus=fruits.slice(1,3)}`;
// function myFunction() {
//   fruits.sort(); // The sort() method sorts an array alphabetically:
//   fruits.reverse(); // The reverse() method reverses the elements in an array.
//   document.getElementById("demo").innerHTML = fruits;
// };

// function myFunction() {
//   /* By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function: */
//   points.sort(function(a,b) {return a - b}); 
//   document.getElementById("demo").innerHTML = points;
// };

// function myFunction() {
//   // Use the same trick to sort an array descending:
//   points.sort(function(a,b) {return b-a});
//   document.getElementById("demo").innerHTML = points;
// };
// function myFunction() {
//  // sorting an Array in Random Order
//   points.sort(function(a,b) {return 0.5 - Math.random()});
//   document.getElementById("demo").innerHTML = points;
// };

// document.getElementById("demo").innerHTML = myArrayMax(points);
// function myArrayMax(arr){
//   // You can use Math.max.apply to find the highest number in an array:
//   return Math.max.apply(null, arr);
// };

// document.getElementById("demo").innerHTML = myArrayMin(points);
// function myArrayMin(arr){
//   // You can use Math.min.apply to find the lowest number in an array:
//   return Math.min.apply(null, arr);
// };

// document.getElementById("demo").innerHTML = myArrayMax(points);
// function myArrayMax(arr) {
//   // The fastest solution is to use a "home made" method.
//   // This function loops through an array comparing each value with the highest value found:
//   let len = arr.length;
//   let max = -Infinity;
//   while(len --){
//     if(arr[len] > max){
//       max = arr[len];
//     }
//   }
//   return max;
// };

// document.getElementById("demo").innerHTML = myArrayMin(points);
// function myArrayMin(arr) {
//   // The fastest solution is to use a "home made" method.
//   // This function loops through an array comparing each value with the lowest value found:
//   let len = arr.length;
//   let min = Infinity;
//   while(len --){
//     if(arr[len] < min){
//       min = arr[len];
//     }
//   }
//   return min;
// };

// Array.sort()
// function myFunction() {
//   // JavaScript arrays often contain objects:
//   // Even if objects have properties of different data types, the sort() method can be used to sort the array.
//   // The solution is to write a compare function to compare the property values:
//   cars.sort(function(a,b){return b.year - a.year});
//   displayCars();
// };
// function displayCars(){
//   document.getElementById("demo").innerHTML = 
//   `${cars[0].type} ${cars[0].year} <br>
//   ${cars[1].type} ${cars[1].year} <br>
//   ${cars[2].type} ${cars[2].year}`;
// };

// Array.sort()
// function myFunction(){
//   cars.sort(function(a,b){
//     // Comparing STRING PROPERTIES is a little more complex:
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if(x < y) {return -1};
//     if(x > y){return 1};
//     return 0;
//   });
//   displayCars();
// };
// function displayCars() {
//   document.getElementById("demo").innerHTML =
//   `${cars[0].type} ${cars[0].year}<br>
//   ${cars[1].type} ${cars[1].year} <br>
//   ${cars[2].type} ${cars[2].year}`;
// };

// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element
// btn.addEventListener("click", btnFunction => {
//   let txt = "";
//   numbers.sort(function(a,b){return a - b});
//   numbers.forEach(btnFunction);
//   document.getElementById("demo").innerHTML = txt;
//   function btnFunction(value, index, array) {
//     txt += `${value} <br>`;
//   };
// });

// Array.may()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// var number1 = numbers;
// var number2 = number1.map(myFunction);
// document.getElementById("demo").innerHTML = number2;
// function myFunction(value, index, array) {
//   // This example multiplies each array value by 2:
//   return value * 2;
// };

// Array.filter()
// The filter() method creates a new array with array elements that passes a test.
// var over18 = numbers.filter(myFunction);
// document.getElementById("demo").innerHTML = over18;
// function myFunction(value, index, array) {
//   //This example creates a new array from elements with a value larger than 18:
//   return value > 18;
// };

// Array.reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.
// var sum = numbers.reduce(myFunction);
// document.getElementById("demo").innerHTML = sum;
// function myFunction(total, value, index, array) {
//   // This example finds the sum of all numbers in an array:
//   return total + value;
// };
// The reduce() method can accept an initial value:
// var sum = numbers.reduce(myFunction, 100);
// document.getElementById("demo").innerHTML = sum;
// function myFunction(total, value){
//   return total + value;
// };

// Array.reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// The reduceRight() method does not reduce the original array.
// var sum = numbers.reduceRight(myFunction);
// document.getElementById("demo").innerHTML = sum;
// function myFunction(total, value, index, array){
//   // This example finds the sum of all numbers in an array:
//   return total + value;
// };

// Array.every()
// The every() method check if all array values pass a test.
// numbers.sort(function(a,b){return a - b}); // I just added this to sort the numbers from smallest to largest.
// var allOver18 = numbers.every(myFunction);
// document.getElementById("demo").innerHTML = allOver18;
// function myFunction(value, index, array){
//   // This example check if all array values are larger than 18: It will return true or false.
//   return value > 18;
// };

// Array.some()
// The some() method check if some array values pass a test.
// btn.addEventListener("click", myFunction => {
//   // For the fun I attached this function to a button
//   numbers.sort(function(a,b){return a - b}); // I sorted the numbers from lowest to largest just for fun.
//   var allOver18 = numbers.some(myFunction);
//   document.getElementById("demo").innerHTML = allOver18;
//   function myFunction(value, index, array){
//     return value > 18;
//   };
// });

// Array.indexOf()
// Search an array for an element value and returns its position.
// Note: The first item has position 0, the second item has position 1, and so on.
// The indexOf() does not work in Internet Explorer 8 and earlier versions.
// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.
// function myFunction(){
//   let a = fruits.indexOf("Apple");
//   document.getElementById("demo").innerHTML = `Apple is found in position ${a + 1}`;
// };

// Array.lastIndexOf()
// array.lastIndexOf(item, start)
// item	Required. The item to search for
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
// Array.lastIndexOf() is the same as Array.indexOf(), but searches from the end of the array.
// function myFunction(){
//   let a = fruits.lastIndexOf("Apple");
//   document.getElementById("demo").innerHTML = `The last Apple is found at position ${a + 1}`;
// };

// Array.find()
// The find() method returns the value of the first array element that passes a test function.
// function myFunction(){
//   numbers.sort(function(a,b){return a - b}); // This puts the array from lowest to highest numbers.
//   let first = numbers.find(myNumberFunction);
//   function myNumberFunction(value, index, array){
//     // This example finds (returns the value of ) the FIRST element that is larger than 18:
//     return value > 18;
//   };
//   document.getElementById("demo").innerHTML = `This is the first number "${first}" that is over 18 in the numbers array`;
// };

// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// function myFunction(){
//   numbers.sort(function(a,b){return a - b}); // I sorted the numbers array from the lowerest to the highest
//   let first = numbers.findIndex(myNumberFind);
//   function myNumberFind(value, index, array){
//     // This example finds the index of the first element that is larger than 18:
//     return value > 18;
//   };
//   document.getElementById("demo").innerHTML = `This finds the index "${first}" of the first number larger then 18 in the numbers array.`;
// };

/*
This ends the functions/methods of JavaScript Array from the website W3Schools
Website https://www.w3schools.com/js/js_arrays.asp
I hope this helpes you with your quest to learn more about JavaScript.
Thank you for checking this out.
*/

