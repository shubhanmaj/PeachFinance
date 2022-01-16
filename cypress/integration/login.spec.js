/// <reference types = "Cypress"/>
import { onLogin } from "../support/pageObjects/login";
describe("Verify the login of PeachyLoans using valid Email and valid Password", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("TC_AUTH_001: Verify the login of PeachyLoans using valid Email and valid Password ", () => {
    onLogin.successfullLogin();
  });
});

describe("Verify the unsuccessful login of PeachyLoans using invalid Email and invalid Password", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC_AUTH_2-1: Verify the unsuccessful login of PeachyLoans using invalid Email and invalid Password ", () => {
    onLogin.invalidEmail_Password();
  });
  it("TC_AUTH_2-2: Verify the account is locked due to too many failed attempts using invalid Email and invalid Password ", () => {
    onLogin.tooManyAttempts();
  });
  it("TC_AUTH_2-3: Verify the unsuccessful login of PeachyLoans using valid Email and invalid Password ", () => {
    onLogin.invalidPass();
  });
  it("TC_AUTH_2-4: Verify the unsuccessful login page with blank Email and password. ", () => {
    onLogin.blankEmail_Password();
  });
  it("TC_AUTH_2-5: Verify the unsuccessful login of PeachyLoans entering Password only ", () => {
    onLogin.blankEmail();
  });
});
