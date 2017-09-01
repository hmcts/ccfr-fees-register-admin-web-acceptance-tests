Feature('Fees Register Admin Console Edit Fixed Fees')

Before((I, Idam) => {
  Idam.createUser('admin@example.com', 'Passw0rd')
  I.amOnPage('/')
  I.login('admin@example.com', 'Passw0rd')
})

Scenario('Admin Console Create New Fixed Fee', (I) => {
  I.getEditFeesPage()
  I.getCreateNewFee()
})

Scenario('Edit Fixed Fees Code', (I) => {
  I.getEditFeesPage()
  I.editFeesCode()
})