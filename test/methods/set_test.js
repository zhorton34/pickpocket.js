module.exports = (it, expect, pickpocket) => {
	const pocket = pickpocket({
		email: ["email item"],
		name: ["name is a custom 8 char minimum error message"]
	});


	it('should properly be "set" as the default', () => {
		expect(pocket.all()).to.eql({
			email: ["email item"],
			name: ["name is a custom 8 char minimum error message"]
		});
	});

	it('should "set" and override field items', () => {
		pocket.set('name', ['set', 'error', 'messages on the', 'name', 'field']);

		expect(pocket.all()).to.eql({
			email: ["email item"],
			name: ['set', 'error', 'messages on the', 'name', 'field']
		});
	});

	it('should "set" entirety of pocket data', () => {
		pocket.set({ something: ['works'], another: [] });

		expect(pocket.all()).to.eql({ something: ['works'], another: [] });
	});

};
