'strict'

// SimpleCollection
const PickPocket = function () {
	this.data = {};

	/**
	 * Determine if there are items within any data field
	 * @returns {boolean}
	 */
	this.any = function () {
		const isEmpty = value => ([
			value === null || value === '',
			Array.isArray(value) && value.length === 0,
			typeof value === 'object' && Object.keys(value).length === 0
		].includes(true));

		return !isEmpty(this.list());
	};

	/**
	 * Determine if data field has any items.
	 */
	this.has = function (field) {
		return Object.keys(this.data).includes(field)
			&& this.data[field].length > 0
	};

	/**
	 * Get all data
	 */
	this.all = function () {
		return this.data;
	};

	/**
	 * Array of items for every data field
	 */
	this.list = function (field = false) {
		return field
			? this.data[field]
			: Object.keys(this.data).map(field => this.data[field]).reduce((items, messages) => [
					...items,
					...messages
				],
			[]);
	};

	/**
	 * Get the data fields first item if it exists
	 */
	this.get = function (field) {
		if (this.has(field)) {
			return this.data[field][0];
		}
	};

	/**
	 * Add an item to a given data field
	 * @param field
	 * @param item
	 */
	this.add = function(field, item) {
		this.data[field] = Array.isArray(this.data[field])
			? this.data[field]
			: [];

		this.data[field] = [ ...this.data[field], item ];
	};

	/**
	 * Set data
	 * OR
	 * Set items on specific data field
	 */
	this.set = function (fieldOrData, value = []) {
		if (typeof fieldOrData === 'object') {
			this.data = fieldOrData;
		} else {
			this.data[fieldOrData] = value;
		}
	};


	/**
	 * Forget all data fields
	 * OR
	 * Forget items on a specific data field
	 */
	this.forget = function (field) {
		if (typeof field === 'undefined') {
			this.data = {};
		} else {
			this.data[field] = [];
		}
	};
};

const pickpocket = function (data = {}) {
	const pocket = new PickPocket();
	pocket.set(data);

	return pocket;
}

module.exports = pickpocket;
module.exports.default = ppickpocket;
module.exports.pickpocket = pickpocket;
module.exports.PickPocket = PickPocket;
