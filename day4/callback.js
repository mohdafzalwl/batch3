const button = document.getElementById('callback');

button.onclick = function() {
	alert('button clicked');
};

//promise example//pending
//.then
//.catch
//resolve
//reject
var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		// resolve('demo promise');
		reject('400');
	}, 1000);
});

var promise = document.getElementById('promise');
promise.onclick = function() {
	promise1.then(function(value) {
		alert('From promise ' + value);
	});
	promise1.catch(function(err) {
		alert('From promise Error ' + err);
	});
};

var async = document.getElementById('async-await');

async function f() {
	let promise = new Promise(function(resolve, reject) {
		setTimeout(() => resolve('resolve from async'), 1000);
	});
	// console.log(promise);
	//till line 32-34 finishes execution
	let result = await promise;
	alert(result);
}

async.onclick = () => f();
