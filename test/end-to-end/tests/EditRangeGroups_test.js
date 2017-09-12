Feature('Fees Register Admin Console Edit Range Groups')

Before((I, Idam) => {
  Idam.createUser('admin@example.com', 'Passw0rd')
  I.amOnPage('/')
  I.login('admin@example.com', 'Passw0rd')
    I.getEditRangeGroups()
})

Scenario('Admin Console Create Range Groups', (I) => {
  I.getCreateNewRangeGroup()
})

Scenario('Admin Console Edit Range Groups', (I) => {
    I.editNewRangeGroup()
})

