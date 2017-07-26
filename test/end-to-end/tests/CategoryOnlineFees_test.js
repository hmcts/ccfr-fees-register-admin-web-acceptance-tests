Feature('Find Fees Details of OnlineFees Category');

Before((I) => { // or Background
    I.amOnPage('https://dev-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Get Category Online Fees', (I) => {
    I.getCategoryOnlineFees();
    I.getAllCategory();

});
