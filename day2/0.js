// primitive type

var x = 40;
x++;
x;

++x;
x;

x = x + 1;

// ************************
var x = '5';
x = x + 1;

var y = '5';

y++;

//************************** */

var x = '5';

x = x + 1;

//***************************** */
// https://www.ecma-international.org/ecma-262/6.0/#sec-postfix-increment-operator
// 1. let lhs
// 2.let old value be ?
// ToNumber(lhs)
// 3.let newvalue be the result of adding the value 1 to oldvalue
// 4 . perform
// 5 . return the old value

//  *******************
function plusPlus(orig_x) {
	var orig_x_corerced = Number(orig_x);
	x = orig_x_corerced + 1;
	return orig_x_corerced;
}

//****************************** */
// Types
// 1. Primitive Types
// 2.Coercion
// 3.Equlity

// ********************/
// undefined
// String
// Number
// boolean
// Object
// Symbol
// undeclared
// null
// function
// array

// *********************************/
// var v
// typeof v

// v = '1'
//stir

// var 2
//number

// v = true
//boolean
// v = {}
//object

// typeof doesnotExist

// var v = null

// v = function(){

// }

// v = [1,2,3]

// *********************************************

// NAn  -- not

//*************************objects */
var obj = {
	a: 'hello world',
	b: 42,
	c: true
};

obj.a; //hello
obj.b; // 42
obj.c; //true

obj['a'];
obj['b'];
obj['c'];

//////////////************arrays */
var arr = [ 'hello world', 42, true ];

arr[0]; //hello
arr[1];
42;
42;
arr[2];
true;
arr.length;
3;

typeof arr; //object

//***********function */
function foo() {
	return 42;
}

foo.bar = 'hello world';

typeof foo;
typeof foo();
typeof foo.bar;

//********************** */
