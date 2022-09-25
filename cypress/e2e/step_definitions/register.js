import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page_objects/LoginPage";
import RegisterPage from "../../page_objects/RegisterPage";

Given("the ParaBank home is loaded", () => {
    cy.visit('https://parabank.parasoft.com/');
});

When("user clicks Register", () => {
    LoginPage.buttons.registerBtn().click();
    cy.url().should('include','register')
});

And("user enters user details", () => {

    RegisterPage.createAccount();
    RegisterPage.buttons.submitDetails().click();
})

And("user enters incorrect user details", () => {

    RegisterPage.createIncorrectAccount();
    RegisterPage.buttons.submitDetails().click();
})


Then("user successfully registers new account", () => {
 
    cy.title().should('contain', 'ParaBank | Customer Created');


});


Then("user is unable to register a new account", () => {
 
    cy.title().should('contain', 'ParaBank | Register for Free Online Account Access');
    RegisterPage.container.validationErrors().should('be.visible');
 
 

});