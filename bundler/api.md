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


pocket.any(); // true
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
[
	'name is a required', 
	'name must be a string', 
	'email must be an email',
	'email is a required field', 	
]
```
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
// ['email is a required', 'email must be an email']

````

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

pocket.list('email'); // ['set', 'email', 'items', 'list']
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

pocket.list('email'); // []
```
