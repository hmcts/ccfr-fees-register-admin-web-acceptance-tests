Feature('Fees Register Admin Console Edit Categories')

Before((I, Idam) => {
    Idam.createUser('admin@example.com', 'Passw0rd')
    I.amOnPage('/')
    I.login('admin@example.com', 'Passw0rd')
    I.getEditCategoryPage()
})

Scenario('Admin Console Create New Categories', (I) => {
    I.getCreateNewCategory()
})

Scenario('Edit Fixed Fees Code', (I) => {
    I.editNewCategory()
})