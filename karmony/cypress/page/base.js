/// <reference types="Cypress" />


class BasePage {
    openPage(path = '/') {
        cy.visit(path);
    }

    reloadPage() {
        cy.reload();
    }

    waitForShow(elementSelector) {
        this.getBlock(elementSelector).should('exist').and('be.visible');
    }

}

export default BasePage;