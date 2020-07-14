class LoginCustomerpage {

    
    visit() {
      cy.visit('http://alpqa.s3-website-us-west-2.amazonaws.com/#/login');
    }
  
    getEmailError() {
      return cy.get(`[data-testid=SignInEmailError]`);
    }
  
    getPasswordError() {
      return cy.get(`[data-testid=SignInPasswordError]`);
    }
  
    fillEmail(value) {
      const field = cy.get(':nth-child(2) > app-input > .app-input-wrapper > .flex-start-center > .app-input');
      field.clear();
      field.type(value);
      
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('.mb-15 > app-input > .app-input-wrapper > .flex-start-center > .app-input');
      field.clear();
      field.type(value);
      
      return this;
    }
    
    submit() {
        cy.wait(2000);
      const button = cy.get('.btn');
      button.click();
    }

    CustomerList()
    {
      cy.wait(2000);
       const CustomerLink =  cy.get(':nth-child(4) > .nav-link > .font-12');
       CustomerLink.click();

       cy.wait(5000);
       cy.get('.flex-end-center > .btn > .fal').click();
    }

    AddCustomer(fname,lname, mobile,email)
    {
        cy.wait(2000);

        const winPromptStub = () => {
            return myName
        }
        
        cy.window().then(win => {
            cy.stub(win, 'prompt', winPromptStub).as('winPromptStubReturnNonNull')
        })

        const Firstname =  cy.get('.pl-0.mt-30 > .pr-15 > .ng-tns-c36-3 > .app-input-wrapper > .flex-start-center > .app-input');
        Firstname.clear();
        Firstname.type(fname);

        const Lastname =  cy.get('.pl-0.mt-30 > .pl-15 > .ng-tns-c36-3 > .app-input-wrapper > .flex-start-center > .app-input');
        Lastname.clear();
        Lastname.type(lname);

        const mobileno =  cy.get('.mt-28 > .pr-15 > .ng-tns-c36-3 > .app-input-wrapper > .flex-start-center > .app-input');
        mobileno.clear();
        mobileno.type(mobile);

        const emailid =  cy.get('.mt-28 > .pl-15 > .ng-tns-c36-3 > .app-input-wrapper > .flex-start-center > .app-input');
        emailid.clear();
        emailid.type(email);

        cy.get('.dialog-footer > .btn-primary').click();

        cy.wait(5000);
        cy.get('.ng-tns-c33-7 > .pi').click();
    }

    

  }

  export default LoginCustomerpage;