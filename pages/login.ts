const { I } = inject();
module.exports = {
    elements: {
        pageTitle: '.login_logo',
        username: '[id=user-name]',
        password: '[id=password]',
        loginButton: ' [id=login-button]',
        productsTitle: 'span.title'

    }, 

    async verifyHomePage() {
        let title = await I.grabTextFrom(this.elements.pageTitle);
        console.log("XXXXXXXXXXXXXXXXXXXX",title);
        I.wait(5);
        I.seeTextEquals(title, "Swag Labs");
    },

    verifyHomePageElements() {
        I.seeElement(this.elements.username);
        I.seeElement(this.elements.password);
        I.seeElement(this.elements.loginButton);
    },

    enterUserNameAndPassword(username) {
        I.amOnPage("/");
        I.wait(10);
        I.clearField(this.elements.username);
        I.fillField(this.elements.username, username);
        I.fillField(this.elements.password, "secret_sauce");
    },

    clickButton() {
        I.click(this.elements.loginButton);
    }, 
    verifyLoginSuccessful() {
        I.seeElement(this.elements.productsTitle);
    }
}