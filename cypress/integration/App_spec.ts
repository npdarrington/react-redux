describe('App', () => {
  const websiteUrl = 'http://localhost:3000';
  
  const fillInFormInfo = () => {
    cy.get('#title')
      .type('Grocery List')
      .should('have.value', 'Grocery List');
    cy.get('#description')
      .type('Order groceries from grocery list today')
      .should('have.value', 'Order groceries from grocery list today');
    cy.get('#dueBy')
      .type('2021-10-25')
      .should('have.value', '2021-10-25');
  }

  beforeEach(() => {
    cy.visit(websiteUrl);
  });

  it('should visit website', () => {
    cy.url().should('include', 'http://localhost:3000');
  });

  it('should render the title', () => {
    cy.contains('My To-Do List!');
  });

  it('should render the form', () => {
    cy.get('#title').should('be.visible');
    cy.get('#description').should('be.visible');
    cy.get('#dueBy').should('be.visible');
    cy.get('.new-todo__submit').should('be.visible');
  });

  it('should allow user to fill out a new todo', () => {
    fillInFormInfo();
  });

  it('should show an error message with missing form info', () => {
    cy.get('#title')
      .type('Grocery List')
      .should('have.value', 'Grocery List');
    cy.get('#description')
      .type('Order groceries from grocery list today')
      .should('have.value', 'Order groceries from grocery list today');
    cy.get('.new-todo__submit').click();
    cy.get('.new-todo__form-error')
      .contains('You must fill out a title, description and due by date to add a new idea');
  });

  it('should allow a user to submit a new todo', () => {
    fillInFormInfo()
    cy.get('.new-todo__submit').click();
    cy.get('.todo-card').should('be.visible');
    cy.get('.todo-card__title').contains('Grocery List');
    cy.get('.todo-card__description').contains('Order groceries from grocery list today');
    cy.get('.todo-card__due-by').contains('Due Date: 2021-10-25');
    cy.get('.todo-card__btn-delete').should('be.visible');
  });

  it('should allow a user to delete an existing todo', () => {
    fillInFormInfo();
    cy.get('.new-todo__submit').click();
    cy.get('.todo-card').should('be.visible');
    cy.get('.todo-card__title').contains('Grocery List');
    cy.get('.todo-card__description').contains('Order groceries from grocery list today');
    cy.get('.todo-card__due-by').contains('Due Date: 2021-10-25');
    cy.get('.todo-card__btn-delete').should('be.visible').click();
    cy.get('.todo-list-container > h2').should('be.visible');
    cy.contains(`Your To-Do List is empty. Awesome!! Let's add some more!`);
  });

  it('should render to add todos when none are visible', () => {
    cy.get('.todo-list-container > h2').should('be.visible');
    cy.contains(`Your To-Do List is empty. Awesome!! Let's add some more!`);
  });
});