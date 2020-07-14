import LoginCustomerpage from 'D:\\cypresstesting\\cypress\\pages\\LoginCustomerpage';


describe('Customer create test case', () => {
  it('Create customer', () => {
    
    const objLoginCustomer = new LoginCustomerpage();
    objLoginCustomer.visit();

    objLoginCustomer.fillEmail("ghufran@autoleap.com");
    objLoginCustomer.fillPassword("Admin123!");
    objLoginCustomer.submit();

    objLoginCustomer.CustomerList();
    objLoginCustomer.AddCustomer("Raheel8","Khan8","03029232918","raheel@autoleap.com");

    

  })
})