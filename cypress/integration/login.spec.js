/// <reference types = "Cypress"/>
import {onLogin} from "../support/pageObjects/login"
describe("Peach Finance Login test", () => {


    beforeEach(()=>{ 
        cy.visit("https://peach-borrower.peach-dev.finance/login")
        cy.viewport(1366,768)
    })

    it('TC_AUTH_001: Verify the login of PeachyLoans using valid Email and valid Password ', () => {
        onLogin.successfullLogin()
    });
    it('TC_AUTH_002: Verify the unsuccessful login of PeachyLoans using invalid Email and invalid Password ', () => {
       onLogin.invalidEmail_Password()

    });
    it('TC_AUTH_003: Verify the account is locked due to too many failed attempts using invalid Email and invalid Password ', () => {
    onLogin.tooManyAttempts()
    });
    it('TC_AUTH_004: Verify the unsuccessful login of PeachyLoans using valid Email and invalid Password ', () => {
     onLogin.invalidPass()

    });
    it('TC_AUTH_005: Verify the unsuccessful login page with blank Email and password. ', () => {
       onLogin.blankEmail_Password()
    });
    it('TC_AUTH_006: Verify the unsuccessful login of PeachyLoans entering Password only ', () => {
        onLogin.blankEmail()
    });
   
    
})


