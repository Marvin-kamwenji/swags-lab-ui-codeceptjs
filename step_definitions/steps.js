const { I, loginPage } = inject();
// Add in your custom step files

Given('I am on the homepage', async() => {
  I.amOnPage('/');
  await loginPage.verifyHomePage();
});

Then('I validate the title of the page along with the elements', () => {
  loginPage.verifyHomePageElements();
});

When(/^I enter (.*) and password$/, (username) => {
  loginPage.enterUserNameAndPassword(username);
});

Then('I click on login page', () => {
  loginPage.clickButton();
});

Then('I should be able to login successfully', () => {
  loginPage.verifyLoginSuccessful();
});


