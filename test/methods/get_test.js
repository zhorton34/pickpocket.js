'use strict';

module.exports = (it, expect, pickpocket) => {
	const first = 'first';
	const pocket = pickpocket({
		email: ["email is not email"],
		name: [first, "second"]
	});

	it('should "get" first item from pocket field', () => {
		expect(pocket.get('name')).to.eql(first);
	})
};
