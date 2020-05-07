
module.exports = (it, expect, pickpocket) => {
	const pocket = pickpocket({
		email: ["email item"],
		name: ["name is a custom 8 char minimum error message"]
	});

	it('should properly "list" (array) of all pocket items', () => {
		expect(pocket.list().sort()).to.eql([
			"email item",
			"name is a custom 8 char minimum error message"
		]);
	});

	it('should "list" an array of item messages for a specific field', () => {
		pocket.set({
			first: ['abc', 'bcd', 'cde'],
			second: ['def', 'efg', 'fgh'],
			third: ['ghi', 'hij', 'ijk'],
		});

		expect(pocket.all()).to.eql({
			first: ['abc', 'bcd', 'cde'],
			second: ['def', 'efg', 'fgh'],
			third: ['ghi', 'hij', 'ijk'],
		});

		expect(pocket.list()).to.eql([
			'abc', 'bcd', 'cde',
			'def', 'efg', 'fgh',
			'ghi', 'hij', 'ijk',
		]);

		expect(pocket.list('first')).to.eql(['abc', 'bcd', 'cde']);
		expect(pocket.list('second')).to.eql(['def', 'efg', 'fgh']);
		expect(pocket.list('third')).to.eql(['ghi', 'hij', 'ijk']);
	});
};
