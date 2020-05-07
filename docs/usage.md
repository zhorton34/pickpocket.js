# Usage

### Pickpocket.js (Simplified)


#### Example One: Form Error Messages (Organized Per Field)
> `Very Common Example`
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
```
