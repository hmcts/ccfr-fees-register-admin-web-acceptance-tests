Feature('Find Probate Copies Category');

Before((I) => { // or Background
    I.amOnPage('https://dev-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Get Category probate Copies', (I) => {
    I.getCategoryProbateCopies();
    I.getAllCategory();

});
