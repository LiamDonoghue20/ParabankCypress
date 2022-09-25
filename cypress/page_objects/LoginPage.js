class loginPagePO {
    
    inputFields = {
        usernameInput: () => cy.get(":nth-child(2) > .input"),
        passwordInput: () => cy.get(":nth-child(4) > .input"),
    }
    buttons = {
    loginBtn: () => cy.get(":nth-child(5) > .button"),
    registerBtn: () => cy.get("#loginPanel > :nth-child(3) > a")
  }

};
  const loginPage = new loginPagePO();
  export default loginPage;