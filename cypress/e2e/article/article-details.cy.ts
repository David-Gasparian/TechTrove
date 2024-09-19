let currentArticleId = '';
describe('User navigates to the article page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('And sees the article content', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('And sees the list of recommendations', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('And leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('And rates the article', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
