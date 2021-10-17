const {Given, Then, When} = require('@cucumber/cucumber');
import * as search from '../pages/search'


When(/^User input '([^"]*)' on search field$/,async (valSearch) => {
    await search.inputSearch(valSearch);
});

Then(/^User can see results '([^"]*)' on page$/,async (valResult) => {
    await search.verifyResults(valResult);
});
