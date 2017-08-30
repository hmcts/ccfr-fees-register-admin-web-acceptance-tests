Feature('Fees Register Admin Console Edit Percentage Fees');

Before((I) => { // or Background

    I.amOnPage('https://test-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Admin Console Create New Percentage Fee', (I) => {
    I.getEditFeesPage();
    I.getCreateNewPercentageFee();
});

Scenario('Edit Percentage Fees Code', (I) => {
    I.getEditFeesPage();
    I.editPercentageFeesCode();
});