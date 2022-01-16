export class Payment{
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