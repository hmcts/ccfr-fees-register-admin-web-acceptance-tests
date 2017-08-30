Feature('Fees Register Admin Console Edit Range Groups');

Before((I) => { // or Background

    I.amOnPage('https://test-admin.fees-register.reform.hmcts.net/');
    I.login('admin@example.com', 'Passw0rd');

});

Scenario('Admin Console Create Range Groups', (I) => {
    I.getEditRangeGroups();
    I.getCreateNewRangeGroup();
});

Scenario('Admin Console Edit Range Groups', (I) => {
    I.getEditRangeGroups();
    I.editNewRangeGroup();
});

