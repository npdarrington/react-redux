describe('App', () => {
  const websiteUrl = 'http://localhost:3000';

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

  it('should render to add todos when none are visible', () => {
    cy.get('.todo-list-container > h2').should('be.visible');
    cy.contains(`Your To-Do List is empty. Awesome!! Let's add some more!`);
  });
});