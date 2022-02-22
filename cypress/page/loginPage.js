/// <reference types="Cypress" />
import BasePage from './base';

export const tp_login_hdr = '#content > div > h2';
export const tp_login_usr = '#username';
export const tp_login_pwd = '#password';
export const tp_login_submit = '#login > button > i';

class LoginPageBase extends BasePage {
    getHeaderTitle() {
        return cy.get(tp_login_hdr).contains('Login Page');
    }

    getUserName() {
        return cy.get(tp_login_usr);
    }

    getPassWord() {
        return cy.get(tp_login_pwd);
    }

    getSubmit() {
        return cy.get(tp_login_submit);
    }

    // Action

    typeUser(a) {
        this.getUserName().type(a);
    }

    typePass(b) {
        this.getPassWord().type(b);
    }

    clickSubmit() {
        this.getSubmit().click()
    }
}
export default LoginPageBase;