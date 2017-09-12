Feature('Fees Register Admin Console Edit Percentage Fees')

Before((I, Idam) => {
  Idam.createUser('admin@example.com', 'Passw0rd')
  I.amOnPage('/')
  I.login('admin@example.com', 'Passw0rd')
    I.getEditFeesPage()
})

Scenario('Admin Console Create New Percentage Fee', (I) => {
    I.getCreateNewPercentageFee()
})

Scenario('Edit Percentage Fees Code', (I) => {
    I.editPercentageFeesCode()
})