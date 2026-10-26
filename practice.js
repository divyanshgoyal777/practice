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

