describe('Store state and functionality', () => {
	const websiteUrl = 'http://localhost:3000';

	const fillInFormInfo1 = () => {
		cy.get('#title')
			.type('Reading - Personal Development')
			.should('have.value', 'Reading - Personal Development');
		cy.get('#description')
			.type('20 mins - 7 Habits of Highly Effective People')
			.should('have.value', '20 mins - 7 Habits of Highly Effective People');
		cy.get('#dueBy').type('2021-10-27').should('have.value', '2021-10-27');
	};
  
	const fillInFormInfo2 = () => {
		cy.get('#title').type('Grocery List').should('have.value', 'Grocery List');
		cy.get('#description')
			.type('Get ingredients to make Chicken Parmesan')
			.should('have.value', 'Get ingredients to make Chicken Parmesan');
		cy.get('#dueBy').type('2021-10-22').should('have.value', '2021-10-22');
	};

	const fillInFormInfo3 = () => {
		cy.get('#title')
			.type('Coding Practice')
			.should('have.value', 'Coding Practice');
		cy.get('#description')
			.type('2 hours - Firm foundation of Redux Toolkit')
			.should('have.value', '2 hours - Firm foundation of Redux Toolkit');
		cy.get('#dueBy').type('2021-10-18').should('have.value', '2021-10-18');
	};
  
	const todo1 = {
		id: 0,
		title: 'Reading - Personal Development',
		description: '20 mins - 7 Habits of Highly Effective People',
		dueBy: '2021-10-27',
	};
	const todo2 = {
		id: 1,
		title: 'Grocery List',
		description: 'Get ingredients to make Chicken Parmesan',
		dueBy: '2021-10-22',
	};
	const todo3 = {
		id: 2,
		title: 'Coding Practice',
		description: '2 hours - Firm foundation of Redux Toolkit',
		dueBy: '2021-10-18',
	};

	it('should have the right initial state', () => {
		cy.visit(websiteUrl);
		cy.window()
			.its('store')
			.invoke('getState')
			.should('deep.equal', { todo: { value: [] } });
	});

	it('should add a new todo to the store', () => {
		cy.visit(websiteUrl);
		fillInFormInfo1();
		cy.get('.new-todo__submit').click();
		cy.window()
			.its('store')
			.invoke('getState')
			.should('deep.equal', {
				todo: {
					value: [todo1],
				},
			});
	});

	it('should add multiple todos', () => {
		cy.visit(websiteUrl);
		fillInFormInfo1();
		cy.get('.new-todo__submit').click();
		fillInFormInfo2();
		cy.get('.new-todo__submit').click();
		fillInFormInfo3();
		cy.get('.new-todo__submit').click();
		cy.window()
			.its('store')
			.invoke('getState')
			.should('deep.equal', {
				todo: {
					value: [todo1, todo2, todo3],
				},
			});
	});
});
