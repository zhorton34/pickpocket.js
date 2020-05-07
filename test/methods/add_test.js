'use strict';

module.exports = (it, expect, pickpocket) => {
	it('should be able to "add" item to specific field', () => {
		const pocket = pickpocket({
			name: ['required field is needed', 'too few characters'],
			email: ['email field is required']
		});

		const field = 'name';
		const message = 'custom name field error message';


		expect(pocket.list(field).includes(message)).to.eql(false);

		pocket.add(field, message);

		expect(pocket.list(field).includes(message)).to.eql(true);
	});
};
