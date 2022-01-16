export class Login{
    successfullLogin(){
        const email = "auto.user+bo-pboq-2qlj@peachfinance.com";
        const password = "hello12345"
        cy.login( email, password )
    }
    invalidEmail_Password(){
        const email = "invalid01@peachfinance.com";
        const password = "invalid01Password"
        cy.login( email, password )
        cy.get(".lilBFF").should("contain", "Not authorized")
    }
    tooManyAttempts(){
        const email = "invalidemail11@peachfinance.com";
        const password = "invalidPassword"

        for (let i = 0; i < 6; i++) {
            cy.then(() => {
            cy.visit("https://peach-borrower.peach-dev.finance/login")
            cy.login(email, password)
            cy.get(".lilBFF").invoke("text").then((text) => {
                let unauthorized = "Not authorized";
                let tooManyAttempts = "This account has been locked due to too many failed attempts. Please try again later."
                if (text == unauthorized) {
            expect(text).to.equal(unauthorized);
                }else if(text == tooManyAttempts) {
                    expect(text).to.equal(tooManyAttempts);
                }
            })

            })
        }
    }
    invalidPass(){
        const email = "auto.user+bo-pboq-2qlj@peachfinance.com";
        const password = "invalidPass"
        cy.get("input[name='email']").type(email, {force: true})
        cy.get("input[name='password']").type(password, {force: true})
        cy.contains("Continue").click()
        cy.get(".lilBFF").should("contain", "Not authorized")
    }
    blankEmail(){
        cy.get("input[name='password']").type("hello12345", {force: true})
        cy.contains("Continue").click()
        cy.get(".lilBFF").should("contain", "Email is required")
    }
    blankEmail_Password(){
        cy.contains("Continue").click()
        cy.get(".lilBFF").should("contain", "Email is required")
    }

}
export const onLogin = new Login()