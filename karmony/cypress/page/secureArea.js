/// <reference types="Cypress" />

import BasePage  from "./base";

export const sa_hdr = '#content > div > h2';
export const sa_logout_submit = '#content > div > a';

class SecureArea extends BasePage {
    getSecureArea() {
        return cy.get(sa_hdr).contains('Secure Area');
    }

    getLogOut() {
        return cy.get(sa_logout_submit);
    }

    // Action

    clickLogOut() {
        return this.getLogOut().click()
    }
}

export default SecureArea;