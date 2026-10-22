// let age = 20;
// console.log(age);
// age++;
// console.log(age);
// age = age + 1;
// console.log(age);
// let a = 10;
// a = "string"
// console.log(a);

// let x = 10;

// function f(x) {
//     console.log(x);
//     x = 11;
//     if (true) {
//         let x;
//         x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(x);
// console.log(f(x))
// console.log(x);


// let x = 10;

// if (true) {
//     x = 20;
// }

// console.log(x);


// if (true) {
//     let message = "Hello";
// }

// console.log(message);


// {
//     let message = "Hello";
// }

// console.log(message);


// let x = 1;

// {
//     let x = 2;
//     {
//         let x = 3;
//         console.log(x);
//     }
//     console.log(x);
// }

// console.log(x);



// let x = 10;

// console.log(1 + true);
// console.log(1 + false);



// let x = 10;

// {
//     console.log(x);
//     let x = 20;
// }

// let x = 10;

// {
//     console.log(x);
// }


// console.log(-10 % 3);
// console.log(10 % -3); 

// console.log(2 ** 3 ** 2);


// console.log(1 + 2 + "3");
// console.log("1" + 2 + 3);

// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);


// console.log("hello" - 2);
// console.log("hello" * 2);
// console.log("hello" / 2);

// console.log(true + true);
// console.log(true + 2);
// console.log(true + false);

// Is:
// x += 5;
// exactly equivalent to:
// x = x + 5;
// in every possible situation?


// let x = 5;
// let y = x++;

// console.log(x);
// console.log(y);
// console.log(x++);
// console.log(x);
// console.log(++x);
// console.log(x);

// let x = 3;
// let y = x++ + x-- - --x - x--;
// console.log(y); 
// console.log(x++ + x-- - --x - x--);
// console.log(x);

// let x = 1;
// console.log(x = x + 1);
// console.log(x);

// x = x + 5;
// x += 5;

// console.log("10" > "2");

// console.log("hello" && "world");
// console.log("hello" && "" && "world");
// console.log("hello" || "world");
// console.log("" || "world");

// false && console.log("Hello");

// let user = "a";
// if (user) {
//     console.log(user);
// }
// user && console.log(user);

// No, x = x + 5 evaluates x twice to retrieve its value but x += 5 evaluates only once to determine memory location for assignment, then adds 5 to the retrieved value.


// function greet() {
//     console.log("Hello");
// }

// let x = greet;

// console.log(greet);
// console.log(x);
// console.log(x + "");
// console.log(x());

// function greet() {
//     return function g() {
//         console.log("something");
//     }
// };

// greet();


// function test() {
//     console.log("A");
//     return console.log("B");
// }

// let x = test();

// console.log(x);

// console.log(console.log(1), console.log(console.log(2)));

// function test() {
//     if (true)
//         return
//         10;
// }

// console.log(test());


// function test() {
//     return
//     {
//         name: "John"
//     };
// }

// console.log(test());


// function outer() {

//     function inner() {
//         console.log("Hello");
//     }

//     inner();
// }

// outer();

// function outer() {
//     let x = 10
//     function inner() {
//         return x;
//     }

//     return inner;
// }

// let x = outer();

// console.log(x(outer()));

// function f1(a, b) { return a + b };
// let a = f1
// console.log(++a);


// function outer() {
//     let x = 10;

//     function inner() {
//         return x;
//     }

//     return inner;
// }

// let fn = outer();

// console.log(fn());



// const a = {
//     x: 1,
//     y: 2,
// }

// const x = {
//     a: 3,
//     y: 4,
// }

// console.log(a)
// console.log(a.x)
// console.log(a.x.x)
// console.log(a.y)
// console.log(a.x.y)
// console.log(a.y.x)
// console.log(x)
// console.log(x.a)
// console.log(x.y)
// console.log(x.a.x)
// console.log(x.a.y)
// console.log(x.y.a)
// console.log(x.y.y)


// const user = {
//     name: "Alex",
//     age: 20
// };

// function birthday(person) {
//     person.age++;
// }

// birthday(user);

// console.log(user.age);


// const user = {
//     name: "Alex",
//     age: 20
// };

// function birthday(person) {
//     person = {
//         name: person.name,
//         age: person.age + 1
//     };
// }

// birthday(user);

// console.log(user.age);


// const user = {
//     age: "20"
// };

// if (user.age === 20) {
//     console.log("A");
// } else if (user.age == 20) {
//     console.log("B");
// } else {
//     console.log("C");
// }


// function a(b) {
//     console.log(b);
// }

// console.log(a("a"));

// console.log(console.log(a))

// if ({ a }) {
//     const b = a + "";
//     a({ b })
// } else {
//     console.log("empty object is falsy");
// }

// if ({}) {
//     a({ a: a, a: 2 })
// } else {
//     console.log("empty object is falsy");
// }

// if ({}) {
//     a({ a: 2, a: a })
// } else {
//     console.log("empty object is falsy");
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// for (
//     console.log("A");
//     console.log("B");
//     console.log("C")
// ) {
//     console.log("D");
// }


// function greet() {
//     console.log("Hello");
//     return "Hello";
// }

// let a = greet;
// let b = a;
// let c = b;

// console.log(c());
// console.log(c(b(a(c()))));

// function greet() {
//     console.log("Hello");
// }

// let a = greet;
// let b = greet;

// console.log(a, b, greet, greet(), a(), b());
// console.log(a, b(), greet, greet(), b, a());


// console.log(a === b);

// for (
//     true ? console.log("A") : console.log("a");
//     console.log("B");
//     console.log("C")
// ) {
//     console.log("D");
// }


// for (
//     let i = 0;
//     i < 3;
//     console.log("update")
// ) {
//     console.log(i);
// }


// for (let i = 0, j = 10; i < 5; i++, j--) {
//     console.log(i, j);
// }

// let i = 0;

// for (; i < 3;) {
//     console.log(i);
//     i++;
// }

// let i = 0;

// for (; ;) {
//     console.log(i);
//     i++;
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i);



// let i = 100;

// for (let i = 0; i < 3; i++) {
//     let i = 50;
//     console.log(i);
// }

// console.log(i);



// let i = 100;

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }


// let i = 0;

// while (i < 3) {
//     console.log(i = i + 1);
// }


// let i = 0;

// while (i++ < 3) {
//     console.log(i);
// }



// for (let i = 0, j = 10; i < 5 && j > 5; i++, j--) {
//     console.log(i, j);
// }



// let i = 0;
// let j = 10;

// while (i++ < 3 && j-- > 7) {
//     console.log(i, j);
// }

// let value = 3;

// while (value) {
//     console.log(value);
//     value--;
// }


// let value = "3";

// while (value) {
//     console.log(value);
//     value--;
// }


// let value = "3";

// while (value) {
//     console.log(value);
//     value--;
//     if(value === 0) continue;
// }


// let value = "3";

// while (value) {
//     console.log("Before --", value);
//     value--;
//     console.log("after --", value);
//     if (value === 0) continue;
//     console.log("after if", value);

// }


// let value = "3";

// while (value) {
//     if (value === 0) continue;
//     console.log("Before --", value);
//     value--;
//     console.log("after --", value);
//     console.log("after if", value);

// }


// let value = "3";

// while (value) {
//     if (value === 2) continue;
//     console.log("Before --", value);
//     value--;
//     console.log("after --", value);
//     console.log("after if", value);

// }


// let value = "3";

// while (value) {
//     value--;
//     if (value === 2) continue;
//     console.log("Before --", value);
//     console.log("after --", value);
//     console.log("after if", value);

// }


// function test() {
//     for (let i = 0; i < 3; i++) {
//         if (i === 1) {
//             return i;
//         }

//         console.log(i);
//     }

//     return 100;
// }

// console.log(test());



// let i = 5;

// while (i-- > 2) {
//     console.log(i);
// }


// let i = 0;

// while (i < 5 || i++ < 3) {
//     console.log(i);
// }

// const users = {
//     alex: {
//         age: 20
//     },

//     john: {
//         age: 15
//     },

//     mike: {
//         age: 25
//     }
// };

// function countAdults(users) {
//     let count = 0;

//     for (const key in users) {
//         if (users[key].age >= 18) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countAdults(users));


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);

//         if (i === 2) {
//             return;
//         }
//     }

//     console.log("Done");
// }

// test();


// const arr = [
//     10,
//     "hello",
//     true,
//     [1, 2, 3],
//     { x: 10 },
//     function a(b) {
//         console.log(b);
//     }
// ];


// const a = [1];

// a[2] = "2";
// console.log(a)
// a["2"] = "2";
// console.log(a)
// a["aa"] = "2";
// console.log(a)
// a[a[a[a]]] = "3";
// a["a"] = 3;
// console.log(a);

// console.log(a.length);



// const a = numbers.push(400);
// console.log(a);
// console.log(numbers);

// const b = numbers.pop();
// console.log(b);
// console.log(numbers);

// const c = numbers.unshift(5);
// console.log(c);
// console.log(numbers);

// const d = numbers.shift();
// console.log(d);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const e = numbers.splice(1, 2);
// console.log(e); 
// console.log(numbers);

// const f = numbers.splice(1);
// console.log(f);
// console.log(numbers);

// const g = numbers.splice(2, 2, 30);
// console.log(g); // 3 4
// console.log(numbers); // 1 2 30 5 6 7 

// const h = numbers.splice(2, 0);
// console.log(h); // []
// console.log(numbers); // 1 2 30 5 6 7


// const digits = [10, 20, 30];
// digits.unshift(5);
// digits.push(40);
// console.log(digits.splice(3, 1));
// console.log(digits);



// const a = [10, 20, 30];

// console.log(a[0]);
// console.log(a[3]);
// console.log(a[-1]);
// console.log(a["1"]);



// const a = [10, 20, 30];

// console.log(a.length);

// a[10] = 100;

// console.log(a.length);
// console.log(a);



// const a = [];

// a[5] = "hello";

// console.log(a);
// console.log(a.length);

// console.log(a[0]);
// console.log(a[4]);
// console.log(a[5]);


// What's the difference between: const a = [1, undefined, 3]; and const b = [];
// b[2] = 3;
// a.length
// b.length

// a[1]
// b[1]


// const arr = [10, 20, 30, 40, 50];

// arr.length = 3;

// console.log(arr);


// const arr = [1, 2, 3];

// arr.length = 0;

// console.log(arr);


// const arr = [1, 2, 3];

// arr.length = 10;

// console.log(arr.length);
// console.log(arr[5]);
// console.log(5 in arr);

// let x = 0;
// console.log(x = x + 1)
// console.log(x);



// const arr = [1, 2, 3];
// console.log(arr.length);
// console.log(arr.length = arr.length - 1);
// arr.length = arr.length - 1;
// console.log(arr);

// console.log(arr.length--);
// arr.length--;
// console.log(arr);



// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     arr.pop();
// }

// console.log(arr);



// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     arr.shift();
// }

// console.log(arr);




// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     arr.pop();
// }


// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);



// const student = {
//     name: "Aman",
//     marks: [60, 70]
// };

// const anotherStudent = student;

// function updateStudent(person) {
//     person.marks.push(80);
//     person = {
//         name: "Riya",
//         marks: [90]
//     };
//     person.marks.push(100);
//     return person;
// }

// const result = updateStudent(anotherStudent);

// student.marks[0] = 50;

// console.log(student.marks);
// console.log(anotherStudent.marks);
// console.log(result.name, result.marks);
// console.log(student === anotherStudent);
// console.log(student === result);



// const items = [
//     { value: 2 },
//     { value: 4 },
//     { value: 6 }
// ];

// const selected = [];

// for (let i = 0; i < items.length; i++) {
//     if (items[i].value > 2) {
//         selected.push(items[i]);
//     }
// }

// selected[0].value = 40;
// selected[1] = { value: 60 };

// console.log(items[0].value);
// console.log(items[1].value);
// console.log(items[2].value);

// items[2].value = selected[0].value + selected[1].value;

// console.log(items[0].value);
// console.log(items[1].value);
// console.log(items[2].value);

// console.log(selected[0].value);
// console.log(selected[1].value);

// console.log(items[1] === selected[0]);
// console.log(items[2] === selected[1]);



// const numbers = [8, 10, 2, 12, 15, 3];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 5) {
//         numbers.splice(i, 1);
//     }
// }

// console.log(numbers);


// const numbers = [8, 10, 2, 12, 15, 3];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   if (numbers[i] > 5) {
//     numbers.splice(i, 1);
//   }
// }

// console.log(numbers);


// const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[j] === 2) {
//             numbers.splice(j, 1);
//         }
//     }
// }

// console.log(numbers);
// console.log(numbers.length);


// let count = 10;

// function update(count) {
//     for (let i = 0; i < 3; i++) {
//         count += i;
//     }

//     return count;
// }

// const result = update(2);

// console.log(count);
// console.log(result);
// console.log(typeof i);


// let value = 5;

// function first() {
//     let value = 10;
//     // let value = value + 5;

//     function second() {
//         value = value + 5;
//         return value;
//     }

//     return second();
// }

// const result = first();

// console.log(value);
// console.log(result);



// const numbers = [1, 2, 3];

// function change(arr) {
//     arr[0] = 10;
//     arr = [4, 5, 6];
//     arr[1] = 50;
//     return arr;
// }

// const result = change(numbers);

// console.log(numbers);
// console.log(result);
// console.log(numbers === result);


// Fractal Tree
// rules  : (1 → 11), (0 → 1[0]0)


// 0:	0
// 1:	1[0]0
// 2:	11[1[0]0]1[0]0
// 3:	1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0


// function fractalTree(num) {
//     if (num <= 0) return "0";
//     let prevStr = fractalTree(num - 1);
//     console.log(prevStr);
//     let str = "";

//     for (let i = 0; i < prevStr.length; i++) {
//         if (prevStr[i] === '0') {
//             str += '1[0]0';
//         } else if (prevStr[i] === '1') {
//             str += '11';
//         } else {
//             str += prevStr[i];
//         }
//     }
//     return str;
// }

// console.log(fractalTree(15))


// Algae
// rules  : (A → AB), (B → A)

// function algae(num) {
//     if (num <= 0) return "A";
//     let prevStr = algae(num - 1);
//     console.log(prevStr);
//     let str = "";

//     for (let i = 0; i < prevStr.length; i++) {
//         if (prevStr[i] === 'A') {
//             str += 'AB';
//         } else {
//             str += 'A';
//         }
//     }
//     return str;
// }

// algae(10);



// Cantor set
// rules  : (A → ABA), (B → BBB)


// function cantorSet(num) {
//     if (num <= 0) return "A";
//     let prevStr = cantorSet(num - 1);
//     console.log(prevStr);
//     let str = "";

//     for (let i = 0; i < prevStr.length; i++) {
//         if (prevStr[i] === 'A') {
//             str += 'ABA';
//         } else {
//             str += 'BBB';
//         }
//     }
//     return str;
// }

// cantorSet(4);




// Koch curve
// rules  : (F → F+F−F−F+F)


// function kochCurve(num) {
//     if (num <= 0) return "F";
//     let prevStr = kochCurve(num - 1);
//     console.log(prevStr);
//     let str = "";

//     for (let i = 0; i < prevStr.length; i++) {
//         if (prevStr[i] === 'F') {
//             str += 'F+F−F−F+F';
//         } else {
//             str += prevStr[i];
//         }
//     }
//     return str;
// }

// kochCurve(4);



// Sierpinski triangle
// rules  : (F → F−G+F+G−F), (G → GG)


// function sierpinskiTriangle(num) {
//     if (num <= 0) return "F";
//     let prevStr = sierpinskiTriangle(num - 1);
//     console.log(prevStr);
//     let str = "";

//     for (let i = 0; i < prevStr.length; i++) {
//         if (prevStr[i] === 'F') {
//             str += 'F−G+F+G−F';
//         } else if (prevStr[i] === 'G') {
//             str += 'GG';
//         } else {
//             str += prevStr[i];
//         }
//     }
//     return str;
// }

// sierpinskiTriangle(4);




// dragon curve
// rules  : (F → F+G), (G → F-G)


// function dragonCurve(num) {
//     if (num <= 0) return "F";

//     const prevStr = dragonCurve(num - 1);
//     let result = "";
//     console.log(prevStr);
//     for (const char of prevStr) {
//         switch (char) {
//             case "F":
//                 result += "F+G";
//                 break;
//             case "G":
//                 result += "F-G";
//                 break;
//             default:
//                 result += char;
//         }
//     }
//     return result;
// }

// dragonCurve(4);


// fractal plant
// rules: (X → F+[[X]-X]-F[-FX]+X), (F → FF)


// function fractalPlant(num) {
// if (num <= 0) return "X";

// const prevStr = fractalPlant(num - 1);
// let result = "";
// console.log(prevStr)
// for (const char of prevStr) {
//     switch (char) {
//         case "X":
//             result += "F+[[X]-X]-F[-FX]+X";
//             break;
//         case "F":
//             result += "FF";
//             break;
//         default:
//             result += char;
//     }
// }

//     return result;
// }

// console.log(fractalPlant(3));


// Write a JavaScript function called analyzeNumbers(numbers) that returns the second-largest distinct number in an array. If there is no second-largest distinct number, return null

// function analyzeNumbers(numbers) {
//     if (numbers.length <= 1) return null;
//     let largest = numbers[0], secLargest = -Infinity;
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             secLargest = largest;
//             largest = numbers[i];
//         } else if (numbers[i] < largest && numbers[i] > secLargest) {
//             secLargest = numbers[i];
//         }
//     }
//     return secLargest === -Infinity ? null : secLargest;
// }

// console.log(analyzeNumbers([])); // null
// console.log(analyzeNumbers([7])); // null
// console.log(analyzeNumbers([9, 9, 6])); // 6
// console.log(analyzeNumbers([-1, -5, -3])); // -3
// console.log(analyzeNumbers([10, 5, 8, 10, 8])); // 8
// console.log(analyzeNumbers([4, 4, 4]));         // null
// console.log(analyzeNumbers([-5, -2, -10]));     // -5
// console.log(analyzeNumbers([1, 2]));            // 1



// Write a function longestIncreasingLength(numbers) that returns the length of the longest contiguous strictly increasing sequence in an array.
// A sequence is contiguous when its elements are next to each other in the original array. Each element must be strictly greater than the preceding element.

// function longestIncreasingLength(numbers) {
//     if (numbers.length === 0) return 0;
//     let count = 1;
//     let max = 1;
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > numbers[i - 1]) {
//             count++;
//             max = Math.max(count, max);
//         } else {
//             count = 1;
//         }
//     }
//     return max;
// }


// console.log(longestIncreasingLength([1, 2, 3, 4])); // 4
// console.log(longestIncreasingLength([1, 2, 3, 0, 1])); // 3
// console.log(longestIncreasingLength([1, 2, 3, 1, 2, 5])); // 3
// console.log(longestIncreasingLength([5, 4, 3, 2]));        // 1
// console.log(longestIncreasingLength([1, 2, 2, 3, 4]));     // 3
// console.log(longestIncreasingLength([7]));                 // 1
// console.log(longestIncreasingLength([]));                  // 0
// console.log(longestIncreasingLength([-3, -2, -1, -4]));    // 3
// console.log(longestIncreasingLength([1, 3, 2, 4, 4.308, 5, 7, 8, 9])); // 7


// Write a function called secondLargest(numbers) that returns the second-largest distinct number without sorting the array.

// function secondLargest(numbers) {
//     if (numbers.length <= 1) return null;
//     let largest = numbers[0], secLargest, hasSecondLargest = false;
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             secLargest = largest;
//             largest = numbers[i];
//             hasSecondLargest = true;
//         } else if (numbers[i] < largest && (!hasSecondLargest || numbers[i] > secLargest)) {
//             secLargest = numbers[i];
//             hasSecondLargest = true;
//         }
//     }
//     return hasSecondLargest ? secLargest : null;
// }


// console.log(secondLargest([5, 1, 5, 3]));             // 3
// console.log(secondLargest([-1, -5, -3]));             // -3
// console.log(secondLargest([4, 4, 4]));                // null
// console.log(secondLargest([1, 2]));                   // 1
// console.log(secondLargest([]));                       // null
// console.log(secondLargest([-10000000000, -20000000000])); // -20000000000
// console.log(secondLargest([5, 5, 3, 3, 1]));          // 3



// Write a function removeDuplicates(numbers) that removes duplicate numbers from an array in place, preserving the order of their first occurrences.
// Return the modified array.
// You must not create another array to store the result.

// function removeDuplicates(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 nums.splice(j--, 1);
//             }
//         }
//     }
//     return nums;
// }

// console.log(removeDuplicates([1, 2, 1, 3, 2, 4])); // [1, 2, 3, 4]
// console.log(removeDuplicates([5, 5, 5, 5])); // [5]
// console.log(removeDuplicates([1, 2, 3])); // [1, 2, 3]
// console.log(removeDuplicates([])); // []
// console.log(removeDuplicates([3, 1, 3, 2, 1])); // [3, 1, 2]

// const numbers = [1, 2, 1, 3, 2, 4];
// const result = removeDuplicates(numbers);
// console.log(numbers);         // [1, 2, 3, 4]
// console.log(numbers === result); // true



// const shared = { score: 2 };

// const records = [
//     shared,
//     { score: 2 },
//     shared
// ];

// function update(list) {
//     for (let i = 0; i < list.length; i++) {
//         list[i].score += i;

//         if (i === 1) {
//             list[i] = { score: 100 };
//         }
//     }

//     list = [{ score: 500 }];
//     list[0].score++;

//     return list;
// }

// const returned = update(records);

// console.log(records[0].score);
// console.log(records[1].score);
// console.log(records[2].score);
// console.log(returned[0].score);
// console.log(records === returned);



// const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         numbers.splice(i, 1);
//     }
// }

// console.log(numbers);
// console.log(numbers.length);



// const values = [10, 20, 30];

// function change(arr, index) {
//     arr[index] = arr[index] + 5;
//     index++;

//     arr = [100, 200, 300];
//     arr[index] = arr[index] + 10;

//     return arr;
// }

// const result = change(values, 1);

// console.log(values[1]);
// console.log(values[2]);
// console.log(result[1]);
// console.log(result[2]);
// console.log(values === result);



// const a = { value: 1 };
// const b = { value: 2 };

// const items = [a, b, a, { value: 1 }];

// for (let i = 0; i < items.length; i++) {
//     items[i].value += i;

//     if (items[i].value > 3) {
//         items.splice(i, 1);
//     }
// }

// console.log(items.length);
// console.log(items[0].value);
// console.log(items[1].value);
// console.log(items[0] === items[1]);
// console.log(a.value);
// console.log(b.value);



// const first = { value: 2 };
// const second = { value: 2 };
// const third = { value: 1 };

// const items = [first, second, first, third];

// function process(arr) {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         arr[i].value += i;
//         total += arr[i].value;

//         if (arr[i].value > 3) {
//             arr.splice(i, 1);
//         }
//     }

//     return total;
// }

// const result = process(items);

// console.log(items.length);
// console.log(items[0].value);
// console.log(items[1].value);
// console.log(first.value);
// console.log(third.value);
// console.log(result);


// const shared = { value: 3 };

// const items = [
//     shared,
//     { value: 2 },
//     shared,
//     { value: 4 }
// ];

// function update(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         arr[i].value += i;

//         if (arr[i].value % 2 === 0) {
//             arr.splice(i, 1);
//             count++;
//         }
//     }

//     arr.push({ value: count });

//     return arr;
// }

// const result = update(items);

// console.log(items.length);
// console.log(items[0].value);
// console.log(items[1].value);
// console.log(shared.value);
// console.log(result === items);
// console.log(result[result.length - 1].value);
// console.log(typeof count);


// function pattern(n) {
//     const arr = [];

//     for (let i = 0; i <= n * 2; i++) {
//         arr[i] = n - Math.abs(n - i);
//     }

//     return arr;
// }

// console.log(pattern(10));


// function pattern(array, n) {
//     const newArray = [];

//     if (array.length === 0) return newArray;

//     let i = 0;
//     let increment = array.length === 1 ? 0 : 1;

//     for (let count = 0; count < n; count++) {
//         newArray.push(array[i]);
//         i += increment;
//         increment = (i === 0 || i >= array.length - 1) ? -increment : increment;
//     }

//     return newArray;
// }

// console.log(pattern([1, 2, 3], 0)) // []
// console.log(pattern([], 3)) // []
// console.log(pattern([5], 4)) // [5, 5, 5, 5]
// console.log(pattern([1, 2, 3, 4, 5, 6], 0)); // []
// console.log(pattern([1, 2, 3, 4, 5, 6], 2)); // [1, 2]
// console.log(pattern([1, 2, 3, 4, 5, 6], 5)); // [1, 2, 3, 4, 5]
// console.log(pattern([1, 2, 3, 4, 5, 6], 6)); // [1, 2, 3, 4, 5, 6]
// console.log(pattern([1, 2, 3, 4, 5, 6], 7)); // [1, 2, 3, 4, 5, 6, 5]
// console.log(pattern([1, 2, 3, 4, 5, 6], 9)); // [1, 2, 3, 4, 5, 6, 5, 4, 3]
// console.log(pattern([1, 2, 3, 4, 5, 6], 12)); // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2]
// console.log(pattern([1, 2, 3, 4, 5, 6], 13)); // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3]
// console.log(pattern([1, 2, 3, 4, 5, 6], 16)); // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
// console.log(pattern([1, 2, 3, 4, 5, 6], 20)); // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2]
// console.log(pattern([1, 2, 3, 4, 5, 6], 25)); // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5]



// Write a function moveZeros(numbers) that moves every 0 to the end of the array while preserving the relative order of all non-zero elements.

// function moveZeros(nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     for (let i = j; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// }

// console.log(moveZeros([])); // []
// console.log(moveZeros([0, 0, 0])); // [0, 0, 0] 
// console.log(moveZeros([0, 0, 1, 2, 3])); // [1, 2, 3] 
// console.log(moveZeros([4, 0, 5, 0, 2])); // [4, 5, 2, 0, 0]
// console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]



// Write a function longestIncreasingSegment(numbers) that returns a new array containing the longest contiguous, strictly increasing segment of the input array.
// A segment must consist of consecutive elements in the original array. You cannot skip elements to make a longer sequence.

// function longestIncreasingSegment(nums) {
//     if (nums.length === 0) return [];

//     let current = [nums[0]];
//     let longest = [nums[0]];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[i - 1]) {
//             current.push(nums[i]);
//         } else {
//             current = [nums[i]];
//         }
//         if (current.length >= longest.length) {
//             longest = current.slice();
//         }
//     }

//     return longest;
// }


// console.log(longestIncreasingSegment([1, 2, 3, 1, 2, 5])); // [1, 2, 5]
// console.log(longestIncreasingSegment([5, 6, 7, 2, 3, 4, 5])); // [2, 3, 4, 5]
// console.log(longestIncreasingSegment([4, 3, 2, 1])); // [4]
// console.log(longestIncreasingSegment([2, 2, 3, 4])); // [2, 3, 4]
// console.log(longestIncreasingSegment([])); // []
// console.log(longestIncreasingSegment([7])); // [7]


// Write a function called findPair(numbers, target) that returns the indices of the first pair of distinct elements whose sum equals target.

// function findPair(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }

// console.log(findPair([2, 7, 11, 15], 9)); // [0, 1]
// console.log(findPair([3, 2, 4], 6)); // [1, 2]
// console.log(findPair([3, 3], 6)); // [0, 1]
// console.log(findPair([1, 2, 3], 10)); // null 
// console.log(findPair([-3, 7, 1, 4], 1)); // [0, 3]
// console.log(findPair([-3, 7, 1, 4], 2)); // null


// Write a function firstUniqueNumber(numbers) that returns the first number that appears exactly once in the array.If every number repeats, return null.

// function firstUniqueNumber(nums) {
//     const obj = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]] === undefined) {
//             obj[nums[i]] = 1;
//         } else {
//             obj[nums[i]]++;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]] === 1) {
//             return nums[i];
//         }
//     }

//     return null;
// }

// console.log(firstUniqueNumber([7, 7, 3, 3, 9])); // 9
// console.log(firstUniqueNumber([4, 5, 1, 2, 1, 4, 5])); // 2 
// console.log(firstUniqueNumber([1, 2, 3])); // 1
// console.log(firstUniqueNumber([5, 5, 5])); // null
// console.log(firstUniqueNumber([])); // null
// console.log(firstUniqueNumber([0, -1, 0, -1, 8])); // 8



// Write a function longestRun(numbers) that returns an array containing the number that appears in the longest consecutive run, repeated for the length of that run. A run ends when the next number differs from the current number.

// function longestRun(nums) {
//     let curr = 1, max = 1, num = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         curr = nums[i] === nums[i - 1] ? curr + 1 : 1;

//         if (curr > max) {
//             max = curr;
//             num = nums[i];
//         }
//     }

//     const result = []
//     for (let i = 0; i < max && nums.length; i++) {
//         result.push(num)
//     }

//     return result;
// }

// console.log(longestRun([])); // []
// console.log(longestRun([1, 1, 2])); // [1, 1]
// console.log(longestRun([1, 2, 2])); // [2, 2]
// console.log(longestRun([1, 1, 2, 2])); // [1, 1]
// console.log(longestRun([1, 2, 2, 3, 3, 3])); // [3, 3, 3]
// console.log(longestRun([4, 4, 1, 1, 1])); // [1, 1, 1]
// console.log(longestRun([5, 5, 5, 2, 2, 2])); // [5, 5, 5]
// console.log(longestRun([1, 1, 2, 2, 2, 1, 1, 1])); // [2,2,2]
// console.log(longestRun([1, 1, 2, 2, 2, 3, 3])); // [2, 2, 2]
// console.log(longestRun([4, 4, 4, 1, 1, 2])); // [4, 4, 4]
// console.log(longestRun([1, 2, 3, 3, 3, 3, 2])); // [3, 3, 3, 3]
// console.log(longestRun([5, 5, 1, 1])); // [5, 5]
// console.log(longestRun([7])); // [7]
// console.log(longestRun([])); // []



// Write a function rotateRight(nums, k) that rotates an array to the right by k positions, modifying the original array.

// function reversePart(start, end, nums) {
//     while (start < end) {
//         const temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     };
// }

// function rotateRight(nums, k) {
//     const n = nums.length;
//     if (n <= 1 || k === 0) return nums;

//     k = k % n;

//     nums.reverse();
//     reversePart(0, k - 1, nums);
//     reversePart(k, n - 1, nums);

//     return nums;
// }

// function rotateRight(nums, k) {
//     const n = nums.length;
//     if (n <= 1 || k === 0) return nums;

//     k = k % n;

//     for (let i = 0; i < k; i++) {
//         const last = nums[n - 1];
//         for (let j = n - 1; j > 0; j--) {
//             nums[j] = nums[j - 1];
//         }
//         nums[0] = last;
//     }

//     return nums;
// }


// console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// console.log(rotateRight([1, 2, 3], 1)); // [3, 1, 2]
// console.log(rotateRight([1, 2, 3], 3)); // [1, 2, 3]
// console.log(rotateRight([1, 2, 3], 4)); // [3, 1, 2]
// console.log(rotateRight([1, 2], 1)); // [2, 1]
// console.log(rotateRight([], 3)); // []
// console.log(rotateRight([7], 10)); // [7]



// Write a function mergeSortedArrays(first, second) that returns a new sorted array containing all elements from both input arrays. Both input arrays are already sorted in ascending order.


// function mergeSortedArrays(arr1, arr2) {
//     const result = [];
//     let i = 0, j = 0, k = 0;

//     while (i < arr1.length && j < arr2.length) {
//         result[k++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++];
//     }
//     while (i < arr1.length) {
//         result[k++] = arr1[i++];
//     }
//     while (j < arr2.length) {
//         result[k++] = arr2[j++];
//     }

//     return result;
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays([1, 2, 2], [2, 3, 4])); // [1, 2, 2, 2, 3, 4]
// console.log(mergeSortedArrays([], [1, 2])); // [1, 2]
// console.log(mergeSortedArrays([], [])); // []
// console.log(mergeSortedArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
// console.log(mergeSortedArrays([3, 4], [1, 2])); // [1, 2, 3, 4]
// console.log(mergeSortedArrays([-5, -1, 4], [-3, 0, 6])); // [-5, -3, -1, 0, 4, 6]



// Write a function findMissingNumber(numbers).
// You are given an array containing distinct integers from 0 through n, with exactly one number missing. The array has n elements.
// Return the missing number.


function findMissingNumber(nums) {
    let sumOfArrayElements = 0;
    let sumOfNaturalNums = 0;

    for (let i = 0; i < nums.length; i++) {
        sumOfArrayElements += nums[i];
        sumOfNaturalNums += i + 1;
    }

    return sumOfNaturalNums - sumOfArrayElements;
}

console.log(findMissingNumber([3, 0, 1])); // 2
console.log(findMissingNumber([0, 1])); // 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(findMissingNumber([1])); // 0
console.log(findMissingNumber([])); // 0