/// < reference types = "Cypress"/>
import {onPayment} from "../support/pageObjects/payment"

describe("Loan Payment test suite", ()=> {
    beforeEach(() => {
        const email = "auto.user+bo-pboq-2qlj@peachfinance.com";
        const password = "hello12345"
        cy.visit("/")
        cy.login(email, password)
    })
    it("TC_Paymet_3-1: Verify that user can add payment method successfully", ()=>{
        const creditCardNumber = "6011111111111117";
        const exp = "07/22";
        const cvv = "554";
        const zip = "21101"
        onPayment.setUpPaymentMethod(creditCardNumber, exp, cvv, zip)
    })
    it('TC_Paymet_4-1: Verify that payment is done successfully using "Upcoming + Overdue" ', () => {
        onPayment.upComingOverdue()
    });
    it('TC_Paymet_5-1: Verify that Payment should not be proceed with Remaining Balance', () => {
        onPayment.remainingBalance()
    });
    it('TC_Paymet_6-1: Verify that Payment should not be proceed with Other amount', () => {
        onPayment.otherAmount()
    });
    
})

 