import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User NOT authenticated', () => {
        it('Navigates to the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigation opens the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigation opens a non-existent route', () => {
            cy.visit('/fasfasfasf');
            cy.get(selectByTestId('NotFound')).should('exist');
        });
    });
    describe('User authenticated', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Navigation opens the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Navigation opens the articles list page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
