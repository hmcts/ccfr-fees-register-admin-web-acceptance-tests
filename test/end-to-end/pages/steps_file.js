'use strict';
// in this file you can append custom step methods to 'I' object
const jsdom = require('jsdom');

module.exports = function() {

  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
      login: function(email, password) {
          this.fillField('Email address', email);
          this.fillField('Password', password);
          this.waitForElement({css: '[type="submit"]'}, 30);
          this.click({css: '[type="submit"]'});
          this.waitForElement({css: '[role="button"]'}, 60);
          this.click({css: '[role="button"]'});
      },
      getCategoryOnlineFees: function() {
          this.click('onlinefees');
          this.see('Id');
          this.see('onlinefees');
          this.see('Ranges');
          this.see('Range');
          this.see('Amount');
          this.see('X0434', '.column-full>table>tbody>tr:last-child>td:nth-child(1)');
          this.see('£10,000.01 - £15,000', '.column-full>table>tbody>tr:last-child>td:nth-child(2)');
          this.see('4.5%', '.column-full>table>tbody>tr:last-child>td:nth-child(3)');
          this.see('X0024', '.column-full>table>tbody>tr:first-child>td:nth-child(1)');
          this.see('£0.01 - £300', '.column-full>table>tbody>tr:first-child>td:nth-child(2)');
          this.see('£25', '.column-full>table>tbody>tr:first-child>td:nth-child(3)');
          this.see('X0025', '.column-full>table>tbody>tr:nth-child(2)>td:nth-child(1)');
          this.see('£300.01 - £500', '.column-full>table>tbody>tr:nth-child(2)>td:nth-child(2)');
          this.see('£35', '.column-full>table>tbody>tr:nth-child(2)>td:nth-child(3)');
          this.see('No flat fees defined');
          this.click('Cancel');
      },
      getAllCategory: function() {
          this.see('onlinefees');
          this.see('hearingfees');
          this.see('probatefees');
          this.see('probate-copies');
          this.see('divorce');
      },
      getCategoryHearingFees: function() {
          this.click('hearingfees');
          this.see('Id');
          this.see('hearingfees');
          this.see('Ranges');
          this.see('Range');
          this.see('Amount');
          this.see('X0053', '.column-full>table>tbody>tr:last-child>td:nth-child(1)');
          this.see('£3,000.01 - £100,000', '.column-full>table>tbody>tr:last-child>td:nth-child(2)');
          this.see('£335', '.column-full>table>tbody>tr:last-child>td:nth-child(3)');
          this.see('X0048', '.column-full>table>tbody>tr:first-child>td:nth-child(1)');
          this.see('£0.01 - £300', '.column-full>table>tbody>tr:first-child>td:nth-child(2)');
          this.see('£25', '.column-full>table>tbody>tr:first-child>td:nth-child(3)');
          this.see('X0049', '.column-full>table>tbody>tr:nth-child(2)>td:nth-child(1)');
          this.see('£300.01 - £500', '.column-full>table>tbody>tr:nth-child(2)>td:nth-child(2)');
          this.see('£55', '.column-full>table>tbody>tr:nth-child(2)>td:nth-child(3)');
          this.see('Flat Fees');
          this.see('X0046', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(1)')
          this.see('Civil Court fees - Hearing fees - Multi track claim', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(2)')
          this.see('£1,090', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(3)')
          this.see('X0047', '.column-full>table:nth-of-type(2)>tbody>tr:last-child>td:nth-child(1)')
          this.see('Civil Court fees - Hearing fees - Fast track claim', '.column-full>table:nth-of-type(2)>tbody>tr:last-child>td:nth-child(2)')
          this.see('£545', '.column-full>table:nth-of-type(2)>tbody>tr:last-child>td:nth-child(3)')
          this.click('Cancel');
      },
      getCategoryProbateFees: function() {
          this.click('probatefees');
          this.see('Id');
          this.see('probatefees');
          this.see('Ranges');
          this.see('Range');
          this.see('Amount');
          this.see('X0250', '.column-full>table>tbody>tr:last-child>td:nth-child(1)');
          this.see('£5,000 - ', '.column-full>table>tbody>tr:last-child>td:nth-child(2)');
          this.see('£215', '.column-full>table>tbody>tr:last-child>td:nth-child(3)');
          this.see('X0249', '.column-full>table>tbody>tr:first-child>td:nth-child(1)');
          this.see('£0 - £4,999.99', '.column-full>table>tbody>tr:first-child>td:nth-child(2)');
          this.see('£0', '.column-full>table>tbody>tr:first-child>td:nth-child(3)');
          this.see('Flat Fees');
          this.see('X0251', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(1)')
          this.see('Application for a second grant in an estate where a previous grant has been issued.', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(2)')
          this.see('£20', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(3)')
          this.click('Cancel');
      },
      getCategoryProbateCopies: function() {
          this.click('probate-copies');
          this.see('Id');
          this.see('probate-copies');
          this.see('Ranges');
          this.see('Range');
          this.see('Amount');
          this.see('X0251-2', '.column-full>table>tbody>tr:last-child>td:nth-child(1)');
          this.see('£0.02 - ', '.column-full>table>tbody>tr:last-child>td:nth-child(2)');
          this.see('£0.5', '.column-full>table>tbody>tr:last-child>td:nth-child(3)');
          this.see('X0251-1', '.column-full>table>tbody>tr:first-child>td:nth-child(1)');
          this.see('£0 - £0.01', '.column-full>table>tbody>tr:first-child>td:nth-child(2)');
          this.see('£10', '.column-full>table>tbody>tr:first-child>td:nth-child(3)');
          this.see('Flat Fees');
          this.see('X0251-3', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(1)')
          this.see('Additional Copies -Official (sealed) copies', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(2)')
          this.see('£0.5', '.column-full>table:nth-of-type(2)>tbody>tr:first-child>td:nth-child(3)')
          this.click('Cancel');
      },
      getCategoryDivorce: function() {
          this.click('divorce');
          this.see('Id');
          this.see('divorce');
          this.see('Ranges');
          this.see('No ranges defined');
          this.see('Flat Fees');
          this.see('X0206', '.column-full>table>tbody>tr:last-child>td:nth-child(1)');
          this.see('Filing an application to make a decree nisi, ' +
              'absolute (divorce), or a conditional order, final (dissolution) - ' +
              'only payable if the original application for divorce, nullity or ' +
              'civil partnership dissolution was filed before 1 July 2013 – ' +
              'fees order 5.1.', '.column-full>table>tbody>tr:last-child>td:nth-child(2)');
          this.see('£50', '.column-full>table>tbody>tr:last-child>td:nth-child(3)');
          this.see('X0165', '.column-full>table>tbody>tr:first-child>td:nth-child(1)');
          this.see('Filing an application for a divorce, nullity or civil partnership dissolution – ' +
              'fees order 1.2.', '.column-full>table>tbody>tr:first-child>td:nth-child(2)');
          this.see('£550', '.column-full>table>tbody>tr:first-child>td:nth-child(3)');
          this.click('Cancel');
      },
  })
};
