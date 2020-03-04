describe('Lojinha', () => {
    it('Editar produto', () => {
        cy.visit('http://165.227.93.41/lojinha-web/');

        cy.get('#usuario').focus().type('admin');

        cy.get('#senha').focus().type('admin');

        cy.get('.btn').click();

        cy.get('[rev="4968"] > .title > a').click();

        cy.get('#produtocores').should('have.value', 'verde, branco');
    });
});