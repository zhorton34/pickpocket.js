[![npm version](https://img.shields.io/npm/v/pickpocket.js.svg?style=flat-square)](http://badge.fury.io/js/pickpocket.js)
[![npm license](https://img.shields.io/npm/l/pickpocket.js.svg?style=flat-square)](http://badge.fury.io/js/pickpocket.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/zhorton34/pickpocket.js/blob/master/package.json)


# Pickpocket.js
> `Simplification at its finest` 
- Zero Non Dev Dependencies
- Syntactically Pleasing
- Extremely Lightweight
- Simply Enjoyable
- Minimalistic 
- Simplified
- Tested

### Installation

#### NPM

```bash
npm install --save-dev pickpocket.js
```

#### Yarn

```bash
yarn add pickpocket.js --save
```


# Pick Pocket Api
> `Simplified Wrapper Around Common Data Structure`

- [any()](#any)
- [all()](#all)
- [list()](#list)
- [set(data)](#set)
- [forget()](#forget)
- [has(field)](#has)
- [get(field)](#get)
- [list(field)](#list-field)
- [add(field, item)](#add)
- [set(field, item)](#set-field)
- [forget(field)](#forget-field)



### Any
> `Determine if there are "any" items in pocket`
```js
const pocket = pickpocket({
	name: ['name is a required', 'name must be a string'],
	email: ['email is a required field', 'email must be an email']
});


pocket.any();
```
```
true
```

### All
> `Retrieve all data within pocket`
```js
const pocket = pickpocket({
	name: ['name is a required', 'name must be a string'],
	email: ['email is a required field', 'email must be an email']
});


pocket.all();
```
```
{
	name: ['name is a required', 'name must be a string'],
	email: ['email is a required field', 'email must be an email']
}
```

```js
let data = { name: '', email: '' };
let rules = { name: 'required', email: 'email|required' };
let validation = validator(data, rules).validate();

validation.errors().all();
```

### List
> `Flat list of all pocket field items`

```js
const pocket = pickpocket({
	name: ['name is a required', 'name must be a string'],
	email: ['email is a required field', 'email must be an email']
});


pocket.list();
```
```
[
	'name is a required', 
	'name must be a string', 
	'email must be an email',
	'email is a required field', 	
]
```



### Set
> `Set entirety of pocket data`
```js
const pocket = pickpocket({
	name: ['name is a required', 'name must be a string'],
	email: ['email is a required field', 'email must be an email']
});

pocket.set({
	name: ['eyy'],
	something: ['ohh']
});
```


### Forget
> `Forget all pocket data`
```js
const pocket = pickpocket({
	name: ['name is a required', 'name must be a string'],
	email: ['email is a required field', 'email must be an email']
});

pocket.forget();
pocket.all(); // {}
```

### Has
> `Determine if specified field "has" items`
```js
const pocket = pickpocket({
	tag: [],
	name: [],
	email: ['email is a required', 'email must be an email'],
});


pocket.has('tag'); // false
pocket.has('name'); // false
pocket.has('email'); // true
pocket.has('something_else'); // false
```

### Get
> `Get _first_ item from specific field`
```js
const pocket = pickpocket({
	tag: [],
	name: [],
	email: ['email is a required', 'email must be an email'],
});
pocket.get('email');
```

### List Field
> `List items for specific field`
```js
const pocket = pickpocket({
	tag: [],
	name: [],
	email: ['email is a required', 'email must be an email'],
});
pocket.list('email');
```
```
['email is a required', 'email must be an email']
```


### Add
> `Add item to specific field`
```js
const pocket = pickpocket({
	tag: [],
	name: [],
	email: ['email is a required', 'email must be an email'],
});

pocket.add('tag', 'simplified');
pocket.list('tag'); // ['simplified'];

pocket.add('email', 'extrafied');
pocket.list('email'); // ['email is a required', 'email must be an email', 'extrafied']
```



### Set Field
> `Set specified field items`
```js
const pocket = pickpocket({
	tag: [],
	name: [],
	email: ['email is a required', 'email must be an email'],
});

pocket.set('email', ['set', 'email', 'items', 'list']);

pocket.list('email');
```
```
['set', 'email', 'items', 'list']
```


### Forget Field
> `Forget items on the specified field`
```js
const pocket = pickpocket({
	tag: [],
	name: [],
	email: ['email is a required', 'email must be an email'],
});

pocket.forget('email');

pocket.list('email');
```
```
[]
```







# Utilization

### Pickpocket.js (Simplified)


#### Example One: Form Error Messages (Organized Per Field)
> `Common Example`
```js

const pickpocket = require('pickpocket.js');

const errors = pickpocket({
	name: ['name is required', 'name is not a string', 'name needs to be cool'],
	email: ['email field must be an email']
});

// errors.all()
// errors.list()
// errors.any()
// errors.add('name', 'message')
// errors.list('email')
// errors.has(field)
// errors.set({})
// errors.set('email', [])
// errors.forget()
// errors.forget('email')
// etc...
```


#### Example Two: Human Life Cycle (Organized By Life Moments: Life Moments Have Callback Functions)
> `Advanced example`

```js

const pickpocket = require('pickpocket.js');

const life = pickpocket({
	before: [
		firstBeforeMomentCallback, 
		secondBeforeMomentCallback, 
		thirdBeforeMomentCallback
	],
	passed: [
		firstPassedMomentCallback, 
		secondPassedMomentCallback
	],
	failed: [
		firstFailedMomentCallback
	],
	after: [
		firstAfterMomentCallback, 
		secondAfterMomentCallback
	],
});

life.eventful = (human = {}, moment) => {
	if (life.has(moment)) {
		this.list(moment).forEach(event => event(human));

		life.forget(moment);
	}

};

const moments = ['before', 'during', 'failed', 'passed', 'after'];

/**
 * Add during life moment
 */
life.set('during', [
	person => console.log(`${person.name} is going to kindergarden`),
	person => console.log(`${person.name} was held back in kindergarden`),
	person => { 
		person.age++;

		console.log(`${person.name} had there birthday today`)
	},
	person => console.log(`${person.name} is ${person.age} and still in kindergarden`),
	person => console.log(`${person.name} is going to have one heck of a time during life`),
	// etc...
]);


let human = { age: 0, name: 'zak', birthed: 'April 22 1997' };
moments.forEach(moment => life.eventful(human, moment))


### Contribute

PRs are welcomed to this project.
If you want to improve the pickpocket.js library, add
functionality or improve the docs please feel free to submit a PR.


### License

MIT © [Zachary Horton ~ (Clean Code Studio)](https://github.com/zhorton34/pickpocket.js)
