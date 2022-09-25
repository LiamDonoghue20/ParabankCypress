import { Given, Then, When, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page_objects/LoginPage";
import RegisterPage from "../../page_objects/RegisterPage"
import State from "../../data/State";


Given("user logs out", () => {
    
    RegisterPage.buttons.logOut().click();

});


When("the correct user details are entered", () => {
    cy.intercept('GET','/parabank/services_proxy/bank/customers/*/accounts').as('AccountsLoaded');
    LoginPage.inputFields.usernameInput().type(State.username);
    LoginPage.inputFields.passwordInput().type(State.password);


});

When("the incorrect user details are entered", () => {
    // cy.intercept('GET','/parabank/services_proxy/bank/customers/*/accounts').as('AccountsLoaded');
    LoginPage.inputFields.usernameInput().type(State.username);
    LoginPage.inputFields.passwordInput().type("incorrectPW");


});

And("user clicks login", () => {
    LoginPage.buttons.loginBtn().click();
});

Then("user is successfully logged on", () => {
    cy.wait('@AccountsLoaded').its('response.statusCode').should('eq',200)
    cy.title().should('contain', 'Accounts Overview')
});

Then("user is unable to log on", () => {
    cy.title().should('contain', 'Error')
});

