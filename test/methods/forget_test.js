
module.exports = (it, expect, pickpocket) => {
	const pocket = pickpocket({
		email: ["email is not email"],
		name: ["name is a custom 8 char minimum error message"]
	});

	
	it('should "forget" all pocket fields', () => {
		expect(pocket.all()).to.eql({
			email: ["email is not email"],
			name: ["name is a custom 8 char minimum error message"]
		});

		pocket.forget();

		expect(pocket.all()).to.eql({});
	});


	it('should "forget" specific pocket field items', () => {
		pocket.set({
			first: ['abc', 'bcd', 'dce'],
			second: ['vwx', 'wxy', 'xyz'],
		});

		expect(pocket.all()).to.eql({
			first: ['abc', 'bcd', 'dce'],
			second: ['vwx', 'wxy', 'xyz'],
		});

		pocket.forget('second');

		expect(pocket.all()).to.eql({
			first: ['abc', 'bcd', 'dce'],
			second: [],
		});

		expect(pocket.has('second')).to.eql(false);
	})
};
