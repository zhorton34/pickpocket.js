'use strict';

module.exports = (it, expect, pickpocket) => {
	const pocket = pickpocket({
		email: ["email is not email"],
		name: ["name is a custom 8 char minimum error message"]
	});

	it('should return true if there are any items found in the pocket', () =>
	{
		expect(pocket.any()).to.eql(true);
	});

	it('should return false if there are NOT "any" items in pocket', () =>
	{
		pocket.set({
			name: [],
			email: [],
			example: []
		});

		expect(pocket.all()).to.eql({
			name: [],
			email: [],
			example: []
		});

		expect(pocket.any()).to.eql(false);
	});
};
