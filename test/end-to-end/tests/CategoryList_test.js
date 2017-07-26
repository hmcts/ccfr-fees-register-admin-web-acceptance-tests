Feature('Admin Console APP Login Screen');

Before((I) => { // or Background
    I.amOnPage('https://dev-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Get all Category List', (I) => {
    I.getAllCategory();
});