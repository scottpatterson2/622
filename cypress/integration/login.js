/// <reference types="Cypress" />

import LoginPageBase from '../page/loginPage';
import SecureArea from '../page/secureArea';

const loginBasePage = new LoginPageBase();
const secureArea = new SecureArea();

let url = 'https://the-internet.herokuapp.com/login';

describe('Karmony Login Page', () => {
    it('Green Field Login', () => {
       cy.clearCookies()
         .visit(url)
           .fixture('users.json').as('users')
           .get('@users').then((users) => {
               const a = users[0].username
               const b = users[0].password

           loginBasePage.typeUser(a);
           loginBasePage.typePass(b);
           loginBasePage.clickSubmit();

               secureArea.getSecureArea();
               secureArea.clickLogOut();
           }
       )
    }
  )
    it('Bad User/Good Pass', () => {
            cy.clearCookies()
                .visit(url)
                .fixture('users.json').as('users')
                .get('@users').then((users) => {
                    const a = users[1].username
                    const b = users[1].password

                loginBasePage.typeUser(a);
                loginBasePage.typePass(b);
                loginBasePage.clickSubmit();

                    cy.get('#flash').contains('Your username is invalid!')
                }
            )
        }
    )
    it('Good User/Bad Pass', () => {
            cy.clearCookies()
                .visit(url)
                .fixture('users.json').as('users')
                .get('@users').then((users) => {
                    const a = users[2].username
                    const b = users[2].password

                loginBasePage.typeUser(a);
                loginBasePage.typePass(b);
                loginBasePage.clickSubmit();

                    cy.get('#flash').contains('Your password is invalid!')
                }
            )
        }
    )
    it('Good User/Lower Pass', () => {
            cy.clearCookies()
                .visit(url)
                .fixture('users.json').as('users')
                .get('@users').then((users) => {
                    const a = users[3].username
                    const b = users[3].password

                loginBasePage.typeUser(a);
                loginBasePage.typePass(b);
                loginBasePage.clickSubmit();

                    cy.get('#flash').contains('Your password is invalid!')
                }
            )
        }
    )
    it('No User/Good Pass', () => {
            cy.clearCookies()
                .visit(url)
                .fixture('users.json').as('users')
                .get('@users').then((users) => {
                    const a = users[4].username
                    const b = users[4].password

                loginBasePage.typeUser(a);
                loginBasePage.typePass(b);
                loginBasePage.clickSubmit();

                    cy.get('#flash').contains('Your username is invalid!')
                }
            )
        }
    )
    it('Good User/No Pass', () => {
            cy.clearCookies()
                .visit(url)
                .fixture('users.json').as('users')
                .get('@users').then((users) => {
                    const a = users[5].username
                    const b = users[5].password

                loginBasePage.typeUser(a);
                loginBasePage.typePass(b);
                loginBasePage.clickSubmit();

                    cy.get('#flash').contains('Your password is invalid!')
                }
            )
        }
    )
    it('No User/No Pass', () => {
            cy.clearCookies()
                .visit(url)
                .fixture('users.json').as('users')
                .get('@users').then((users) => {
                    const a = users[6].username
                    const b = users[6].password

                    loginBasePage.typeUser(a);
                    loginBasePage.typePass(b);
                    loginBasePage.clickSubmit();

                    cy.get('#flash').contains('Your password is invalid!')
                }
            )
        }
    )
})

