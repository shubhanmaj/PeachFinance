/// < reference types = "Cypress"/>
import {onPayment} from "../support/pageObjects/payment"

describe("Loan Payment test suite", ()=> {
    beforeEach(() => {
        const email = "auto.user+bo-pboq-2qlj@peachfinance.com";
        const password = "hello12345"
        cy.visit("/")
        cy.login(email, password)
    })
    it("Setup payment method", ()=>{
        cy.get(".jKtogL").should("be.visible")
        cy.get('.LoanActionMenuTrigger__Button-sc-ltlagb-0').click()
        cy.contains("Manage payment methods").click()
        cy.contains("Add payment method").click()
        cy.get(".btn-label").eq(1).click()
        cy.get('input[name="first name"]').type("John",{force: true})
        cy.get('input[name="last name"]').type("Doe", {force: true})
        cy.get(".bdNrRQ").eq(0).type("6011111111111117", {force: true})
        cy.get(".bdNrRQ").eq(1).type("07/22", {force: true})
        cy.get(".bdNrRQ").eq(2).type("554", {force: true})
        cy.get(".bdNrRQ").eq(3).type("21770", {force: true})
        cy.get('[data-cy="submit"]').click({force: true})
        cy.get(".secondary").click({force: true})
        cy.get('.message').should("contain", "Debit card successfully added.")
    })
    it('Verify that payment is done successfully using "Upcoming + Overdue"', () => {
        onPayment.upComingOverdue()
    });
    it('User should not be allowed to process payment with "Remaining balance" selection', () => {
        onPayment.remainingBalance()
    });
    it('User should not be allowed to process payment with "Other amount" selection', () => {
        onPayment.otherAmount()
    });
    
})

 