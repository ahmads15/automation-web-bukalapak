const {Given, Then, When} = require('@cucumber/cucumber');
import * as login from '../pages/login'

Given(/^User open browser '([^"]*)' page bukalapak.com$/, async (value) => {
    await login.openWebsite(value);
});

When(/^User input '([^"]*)' as email or phone no$/,async (valueEmail) => {
    await login.inputEmail(valueEmail);
});

When(/^User click button Lanjut$/,async () => {
    await login.clickBtnLanjut();
});

Then(/^User can see validation '([^"]*)' field$/, async (valueMsg) => {
    await login.errMsgForm(valueMsg);
});

When(/^User input '([^"]*)' as password$/,async (valuePass) => {
    await login.inputPassword(valuePass);
});

Then(/^User sucess login$/, async () => {
    await login.verifySuccessLogin();
});

Then(/^User can verify UI login page$/, async () => {
    await login.verifyUIlogin();
});


