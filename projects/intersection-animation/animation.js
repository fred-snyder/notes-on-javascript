// create array with all the data-anim elements
let animElements = [...document.querySelectorAll(`[data-anim='fade-in']`)];
// querySelectorAll returns all the elements (instead of the first)

// returns a 2 decimal random float between min and min+max
function genRandFloat(min, max) {
	let mult = max - min;
	return Math.round((Math.random() * mult + min) * 100) / 100;
}

const options = {
	root: null, // null targets the viewport
	threshold: 0, // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds
	rootMargin: '-200px 0px', // incase root is null rootMargin is the viewport margin
	// needs px or % as unit (0 without the unit does not work)
};

const observer = new IntersectionObserver((entries, observer) => {
	// the callback receives two parameters: the intersection entries, and the observer itself
	entries.forEach((e) => {
		// the observer fires on page load. // so add a condition for the logic
		if (e.isIntersecting) {
			addAnimClasses(e.target); // entries[i].target is the intersected element
			observer.unobserve(e.target); // stop observing the element
		}
	});
}, options);

// function that adds animation classes to an element
// set random to true for randomness in the animation
function addAnimClasses(el, random) {
	let rDelay, rDur, rTransform;

	if (random) {
		// randomness in the delay and the animation-duration
		rDelay = genRandFloat(0, 1); // between 0 and 1
		rDur = genRandFloat(1, 2); // between 1 and 2
		rTransform = genRandFloat(20, 40); // between 20 and 40
	} else {
		[rDelay, rDur, rTransform] = [0, 1, 20]; // destructuring assignment
	}

	// add CSS classes
	el.classList.add('animated', 'fadeInUp');
	el.style.transform = `translate3d(0,${rTransform}px,0)`;
	el.style.animationDelay = rDelay + 's';
	el.style.animationDuration = rDur + 's';
}

// observer.observe() every animation element;
animElements.forEach((el) => {
	el.classList.add('animatedOpacity'); // set opacity for all elements
	observer.observe(el);
});
