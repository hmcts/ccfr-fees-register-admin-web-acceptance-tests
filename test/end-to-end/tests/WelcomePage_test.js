Feature('Fees Register Admin Console Welcome Page')

Before((I, Idam) => {
  Idam.createUser('admin@example.com', 'Passw0rd')
  I.amOnPage('/')
  I.login('admin@example.com', 'Passw0rd')
})

Scenario('Admin Console Welcome Page', (I) => {
  I.getWelcomePage()
})