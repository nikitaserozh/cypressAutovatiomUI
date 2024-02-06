import { LoginPage } from '../../pages/Login';

describe('COOKIES', ()=>{
    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
           cy.visit(`${Cypress.env('demoQA')}/login`)
    //        cy.get('#userName').type('test')
    //        cy.get('#password').type('Test1234*')
    //        cy.get('#login').click()
    //        cy.contains('Log out')
    LoginPage.submitButtonLogin();
        })
    })
    beforeEach(() => {
        cy.intercept ({ resourceType: /xhr|fetch/ }, { log: false });
    })

    it ('create cookies with cy.session', ()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.url().then((url)=>{
            cy.log(url)
        })
    })
    it ('create cookies with cy.session', ()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })
})