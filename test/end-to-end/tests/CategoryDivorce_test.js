Feature('Find fees for Divorce Category');

Before((I) => { // or Background
    I.amOnPage('https://dev-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Get fees for Divorce Category', (I) => {
    I.getCategoryDivorce();
    I.getAllCategory();

});