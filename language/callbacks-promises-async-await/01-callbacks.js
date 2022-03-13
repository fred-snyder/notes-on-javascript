// callbacks

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

// create another function to takes a little longer to finish
function createPost(post) {
	setTimeout(() => {
		posts.push(post);
	}, 3000);
}

// call those functions
createPost({ title: 'Post three', body: 'Bonjour' });
console.log('Output something to the console');
getPosts();

// update the function with a callback parameter
function createPostCB(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 3000);
}

// In this example we say:
// if we have a function that depends on another function,
// then we have to pass that function as a parameter
// and call that function at the end of the execution.
// That makes sure the function that depends on that other function
// doesn't execute before the other function has finished.

// Because that means we potentially have to nest lots
// of functions in parent functions ("callback-hell")
// Javascript ES6 implemented an easier solution called: "promises"

// now call that updated function
// this function now "awaits" the other function's execution
createPostCB({ title: 'Post four', body: 'Goedemorgen!' }, getPosts); // add the callback function
