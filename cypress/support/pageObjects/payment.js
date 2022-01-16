export class Payment{
   setUpPaymentMethod(creditCardNumber, exp, cvv, zip){
      cy.get(".jKtogL").should("be.visible")
        cy.get('.LoanActionMenuTrigger__Button-sc-ltlagb-0').click()
        cy.contains("Manage payment methods").click()
        cy.contains("Add payment method").click()
        cy.get(".btn-label").eq(1).click()
        cy.get('input[name="first name"]').type("John",{force: true})
        cy.get('input[name="last name"]').type("Doe", {force: true})
        cy.get(".bdNrRQ").eq(0).type(creditCardNumber, {force: true})
        cy.get(".bdNrRQ").eq(1).type(exp, {force: true})
        cy.get(".bdNrRQ").eq(2).type(cvv, {force: true})
        cy.get(".bdNrRQ").eq(3).type(zip, {force: true})
        cy.get('[data-cy="submit"]').click({force: true})
        cy.get(".secondary").click({force: true})
        cy.get('.message').should("contain", "Debit card successfully added.")
   }

    upComingOverdue(){
        cy.contains("Make a payment").click()
    cy.contains("Upcoming + Overdue").click()
    cy.get('.select__value-container').click()
    cy.contains("Debit Card *1117").click()
    cy.contains("Continue").click()
    cy.get(".message").should("contain", "Payment amount must be less than or equal to the loan remaining balance.")
    }
 remainingBalance(){
    cy.contains("Make a payment").click()
    cy.get('.select__value-container').click()
    cy.contains("Debit Card *1117").click()
    cy.contains("Continue").click()
    cy.get(".message").should("contain", "Payment amount must be greater than zero.")
 }

 otherAmount(){
    cy.contains("Make a payment").click()
    cy.contains("Other amount").click()
    cy.get(".jAgdTZ").type("10")
    cy.get('.select__value-container').click()
    cy.contains("Debit Card *1117").click()
    cy.contains("Continue").click()
    cy.get(".message").should("contain", "Payment amount must be less than or equal to the loan remaining balance.")
 }
}
export const onPayment = new Payment();