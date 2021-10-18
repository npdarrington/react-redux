describe('Store state and functionality', () => {
	const websiteUrl = 'http://localhost:3000';
  
	it('should have the right initial state', () => {
		cy.visit(websiteUrl);
		cy.window()
			.its('store')
			.invoke('getState')
			.should('deep.equal', { todo: { value: [] } });
	});
});
