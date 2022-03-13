// create an object property with defineProperty()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

var project = {
	_employee: 'empty', // the underscore field is used by a getter/setter property
	hours: 100,
	logHours: function () {
		console.log('Current amount of hours:', this.hours);
	},
	removeHours: function (time) {
		this.hours -= time;
		this.logHours();
	},
	setEmployee: function (employee) {
		this._employee = employee;
	},
};
project.removeHours(10);

// ! add a new property with the defineProperty() method
Object.defineProperty(project, 'addHours', {
	value: function (time) {
		this.hours += time;
		this.logHours();
	},
});
project.addHours(20);

// ! propertyDescriptor attributes
Object.defineProperty(project, 'name', {
	value: 'website',
	writable: false,
	enumerable: true, // loop over object fields
});

project.name = 'app';
console.log(project.name); // outputs website // because the property is not writable

// ! get/set propertyDescriptor attribute
Object.defineProperty(project, 'employee', {
	get: function () {
		return this._employee;
	},
	set: function (employee) {
		console.log(typeof employee);

		console.log(employee.length); // BUG // doesn't work

		if (employee.length >= 3) {
			// only set name on certain conditions
			this._employee = employee;
			return 'fire';
		}
	},
	// set: function(employee) {
	//     this._employee = employee
	// }
});

// ! another way to create getter and setters
var someObj = {
	name: 'empty',
	get foo() {
		return this.name;
	},
	set bar(string) {
		this.name = string;
	},
};

// ! A frozen object can no longer be changed
// Object.freeze(project)

console.log(project.employee); // empty

// assign a value to the employee field directly on the object
project._employee = 'Freddy';
console.log(project._employee); // Freddy

// assign a value using the geter/setter attribute
project.employee = 'David';
console.log(project.employee); // David
console.log(project._employee); // David

// ! interface propertyDescriptor attributes
/*
configurable?: boolean;
enumerable?: boolean;
value?: any;
writable?: boolean;
get?(): any;
set?(v: any): void;
*/
