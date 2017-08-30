Feature('Fees Register Admin Console Edit Fixed Fees');

Before((I) => { // or Background

    I.amOnPage('https://test-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Admin Console Create New Fixed Fee', (I) => {
    I.getEditFeesPage();
    I.getCreateNewFee();
});

Scenario('Edit Fixed Fees Code', (I) => {
    I.getEditFeesPage();
    I.editFeesCode();
});