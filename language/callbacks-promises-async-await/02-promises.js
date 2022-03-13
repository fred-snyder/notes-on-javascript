// promises
// introduced in ES6/ES2015

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// From Mozilla
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// So that asynchronous operation promises that it will return information.
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
// So it's a sort of reverse callback. Instead of giving a function some logic to complete after the asynchronous operation.
// You just get a "promise" as a return value. And you can attach new logic to that promise.

// A promise is a container for a future value.

const posts = [
	{ title: 'Post one', body: 'Hi there' },
	{ title: 'Post two', body: 'Hello world' },
];

// create a function that takes some time to finish
function getPosts() {
	setTimeout(() => {
		let output = [];
		posts.forEach((e) => {
			output.push(`<h1>${e.title}</h1>`);
		});
		output.forEach((e) => {
			console.log(e);
		});
	}, 2000);
}

function createPost(post) {
	// instead of using a callback return a promise
	// the promise can contain some error checking logic
	return new Promise((resolve, reject) => {
		// the executor is called by new Promise
		// you can name the executor parameters resolve/reject anything you want
		setTimeout(() => {
			posts.push(post);

			console.log('Test1');

			// error checking
			// or use a global error checking function/class
			const error = false;

			if (!error) {
				// a succesfull promise: call resolve
				resolve('Done'); // optionally add some console output
			} else {
				// an error or issue: call reject
				reject('Failed');
			}
		}, 3000);

		// will be executed before "Test1"
		console.log('Test2');
	});

	// from the Type docs
	// var Promise: PromiseConstructor new <T>(
	//              executor: (
	//                      resolve: (value: T | PromiseLike<T>) => void,
	//                      reject: (reason?: any) => void
	//                  ) => void
	//              ) => Promise<T> interface Promise<T>
}

//.then()

function createPostError(errorMessage) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// catch errors with .catch("Error")
			reject(errorMessage);
		}, 2000);
	});
}

createPost({ title: 'Post three', body: 'Goedemorgen!' }).then(getPosts);
// this syntax doesnt work: .then( functionCall() )
// pass the function as an argument to .then()
// createPost({ title: 'Post three', body: 'Goedemorgen!' }).then(getPosts());

createPostError('Error example').catch((err) => console.log('Error createPostError()'));
// createPostError('Error example').catch();
// above syntax not allowed by Node
// pass an anonymous function that handles the error

const promise1 = Promise.resolve();
const promise2 = Promise.resolve('Promise 2');
const promise3 = new Promise((resolve, reject) => {
	resolve('Promise 3');
});
const promise4 = new Promise((res, rej) => {
	reject('Promise 4');
});

// Promise.all waits until all promises are resolved or rejected
// takes an array of promises
Promise.all([promise1, promise2, promise3]).then(console.log('Promise.all'));
Promise.all([promise1, promise2, promise3]).then((val) => {
	// or pass an anonymous function and console.log all the promises
	val.forEach((e) => {
		console.log(e.text());
	});
});

// also setup .catch() logic for error handling
Promise.all([
	promise1,
	promise2,
	promise3,
	promise4.catch((err) => {
		console.log('Err: promise 4');
	}),
]);

// or catch all the error
Promise.all([promise1, promise2, promise3, promise4]).catch((err) => {
	console.log('Err: one or more of the promises has an error');
});

// .finally
// https://javascript.info/promise-basics#finally
