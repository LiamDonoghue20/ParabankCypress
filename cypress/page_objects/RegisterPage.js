import * as TestData from "../data/test-data.json";
import State from "../data/State";

class loginPagePO {    

 
    inputFields = {
        firstName: () => cy.get(':nth-child(1) > [width="20%"]'),
        lastName: () => cy.get(':nth-child(2) > [width="20%"]'),
        address: () => cy.get(':nth-child(3) > [width="20%"]'),
        city: () => cy.get(':nth-child(4) > [width="20%"]'),
        state: () => cy.get(':nth-child(5) > [width="20%"]'),
        zipCode: () => cy.get(':nth-child(6) > [width="20%"]'),
        phoneNumber: () => cy.get(':nth-child(7) > [width="20%"]'),
        ssn: () => cy.get(':nth-child(8) > [width="20%"]'),
        username: () => cy.get(':nth-child(10) > [width="20%"]'),
        password: () => cy.get(':nth-child(11) > [width="20%"]'),
        confirmPassword: () => cy.get(':nth-child(12) > [width="20%"]'),
    }
    buttons = {
        submitDetails: () => cy.get('[colspan="2"] > .button'),
        logOut: () => cy.get('#leftPanel > ul > :nth-child(8) > a')
    }

    container = {
      validationErrors: () => cy.get('#customer\\.address\\.state\\.errors')
    }

  createUsername(length) {
    var username           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      username += characters.charAt(Math.floor(Math.random() *  charactersLength));
    }

    //set the username as a state variable to store for the entirity of the script when the function is called
   return State.username = username;

}


createPassword(length) {
  var password           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    password += characters.charAt(Math.floor(Math.random() *  charactersLength));
  }

  //do the same for password
  return State.password = password;
}
  createAccount(){
    this.createUsername(6);
    this.createPassword(6);
    this.inputFields.firstName().type(TestData.firstName);
    this.inputFields.lastName().type(TestData.lastName);
    this.inputFields.address().type(TestData.address);
    this.inputFields.city().type(TestData.city);
    this.inputFields.state().type(TestData.state);
    this.inputFields.zipCode().type(TestData.zipCode);
    this.inputFields.phoneNumber().type(TestData.phoneNumber);
    this.inputFields.ssn().type(TestData.ssn);
    this.inputFields.username().type(State.username);
    this.inputFields.password().type(State.password);
    this.inputFields.confirmPassword().type(State.password);

  }

  createIncorrectAccount(){
    this.createUsername(6);
    this.createPassword(6);
    this.inputFields.firstName().type(TestData.firstName);
    this.inputFields.lastName().type(TestData.lastName);
    this.inputFields.address().type(TestData.address);
    this.inputFields.ssn().type(TestData.ssn);
    this.inputFields.username().type(State.username);
    this.inputFields.password().type(State.password);
    this.inputFields.confirmPassword().type(State.password);

  }

};
  const loginPage = new loginPagePO();
  export default loginPage;