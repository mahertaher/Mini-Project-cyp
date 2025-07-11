describe('Test Actualités COMAR', () => {
  it('Recherche Actualités', () => {
    cy.visit('https://www.comar.tn/');
    cy.contains('Actualités').click();
    cy.contains(/actualités/i).should('be.visible');
    cy.xpath('/html/body/div[1]/div[4]/div/section/div/div[3]/div/div[1]/form/div/div[1]/input')
      .type('COMAR Assurances partenaire');
    cy.xpath('/html/body/div[1]/div[4]/div/section/div/div[3]/div/div[1]/form/div/div[3]/button').click();
    cy.contains('COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba').should('exist');
  });
});
