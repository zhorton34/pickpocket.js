
module.exports = (it, expect, pickpocket) => {
	const pocket = pickpocket({
		email: ["email is not email"],
		name: ["name is a custom 8 char minimum error message"]
	});


	it('should return "all" data', () => {
		expect(pocket.all()).to.eql({
			email: ["email is not email"],
			name: ["name is a custom 8 char minimum error message"]
		});
	});
};
