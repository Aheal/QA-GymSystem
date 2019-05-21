this.registerMember = function(browser){
    browser
    .url('http://localhost:3000/members')
    .waitForElementVisible('body')
    .setValue('#name', 'Fernando')
    .setValue('#gender', 'Male')
    .setValue('#age', '22')
    .setValue('#phone', '9931538502')
    .setValue('#date', '05/27/2019')
    .click('button[type=submit]')
    .pause(1000)
    .assert.attributeContains('#Fernando', 'value','Fernando')
    .end();
}