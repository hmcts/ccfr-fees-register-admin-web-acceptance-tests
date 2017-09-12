'use strict'
// in this file you can append custom step methods to 'I' object
const jsdom = require('jsdom')
const Factory = require('rosie').Factory
const faker = require('faker')
const fixedFee = faker.name.firstName()
const PercentageFee = faker.name.firstName()
const RangeGroupName = faker.name.firstName()
const CategoryName = faker.name.firstName()

module.exports = function () {

  return actor({
    login: function (email, password) {
      this.fillField('Email address', email)
      this.fillField('Password', password)
      this.waitForElement({css: '[type="submit"]'}, 30)
      this.click({css: '[type="submit"]'})
    },

    getWelcomePage: function () {
      this.see('Welcome')
      this.see('Edit categories')
      this.see('Edit range groups')
      this.see('Edit fees')
      this.click('Sign out')
    },

    getEditFeesPage: function () {
      this.click('Edit fees')
    },

    getEditRangeGroups: function () {
      this.click('Edit range groups')
    },

      getEditCategoryPage: function () {
      this.click('Edit categories')
      },

    getCreateNewFee: function () {
      this.click('Create new fee')
      this.click('Next')
      this.see('Enter code no longer than 50 characters')
      this.see('Enter type')
      this.fillField('Code', fixedFee)
      this.click('Next')
      this.see('Enter type')
      this.click('#typefixed')
      this.click('Next')
      this.see(fixedFee)
      this.click('Save')
      this.see('Enter amount equal or greater than zero')
      this.see('Enter description no longer than 2000 characters')
      this.fillField('Amount', '100')
      this.fillField('Description', 'Testing')
      this.click('Save')
      this.see(fixedFee)

    },

    editFeesCode: function () {
      this.click(fixedFee)
        this.fillField('Amount', '200')
      this.fillField('Description', 'Updated Testing')
      this.click('Save')
      this.see(fixedFee)
    },
    getCreateNewPercentageFee: function () {
      this.click('Create new fee')
      this.fillField('Code', PercentageFee)
      this.click('#typepercentage')
      this.click('Next')
      this.see(PercentageFee)
      this.fillField('percentage', '12.25')
      this.fillField('Description', 'Testing')
      this.click('Save')
      this.see(PercentageFee)
    },

    editPercentageFeesCode: function () {
      this.click(PercentageFee)
      this.fillField('percentage', '15.40')
      this.fillField('Description', 'Updated Testing')
      this.click('Save')
      this.see(PercentageFee)
    },

    getCreateNewRangeGroup: function () {
      this.click('Create new range group')
        this.click('Next')
        this.see('Enter code no longer than 50 characters')
      this.fillField('Code', RangeGroupName)
      this.click('Next')
        this.click('Save')
        this.see('Enter description no longer than 2000 characters')
      this.fillField('Description', 'Testing')
      this.click('+ Add another range')
      this.fillField('ranges[0][from]', '0.01')
      this.fillField('ranges[0][to]', '1000')
        this.selectOption('ranges[0][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('+ Add another range')
        this.fillField('ranges[1][from]', '1000')
        this.fillField('ranges[1][to]', '1500')
        this.selectOption('ranges[1][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('Save')
        this.see('ranges: provided set of ranges contains gaps or overlaps')
        this.fillField('ranges[1][from]', '1000.01')
        this.fillField('ranges[1][to]', '1500')
        this.selectOption('ranges[1][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('+ Add another range')
        this.fillField('ranges[2][from]', '1500.01')
        this.fillField('ranges[2][to]', '2000')
        this.selectOption('ranges[2][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('+ Add another range')
        this.fillField('ranges[3][from]', '2000.01')
        this.fillField('ranges[3][to]', '2500')
        this.selectOption('ranges[3][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('+ Add another range')
        this.fillField('ranges[4][from]', '2500.01')
        this.fillField('ranges[4][to]', '3000')
        this.selectOption('ranges[4][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('+ Add another range')
        this.fillField('ranges[5][from]', '3000.01')
        this.fillField('ranges[5][to]', '3500')
        this.selectOption('ranges[5][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
        this.click('+ Add another range')
        this.fillField('ranges[6][from]', '3500.01')
        this.fillField('ranges[6][to]', '4000')
        this.selectOption('ranges[6][feeCode]','X0025: Civil Court fees - Money Claims Online - Claim Amount - 300.01 upto 500 GBP')
      this.click('Save')
      this.see(RangeGroupName)
        this.see('7','.column-full>table>tbody>tr:last-child>td:nth-child(3)')
    },

    editNewRangeGroup: function () {
      this.click(RangeGroupName)
      this.fillField('Description', 'Updated Testing')
      this.fillField('ranges[0][from]', '1000')
      this.fillField('ranges[0][to]', '2000')
        this.click('Save')
        this.see('ranges: provided set of ranges contains gaps or overlaps')
        this.fillField('ranges[0][from]', '0.02')
        this.fillField('ranges[0][to]', '500')
        this.click('- Delete last range')
        this.click('Save')
        this.see('ranges: provided set of ranges contains gaps or overlaps')
        this.fillField('ranges[0][from]', '0.02')
        this.fillField('ranges[0][to]', '1000')
        this.click('Save')
        this.see(RangeGroupName)
        this.see('6','.column-full>table>tbody>tr:last-child>td:nth-child(3)')
    },
      getCreateNewCategory: function () {
          this.click('Create new category')
          this.click('Next')
          this.see('Enter code no longer than 50 characters')
          this.fillField('Code', CategoryName)
          this.click('Next')
          this.click('Save')
          this.see('Enter description no longer than 2000 characters')
          this.fillField('Description', 'Testing')
          this.selectOption('#rangeGroupCode', 'cmc-onlineCMC - Online')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[0\\]', 'X0048: Civil Court fees - Hearing fees - Claim Amount - 0.01 upto 300 GBP')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[1\\]', 'X0049: Civil Court fees - Hearing fees - Claim Amount - 300.01 upto 500 GBP')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[2\\]', 'X0050: Civil Court fees - Hearing fees - Claim Amount - 500.01 upto 1000 GBP')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[3\\]', 'X0051: Civil Court fees - Hearing fees - Claim Amount - 1000.01 upto 1500 GBP')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[4\\]', 'X0052: Civil Court fees - Hearing fees - Claim Amount - 1500.01 upto 3000 GBP')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[5\\]', 'X0053: Civil Court fees - Hearing fees - Claim Amount - 3000.01 upto 100000 GBP')
          this.click('+ Add fee')
          this.selectOption('#feeCodes\\[6\\]', 'X0046: Civil Court fees - Hearing fees - Multi track claim')
          this.click('Save')
          this.see(CategoryName)
          this.see('7','.column-full>table>tbody>tr:last-child>td:nth-child(4)')
      },

      editNewCategory: function () {
          this.click(CategoryName)
          this.fillField('Description', 'Updated Testing')
          this.click('- Delete last fee')
          this.click('Save')
          this.see(CategoryName)
          this.see('6','.column-full>table>tbody>tr:last-child>td:nth-child(4)')
      }
  })
}
