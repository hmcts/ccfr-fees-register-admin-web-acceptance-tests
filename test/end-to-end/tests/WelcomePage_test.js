Feature('Fees Register Admin Console Welcome Page');

Before((I) => { // or Background

    I.amOnPage('https://test-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Admin Console Welcome Page', (I) => {
    I.getWelcomePage();
});