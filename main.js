var elem = document.getElementById("contact");
elem.innerHTML = "Hello World!";

document.write("<h1>Hello World!</h1>");

//example of switch
var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}
// this an example of if else statements
var course = 3;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
    alert("JavaScript is easy to learn.");
}
else {
    alert("I will master JavaScript")
}
// for loops examples
for (i=1, text=""; i<=5; i++) {
    text = i;
    document.write(i + "<br />");
}
var i = 1;
for (; i<=5; i++) {
    document.write(i + "<br />");
}
for (i=1; i<=5; i++) {
    document.write(i + "<br />");
}
//example of a while loop
var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}
//the do while loop example
var i=20;
do {  
    document.write(i + "<br />");
    i++;  
}
while (i<=25); 
//executing the break statement
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break; 
    }
    document.write(i + "<br />");
}
//the continue statement
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}
//calling a function
function myFunction() {
    alert("Calling a Function!");
}

myFunction();
function myFunction() {
    alert("Alert box!");
}

myFunction();

// some other code

myFunction();

function sayHello(name) {
    alert("Hi, " + name);
}

sayHello("David");

//passing diff parameter values in a function 
function sayHello(name) {
    alert("Hi, " + name);
}
sayHello("David");
sayHello("Sarah");
sayHello("John");

//Multiple Parameters

function test(x, y) {
  if(x>y) {
    document.write(x);
  }
  else {
    document.write(y);
  }
}
test(5, 8);

function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
}

sayHello("John", 20)

//return statement
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(5, 6); 
document.write(x);

function addNumbers(a, b) {
    var c = a+b;
    return c;
}
document.write( addNumbers(40, 2) );

/* Alert box
with a line break*/
alert("Hello\nHow are you?");

//A Prompt Box
var user = prompt("Please enter your name");
alert(user);

//Confirm Box
var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}

// Object property
var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
};
var x = person.age;
var y = person['age'];

document.write(x);
document.write(y);

//creating an object constructor
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); 
document.write(p2.name);

/*Access the object's properties 
by using the dot syntax, as shown below*/
function person (name, age) {
    this.name = name;
    this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);

document.write(James.age);

var John = {
    name: "John",
    age: 25
};
var James = {
    name: "James",
    age: 21
};

document.write(John.age);
document.write(James['age'])

//Methods
function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);

//Call the method by the property name 
unction person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}

var p = new person("A", 22);

document.write(p.yearOfBirth());

//Array
var courses = new Array("HTML ", "CSS ", "JS "); 
document.write(courses[0]);
document.write(courses[1]);
document.write(courses[2]);
document.write(courses[3]);

ar courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

document.write(courses[2]);

//Arrays are dynamic
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

document.write(courses[2]);

//combining the contact() method
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

document.write(courses[2]);

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);

//Math object method 
document.write(Math.PI);

var number = Math.sqrt(4); 
document.write(number);

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

//the setInterval method
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

//working with dates
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

document.write(d3);

//functions to perform operation 
var d = new Date();
var hours = d.getHours();

document.write(hours);
//prints currunt date
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

// examples of working with DOM
 var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var el = document.getElementsByTagName('a');
    el[0].href= 'http://www.sololearn.com';
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.removeChild(child);
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);
};

//Animations 
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};

/* Events Handling
it will be refered to the HTML 
*/
function show() {
    alert("Hi there");
}

//Event handlers can be assigned to elements.

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};

// The onchange event loader, onchange will be attached to the html as an attribute e.g
<input type="text" id="name" onchange="change()">

function change() {
    var x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}

// adding and removing EventListeners
// the html <button id="demo">Start</button>


//calling the function in window.onload to make sure the HTML is loaded

window.onload = function() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert(Math.random());
        btn.removeEventListener("click", myFunction);
    }
};

//Image Slider
/* the html <div>
            <button onclick="prev()"> Prev </button>
            <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" width="200px" height="100px"/>
            <button onclick="next()"> Next </button>
        </div */
// the css property 
/*button {
    margin-top:30px;
    float:left;
    height:50px;
}
img {
    float:left;
    margin-right:10px;
    margin-left:10px;
} */
var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

// form validation

/* the html <form onsubmit="return validate()" method="post">
    Number: <input type="text" name="num1" id="num1" /><br />
    Repeat: <input type="text" name="num2" id="num2" /><br />
    <input type="submit" value="Submit" />
</form>
*/
function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if(n1.value != '' && n2.value != '') {
        if(n1.value == n2.value) {
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}

// ECMAScript
//var & let uses
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

varTest();
letTest();

for (let i = 0; i < 3; i++) {
    document.write(i);
}

//Template Literals in ES6
let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);


let name = 'David';
let msg = 'Welcome ' + name + '!';
console.log(msg);

//the above code can work like this 
let name = 'David';
let msg = `Welcome ${name}!`;
console.log(msg);

//for...in loop
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v);
}

//for...of loop
let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}

for (let ch of "Hello") {
    console.log(ch);
}

//Functions in ECMAScript 6
function add(x, y) {
    var sum = x+y;  
    console.log(sum);
}
add(35, 7);

const add = (x, y) => {
    let sum = x + y;  
    console.log(sum);
}
add(35, 7);

//
const greet = x => "Welcome " + x;

alert(greet("David"));

const x = () => alert("Hi");
x();

//
var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
    console.log(el * 2);
});

//
const arr = [2, 3, 7, 8];

arr.forEach(v => {
    console.log(v * 2);
});

//default parameters 
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5));

// Full ES6 equivalent
const test = (a, b = 3, c = 42) => a + b + c;
console.log(test(5));

//ES6 Objects
let tree = {
    height: 10,
    color: 'green',
    grow() { 
        this.height += 2;
    }
};

tree.grow();
console.log(tree.height); // 12

let height = 5;
let health = 100;

let athlete = {
    height, // height: height,
    health // health: health
};

console.log(athlete.height); // 5

var a = {x: 1, x: 2, x: 3, x: 4};
console.log(a.x); // 4

//Computed Property Names
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};

console.log(user.name); // Jack
console.log(user.user_1234); // 08923

// 2nd example
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

// 3rd example
var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4

// Object.assign() in ES6
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2

let person = {
    name: 'Jack',
    age: 18
};

let newPerson = person;
newPerson.name = 'Bob';

console.log(person.name); // Bob
console.log(newPerson.name); // Bob

let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';

console.log(person.name); // Jack
console.log(newPerson.name); // Bob

let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});

console.log(newPerson.name); // Bob

//Array Destructuring in ES6
let arr = ['1', '2', '3'];

let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

//
let a = () => {
    return [1, 3, 2];
};

let [one, , two] = a();

console.log(one); // 1
console.log(two); // 2

//
let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a); // 2
console.log(b); // 6

[c, d] = [d, c];
console.log(c); // 8
console.log(d); // 4


//Object Destructuring in ES6
let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h);
console.log(s);

//
let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b);

//
let {a, b} = {a: 'Hello ', b: 'Jack'};

console.log(a + b);

//
var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20

//ES6 Rest Parameters
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

//
function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

//The Spread Operator
const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);

//
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge (obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge ({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }


//Classes in ES6
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 

console.log(square.height);

// named classes
var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new Square(5, 5);
const poster = new Square(2, 3); 

console.log(square.height);

//unnamed class
var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new Square(5, 5);
const poster = new Square(2, 3); 

console.log(square.height);

//Class Methods in ES6
// Prototype method
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(5, 5);

console.log(square.area); // 25

//static method
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));


//Inheritance in ES6
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.

//using super() keyword
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Super
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak();
// Rex makes a noise.
// Rex barks.


//ES6 Map
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

//Map Methods
let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);

//
const map = new Map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
  console.log('two');
} else {
  console.log(map.get('one'));
}

//set keyword
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5

let set = new Set();
set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
    console.log(v);

//
const set = new Set();

    set.add(1).add(2).add(3);
    for(let v of set.values())

console.log(v);


//ES6 Promises
setTimeout(function() {
    console.log("Work 1");
    setTimeout(function() {
        console.log("Work 2");
    }, 1000);
}, 1000);
console.log("End");

//
new Promise(function(resolve, reject) {
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
}); 

//
function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");

//Iterators & Generators
let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
  }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]

//Gen function in use
function* idMaker() {
  let index = 0;
  while (index < 5)
    yield index++;
}
var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// Try to add one more console.log, just like the above see what happens.


//using generator functions and Symbol.iterators together.
const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);


//using modules to import or export. e.g
export const hit = (x, y, z) => {
  return x * y + z / 2;
}
export const degree = 50;

import*as calc from "util/calc";
calc.hit(1, 2, calc.degree);

//a constant and arrow function
 const num = 5;
const calc = (x, y, z = num) => {
  return x + y + z;
}


let myMap = new Map();
myMap.set('zero', 0);
myMap.set('one', 1);
for(let [key,value] of myMap){console.log(`${key}=${value}`);}


	function Akpos(num1, num2){

                 if(num1==num2)
                 {
                     console.log("They are both equal to ")
                 }else if (num1 > num2)
                 {
                    console.log("Num1 is greater than number 2")
                 }
                 else if(num1 < num2)
                     {
                         console.log("Num2 is greater than number 1")
                     }
                }

  //Built-in Objects
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


// the let keyword
let changeMe = true
changeMe = false
console.log(changeMe);


//Mathematical Assignment Operators
let levelUp = 10;
levelUp += 5;
let powerLevel = 9001;
powerLevel -= 100;
let multiplyMe = 32;
multiplyMe *= 11;
let quarterMe = 1152;
quarterMe /= 4

//The Increment and Decrement Operator
let gainedDollar = 3;
gainedDollar++;
let lostDollar = 50;
lostDollar--;


/* String Interpolation
using template literals */
let myName = "Akpos";
let myCity = "Asaba";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1
console.log(typeof newVariable);

//short circuit evaluation
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary Operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//functions
function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas Tardes.');
}

// Calling functions
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();


function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');

//Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList()
makeShoppingList()
makeShoppingList()

//return key word
function monitorCount(rows, columns) {
return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);


//Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
 return  monitorCount(rows, columns) * 200
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

//Function Expressions
const plantNeedsWater = function(day) {
if (day === 'Wednesday')
  return true
else
  return false
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'))

//Arrow functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Concise Body Arrow Functions
const plantNeedsWater = day => day === 'Wednesday' ? true : false;