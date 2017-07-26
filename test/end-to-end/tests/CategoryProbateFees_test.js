Feature('Find Fees Details of probate fee Category');

Before((I) => { // or Background
    I.amOnPage('https://dev-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Get Category probate Fees', (I) => {
    I.getCategoryProbateFees();
    I.getAllCategory();

});
