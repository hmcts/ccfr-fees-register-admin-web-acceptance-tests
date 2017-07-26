Feature('Find Fees Details of hearing fee Category');

Before((I) => { // or Background
    I.amOnPage('https://dev-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Get Category Hearing Fees', (I) => {
    I.getCategoryHearingFees();
    I.getAllCategory();

});