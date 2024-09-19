describe('Routing', () => {
    describe('User NOT authenticated', () => {
        it('Navigates to the main page', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Navigation opens the profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Navigation opens a non-existent route', () => {
            cy.visit('/fasfasfasf');
            cy.getByTestId('NotFound').should('exist');
        });
    });
    describe('User authenticated', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Navigation opens the profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Navigation opens the articles list page', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
