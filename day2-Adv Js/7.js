// scope
//where to look for things

x = 42;
console.log(x); //42

//**************/ */
var teacher = 'tom';

function otherClass() {
	teacher = 'plant';
	console.log('welcome !');
}

function ask() {
	var question = 'Why ?';
	console.log(question);
}

otherClass();
ask();

///////////***************/ */

var teacher = 'tom';

function otherClass() {
	teacher = 'plant';
	topic = 'react';
	console.log('welcome !');
}
otherClass();
teacher;
topic;
///*********************** */
function foo(a) {
	console.log(a);
}

foo(2); // 2

// example 2
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo(2);

//****************** */
('use strict');
var teacher = 'tom';

function otherClass() {
	var teacher = 'plant';
	var topic = 'react';
	console.log('welcome !');
}
otherClass();

//****************** */

var teacher = 'tom';

function otherClass() {
	teacher = 'plant';
	function ask(question) {
		console.log(teacher, question);
	}
	ask('Why?');
}

// otherClass();
ask('???'); // reference error

//********lexical scope**************** */

//function declaration
function teacher() {
	/** */
}

//function expression
var myTeacher = function anotherTeacher() {
	console.log(anotherTeacher);
};

console.log(teacher);
console.log(myTeacher);
// console.log(anotherTeacher)

///
function foo(a) {
	var b = a * 2;

	function bar(c) {
		console.log(a, b, c);
	}

	bar(b * 3);
}

foo(2);

//****/ */
function foo(a) {
	let b = a * 2;

	function bar(c) {
		console.log(a, b, c);
	}

	bar(b * 3);
}

foo(2);

/////////////////////////////////

// short hand property
var obj = {
	a: 1,
	b: 2,
	c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
//with (obj) {
// 	a = 3;
// 	b = 4;
// 	c = 5;
// }
//***************************************** */
// function foo(obj) {
// 	with (obj) {
// 		a = 2;

// 	}
// }
var o1 = {
	a: 3
};
var o2 = {
	b: 3
};
foo(o1);
console.log('from o1', o1.a);
foo(o2);
console.log('from o2', o2.a);

// console.log( a );

////**************************************** */

// ****** Named Function Expression********//

//anon function expreesion
var clickHandler = function() {
	//
};

var keyHandler = function keyHandler() {
	//
};

// self-reference
//more debuggable stack trace
//more self-documenting code

// precedence
//(Named) function declaration
// >
// Named function expression
// >
//Annonymous funciton expression

// dynamic scope
var teacher = 'tom';
function otherClass() {
	var teacher = 'plant';

	function ask(question) {
		console.log(teacher, question);
	}
	ask('why?');
}

// ******************//
// Function Scoping
var teacher = 'tom';
var teacher = 'plant';
console.log('teacher'); /// plant

console.log('teacher'); // plant
///********** */
var teacher = 'tom';
function anotherTeacher() {
	var teacher = 'plant';
	console.log(teacher);
}
anotherTeacher();
console.log(teacher);
////////****************** */
var teacher = 'tom';
function anotherTeacher() {
	var teacher = 'plant';
	console.log(teacher);
}
anotherTeacher();
console.log(teacher);

/////////*************** */
// fucntion scoping
var teacher = 'tom';
(function anotherTeacher() {
	var teacher = 'plant';
	console.log(teacher);
})();
console.log(teacher);

//****************** */
var teacher = 'tom';
(function anotherTeacher(teacher) {
	console.log(teacher);
})('plant');
console.log(teacher);
///****************** */

// var teacher
// try {

// }
// catch{

// }

///********** */

///************* */
var a = 2;

function foo() {
	//<

	var a = 3;
	console.log(a);
} // <-- and this
foo(); // <-- and this

console.log(a);

///*********************** */

var a = 2;

(function foo() {
	var a = 3;
	console.log(a);
})();

console.log(a);

////////////////******************* */
// Blocks As Scopes
for (var i = 0; i < 10; i++) {
	console.log(i);
}
/////////////******************** */
var teacher = 'tom';
{
	let teacher = 'plant';
	console.log(teacher);
}
console.log(teacher);

//**************** */
function diff(x, y) {
	if (x > y) {
		var tmp = x;
		x = y;
		y = tmp;
	}
	return y - x;
}

/////*************** */
function diff(x, y) {
	if (x > y) {
		let tmp = x;
		x = y;
		y = tmp;
	}
	return y - x;
}

///////////********var****** */

function repeat(fn, fn) {
	var result;
	for (var i = 0; i < n; i++) {
		result = fn(result, i);
	}
	return result;
}

//////////////************* */
// let + var
function repeat(fn, n) {
	var result;
	for (let i = 0; i < n; i++) {
		result = fn(result, i);
	}
	return result;
}

/////////////////
// const
var teacher = 'tom';
teacher = 'plant';

const otherteacher = teacher;
// otherteacher = 'smacky' // errror

const allTeachers = [ 'tom', 'plant' ];
allTeachers[1] = 'smacky ';

///////////************************ */
// var exammples
var greeter = 'hey hi';
var times = 4;

if (times > 3) {
	var greeter = 'say Hello instead';
}

console.log(greeter);

//////*********************************let */
let greeting = 'say Hi';
let times = 4;

if (times > 3) {
	let hello = 'say Hello instead';
	console.log(hello);
}
console.log(hello);

//////**************************** */

const greeting = 'say Hi';
greeting = 'say Hello instead'; /// cannot reassign

//example 2
const greeting = 'say Hi';
const greeting = 'say Hello instead';

/////*************************************** */

// Hoisting

// student
// teacher
var student = 'tom ';
var teacher = 'plant ';

var student;
var teacher;

student;
teacher;

var topLevelVar = "Since this variable was declared outside of a function, it'll go on the global scope.";
function topLevelFn() {
	var localVar = "This variable should be local to topLevelFn's scope";
	function nestedFn() {
		var anotherLocalVar = "Local to nestedFn's scope.";
		var access =
			'Because of the scope chain, in this function we still have access to any of the variable declared in topLevelFn or the global scope.';

		console.log(localVar);
		console.log(topLevelVar); //379
	}

	nestedFn();
}
var fnExpression = function() {
	var hoisted =
		"Did you notice that fnExpression is a function expression? It's declaration is hoisted and set to undefined in the 'creation' phase.";
};

fnExpression();
topLevelFn();
