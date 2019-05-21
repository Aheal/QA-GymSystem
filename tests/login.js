this.loginFail = function (browser) {
        browser
        .url('http://localhost:3000/login')
        .waitForElementVisible('body')
        .setValue('#user', 'Aheal')
        .setValue('#pass', '1')
        .click('button')
        .pause(1000)
        .assert.attributeContains('#notification', 'class','')
        .end();
    }
 
this.loginSuccess = function (browser) {
    browser
    .url('http://localhost:3000/login')
    .waitForElementVisible('body')
    .setValue('#user', 'Aheal')
    .setValue('#pass', '123')
    .click('button')
    .pause(1000)
    .assert.attributeContains('#AddMember', 'class','container')
    .end();
};
