
module.exports = (it, expect, pickpocket) => {
	const pocket = pickpocket({
		email: [],
		name: ["name is a custom 8 char minimum error message"]
	});

	it('should return true if it "has" items in specified field', () => {
		expect(pocket.has('name')).to.eql(true);
	});

	it('should return false if pocket "has" NO items in specified field', () => {
		expect(pocket.has('email')).to.eql(false);
	});

	it('should return true when pocket "has" no field of the specified name', () => {
		expect(pocket.has('does_not_exist')).to.eql(false);
	});
};
