// array destructuring
let widgets = [ 'widget1', 'widget2', 'widget3', 'widget4', 'widget5', 'widget6' ];

let [ a, ...b ] = widgets;

console.log(a); // widget1
console.log(b); //widget2

console.log(c); //  'widget3','widget4' ,'widget5', 'widget6'

//object destructuring

let toyBox = { item1: 'car', item2: 'ball', item3: 'bat' };

console.log(toyBox.item1, toyBox.item2);
let { item1, item2 } = toyBox;
let { item3: disc } = toyBox;

console.log(item1, item2); //car , ball
console.log(disc); // bat

let greeting = 'say Hi';
let times = 4;

if (times > 3) {
	let hello = 'say Hello instead';
	console.log(hello); //say hello instead
}
console.log(hello); //undefined

const greeting = 'say Hi';
greeting = 'say Hello instead'; //refence error

//
const greeting = 'say Hi';
const greeting = 'say Hello instead';

//
