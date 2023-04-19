describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="companyName"]').contains('Academlo')

    cy.get('[data-testid="connect"]').click()

    cy.get('[data-testid="companyName"]').should('have.value', '')

    cy.contains('Iniciar sesión')
  })
})
